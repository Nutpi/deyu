import { supabase } from "./supabase";
import { CardState, DailyRecord, UserSettings, SessionStats } from "./types";

// ─── Card States ──────────────────────────────────────────

export async function getCardState(wordId: string): Promise<CardState | undefined> {
  const { data, error } = await supabase
    .from("card_states")
    .select("*")
    .eq("word_id", wordId)
    .maybeSingle();
  if (error) throw error;
  if (!data) return undefined;
  return {
    wordId: data.word_id,
    easeFactor: data.ease_factor,
    interval: data.interval_days,
    repetitions: data.repetitions,
    nextReview: new Date(data.next_review).getTime(),
    lastReview: new Date(data.last_review).getTime(),
  };
}

export async function getAllCardStates(): Promise<CardState[]> {
  const { data, error } = await supabase
    .from("card_states")
    .select("*")
    .order("last_review", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(mapCardState);
}

export async function saveCardState(state: CardState): Promise<void> {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) throw new Error("Not authenticated");
  const { error } = await supabase.from("card_states").upsert({
    user_id: user.id,
    word_id: state.wordId,
    ease_factor: state.easeFactor,
    interval_days: state.interval,
    repetitions: state.repetitions,
    next_review: new Date(state.nextReview).toISOString(),
    last_review: new Date(state.lastReview).toISOString(),
  });
  if (error) throw error;
}

export async function initCardState(wordId: string): Promise<CardState> {
  const existing = await getCardState(wordId);
  if (existing) return existing;
  const { createNewCardState } = await import("./sm2");
  const state = createNewCardState(wordId);
  await saveCardState(state);
  return state;
}

// ─── Daily Records ────────────────────────────────────────

export async function getDailyRecord(date: string): Promise<DailyRecord | undefined> {
  const { data, error } = await supabase
    .from("daily_records")
    .select("*")
    .eq("date", date)
    .maybeSingle();
  if (error) throw error;
  if (!data) return undefined;
  return {
    date: data.date,
    newWords: data.new_words,
    reviewWords: data.review_words,
    correctRate: data.correct_rate,
  };
}

export async function saveDailyRecord(record: DailyRecord): Promise<void> {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) throw new Error("Not authenticated");
  const { error } = await supabase.from("daily_records").upsert({
    user_id: user.id,
    date: record.date,
    new_words: record.newWords,
    review_words: record.reviewWords,
    correct_rate: record.correctRate,
  });
  if (error) throw error;
}

export async function getAllDailyRecords(): Promise<DailyRecord[]> {
  const { data, error } = await supabase
    .from("daily_records")
    .select("*")
    .order("date", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((r: Record<string, unknown>) => ({
    date: r.date as string,
    newWords: r.new_words as number,
    reviewWords: r.review_words as number,
    correctRate: r.correct_rate as number,
  }));
}

// ─── Settings ─────────────────────────────────────────────

const DEFAULT_SETTINGS: UserSettings = {
  dailyNewWords: 10,
  dailyGoal: 30,
};

export async function getSettings(): Promise<UserSettings> {
  const { data, error } = await supabase
    .from("user_settings")
    .select("*")
    .maybeSingle();
  if (error) throw error;
  if (!data) return { ...DEFAULT_SETTINGS };
  return {
    dailyNewWords: data.daily_new_words,
    dailyGoal: data.daily_goal,
  };
}

export async function saveSettings(settings: UserSettings): Promise<void> {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) throw new Error("Not authenticated");
  const { error } = await supabase.from("user_settings").upsert({
    user_id: user.id,
    daily_new_words: settings.dailyNewWords,
    daily_goal: settings.dailyGoal,
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

// ─── Streak ───────────────────────────────────────────────

export async function getStreak(): Promise<number> {
  const records = await getAllDailyRecords();
  if (records.length === 0) return 0;

  const dates = records.map((r) => r.date).sort().reverse();
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (dates[0] !== today && dates[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 0; i < dates.length - 1; i++) {
    const current = new Date(dates[i]);
    const prev = new Date(dates[i + 1]);
    const diff = (current.getTime() - prev.getTime()) / 86400000;
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

// ─── Session Stats ────────────────────────────────────────

export async function getSessionStats(date: string): Promise<SessionStats | undefined> {
  const { data, error } = await supabase
    .from("session_stats")
    .select("*")
    .eq("date", date)
    .maybeSingle();
  if (error) throw error;
  if (!data) return undefined;
  return {
    date: data.date,
    totalStudied: data.total_studied,
    correct: data.correct,
    wrong: data.wrong,
  };
}

export async function updateSessionStats(date: string, correct: boolean): Promise<void> {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) throw new Error("Not authenticated");

  const existing = await getSessionStats(date);
  const totalStudied = (existing?.totalStudied ?? 0) + 1;
  const correctCount = (existing?.correct ?? 0) + (correct ? 1 : 0);
  const wrongCount = (existing?.wrong ?? 0) + (correct ? 0 : 1);

  const { error } = await supabase.from("session_stats").upsert({
    user_id: user.id,
    date,
    total_studied: totalStudied,
    correct: correctCount,
    wrong: wrongCount,
  });
  if (error) throw error;
}

// ─── Helpers ──────────────────────────────────────────────

function mapCardState(data: Record<string, unknown>): CardState {
  return {
    wordId: data.word_id as string,
    easeFactor: data.ease_factor as number,
    interval: data.interval_days as number,
    repetitions: data.repetitions as number,
    nextReview: new Date(data.next_review as string).getTime(),
    lastReview: new Date(data.last_review as string).getTime(),
  };
}
