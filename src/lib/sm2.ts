import { CardState, Grade } from "./types";

/**
 * SM-2 间隔重复算法
 * 基于 SuperMemo 2 算法实现
 */
export function calculateSM2(state: CardState, grade: Grade): CardState {
  let { easeFactor, interval, repetitions } = state;

  if (grade >= 3) {
    // 回忆成功
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    // 回忆失败，重置
    repetitions = 0;
    interval = 1;
  }

  // 更新难度因子
  easeFactor =
    easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }

  const now = Date.now();
  const nextReview = now + interval * 24 * 60 * 60 * 1000;

  return {
    ...state,
    easeFactor,
    interval,
    repetitions,
    nextReview,
    lastReview: now,
  };
}

/**
 * 创建新的卡片状态
 */
export function createNewCardState(wordId: string): CardState {
  return {
    wordId,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: Date.now(),
    lastReview: 0,
  };
}

/**
 * 判断卡片是否需要复习
 */
export function isDueForReview(state: CardState): boolean {
  return Date.now() >= state.nextReview;
}
