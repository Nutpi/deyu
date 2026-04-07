const PREFIX = "deyu-session-";

export function saveLearnSession(data: { wordIds: string[]; index: number; count: number; level: string }) {
  try {
    sessionStorage.setItem(PREFIX + "learn", JSON.stringify(data));
  } catch { /* ignore */ }
}

export function loadLearnSession(): { wordIds: string[]; index: number; count: number; level: string } | null {
  try {
    const raw = sessionStorage.getItem(PREFIX + "learn");
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function clearLearnSession() {
  try { sessionStorage.removeItem(PREFIX + "learn"); } catch { /* ignore */ }
}

export function saveReviewSession(data: { wordIds: string[]; index: number; reviewed: number; correct: number }) {
  try {
    sessionStorage.setItem(PREFIX + "review", JSON.stringify(data));
  } catch { /* ignore */ }
}

export function loadReviewSession(): { wordIds: string[]; index: number; reviewed: number; correct: number } | null {
  try {
    const raw = sessionStorage.getItem(PREFIX + "review");
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function clearReviewSession() {
  try { sessionStorage.removeItem(PREFIX + "review"); } catch { /* ignore */ }
}
