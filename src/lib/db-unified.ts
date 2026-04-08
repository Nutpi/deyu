import { CardState, DailyRecord, UserSettings, SessionStats } from "./types";
import * as localDb from "./db";
import * as cloudDb from "./db-cloud";

let useCloud = false;

export function setCloudMode(enabled: boolean) {
  useCloud = enabled;
}

export function isCloudMode(): boolean {
  return useCloud;
}

const db = () => (useCloud ? cloudDb : localDb);

// ─── Card States ──────────────────────────────────────────

export async function getCardState(wordId: string): Promise<CardState | undefined> {
  return db().getCardState(wordId);
}

export async function getAllCardStates(): Promise<CardState[]> {
  return db().getAllCardStates();
}

export async function saveCardState(state: CardState): Promise<void> {
  return db().saveCardState(state);
}

export async function initCardState(wordId: string): Promise<CardState> {
  return db().initCardState(wordId);
}

// ─── Daily Records ────────────────────────────────────────

export async function getDailyRecord(date: string): Promise<DailyRecord | undefined> {
  return db().getDailyRecord(date);
}

export async function saveDailyRecord(record: DailyRecord): Promise<void> {
  return db().saveDailyRecord(record);
}

export async function getAllDailyRecords(): Promise<DailyRecord[]> {
  return db().getAllDailyRecords();
}

// ─── Settings ─────────────────────────────────────────────

export async function getSettings(): Promise<UserSettings> {
  return db().getSettings();
}

export async function saveSettings(settings: UserSettings): Promise<void> {
  return db().saveSettings(settings);
}

// ─── Streak ───────────────────────────────────────────────

export async function getStreak(): Promise<number> {
  return db().getStreak();
}

// ─── Session Stats ────────────────────────────────────────

export async function getSessionStats(date: string): Promise<SessionStats | undefined> {
  return db().getSessionStats(date);
}

export async function updateSessionStats(date: string, correct: boolean): Promise<void> {
  return db().updateSessionStats(date, correct);
}
