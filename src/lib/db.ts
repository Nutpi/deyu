import { CardState, DailyRecord, UserSettings, SessionStats, LessonProgress } from "./types";
import { createNewCardState } from "./sm2";

const DB_NAME = "deyu-db";
const DB_VERSION = 2;

const STORES = {
  cardStates: "cardStates",
  dailyRecords: "dailyRecords",
  settings: "settings",
  sessionStats: "sessionStats",
  lessonProgress: "lessonProgress",
} as const;

let dbInstance: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORES.cardStates)) {
        db.createObjectStore(STORES.cardStates, { keyPath: "wordId" });
      }
      if (!db.objectStoreNames.contains(STORES.dailyRecords)) {
        const store = db.createObjectStore(STORES.dailyRecords, { keyPath: "date" });
        store.createIndex("date", "date", { unique: true });
      }
      if (!db.objectStoreNames.contains(STORES.settings)) {
        db.createObjectStore(STORES.settings, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORES.sessionStats)) {
        db.createObjectStore(STORES.sessionStats, { keyPath: "date" });
      }
      if (!db.objectStoreNames.contains(STORES.lessonProgress)) {
        db.createObjectStore(STORES.lessonProgress, { keyPath: "lessonId" });
      }
    };

    request.onsuccess = () => {
      dbInstance = request.result;
      resolve(dbInstance);
    };

    request.onerror = () => reject(request.error);
  });
}

function getStore(
  storeName: string,
  mode: IDBTransactionMode
): Promise<IDBObjectStore> {
  return openDB().then(
    (db) => db.transaction(storeName, mode).objectStore(storeName)
  );
}

// --- Card States ---

export async function getCardState(wordId: string): Promise<CardState | undefined> {
  const store = await getStore(STORES.cardStates, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get(wordId);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function getAllCardStates(): Promise<CardState[]> {
  const store = await getStore(STORES.cardStates, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveCardState(state: CardState): Promise<void> {
  const store = await getStore(STORES.cardStates, "readwrite");
  return new Promise((resolve, reject) => {
    const req = store.put(state);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function initCardState(wordId: string): Promise<CardState> {
  const existing = await getCardState(wordId);
  if (existing) return existing;
  const state = createNewCardState(wordId);
  await saveCardState(state);
  return state;
}

// --- Daily Records ---

export async function getDailyRecord(date: string): Promise<DailyRecord | undefined> {
  const store = await getStore(STORES.dailyRecords, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get(date);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveDailyRecord(record: DailyRecord): Promise<void> {
  const store = await getStore(STORES.dailyRecords, "readwrite");
  return new Promise((resolve, reject) => {
    const req = store.put(record);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function getAllDailyRecords(): Promise<DailyRecord[]> {
  const store = await getStore(STORES.dailyRecords, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// --- Settings ---

const DEFAULT_SETTINGS: UserSettings & { id: string } = {
  id: "user-settings",
  dailyNewWords: 10,
  dailyGoal: 30,
};

export async function getSettings(): Promise<UserSettings> {
  const store = await getStore(STORES.settings, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get("user-settings");
    req.onsuccess = () => {
      if (req.result) {
        const { id, ...settings } = req.result;
        resolve(settings);
      } else {
        resolve({ dailyNewWords: DEFAULT_SETTINGS.dailyNewWords, dailyGoal: DEFAULT_SETTINGS.dailyGoal });
      }
    };
    req.onerror = () => reject(req.error);
  });
}

export async function saveSettings(settings: UserSettings): Promise<void> {
  const store = await getStore(STORES.settings, "readwrite");
  return new Promise((resolve, reject) => {
    const req = store.put({ id: "user-settings", ...settings });
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

// --- Streak Calculation ---

export async function getStreak(): Promise<number> {
  const records = await getAllDailyRecords();
  if (records.length === 0) return 0;

  const dates = records
    .map((r) => r.date)
    .sort()
    .reverse();

  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  // streak 必须包含今天或昨天
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

// --- Session Stats ---

export async function getSessionStats(date: string): Promise<SessionStats | undefined> {
  const store = await getStore(STORES.sessionStats, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get(date);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function updateSessionStats(
  date: string,
  correct: boolean
): Promise<void> {
  const store = await getStore(STORES.sessionStats, "readwrite");
  return new Promise((resolve, reject) => {
    const getReq = store.get(date);
    getReq.onsuccess = () => {
      const existing: SessionStats = getReq.result || {
        date,
        totalStudied: 0,
        correct: 0,
        wrong: 0,
      };
      existing.totalStudied += 1;
      if (correct) {
        existing.correct += 1;
      } else {
        existing.wrong += 1;
      }
      const putReq = store.put(existing);
      putReq.onsuccess = () => resolve();
      putReq.onerror = () => reject(putReq.error);
    };
    getReq.onerror = () => reject(getReq.error);
  });
}

// --- Lesson Progress ---

export async function getLessonProgress(lessonId: string): Promise<LessonProgress | undefined> {
  const store = await getStore(STORES.lessonProgress, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get(lessonId);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function getAllLessonProgress(): Promise<LessonProgress[]> {
  const store = await getStore(STORES.lessonProgress, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveLessonProgress(progress: LessonProgress): Promise<void> {
  const store = await getStore(STORES.lessonProgress, "readwrite");
  return new Promise((resolve, reject) => {
    const req = store.put(progress);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
