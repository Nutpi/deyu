// 德语词汇数据类型
export type Article = "der" | "die" | "das";
export type WordType = "noun" | "verb" | "adjective" | "adverb" | "preposition" | "conjunction" | "particle" | "phrase" | "number";
export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Vocabulary {
  id: string;
  german: string;
  article?: Article;       // 名词的冠词
  plural?: string;          // 名词的复数形式
  wordType: WordType;
  chinese: string;          // 中文释义
  english?: string;          // 英文释义
  phonetic?: string;        // 发音 (IPA)
  example?: string;         // 德语例句
  exampleTranslation?: string; // 例句中文翻译
  exampleTranslationEn?: string; // 例句英文翻译
  level: CEFRLevel;
}

// 用户学习状态
export interface CardState {
  wordId: string;
  easeFactor: number;    // SM-2 难度因子 (默认 2.5)
  interval: number;      // 复习间隔 (天)
  repetitions: number;   // 连续正确次数
  nextReview: number;    // 下次复习时间 (timestamp)
  lastReview: number;    // 上次复习时间 (timestamp)
}

// 用户评分 (SM-2)
export type Grade = 0 | 1 | 2 | 3 | 4 | 5;

// 每日打卡记录
export interface DailyRecord {
  date: string;           // YYYY-MM-DD
  newWords: number;       // 新学单词数
  reviewWords: number;    // 复习单词数
  correctRate: number;    // 正确率
}

// 用户设置
export interface UserSettings {
  dailyNewWords: number;  // 每日新词数量
  dailyGoal: number;      // 每日目标 (总学习数)
}

// 课程类型
export type CourseCategory = "pronunciation" | "grammar" | "expressions" | "culture";
export type ExerciseType = "multiple-choice" | "fill-blank" | "article-drill" | "flashcard";

export interface CourseLesson {
  id: string;
  category: CourseCategory;
  titleZh: string;
  titleDe: string;
  titleEn: string;
  description: string;
  level: CEFRLevel;
  order: number;
  estimatedMinutes: number;
  prerequisiteIds?: string[];
  sections: LessonSection[];
  exercises: LessonExercise[];
}

export interface LessonSection {
  type: "text" | "table" | "example" | "tip" | "comparison";
  heading?: string;
  content: string;
  tableHeaders?: string[];
  tableRows?: string[][];
}

export interface LessonExercise {
  id: string;
  type: ExerciseType;
  questionZh: string;
  questionDe?: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: number;
  bestScore?: number;
}

// 简易课程卡片
export interface QuickCardExample {
  german: string;
  chinese: string;
}

export interface QuickCard {
  id: string;                // e.g. "gram-01-qc1"
  heading: string;           // 短标题
  corePoint: string;         // 一句话核心知识点
  examples: QuickCardExample[];
  tip?: string;
}

export interface QuickLesson {
  lessonId: string;          // 关联 CourseLesson.id
  cards: QuickCard[];
}

// 学习会话统计
export interface SessionStats {
  date: string;
  totalStudied: number;
  correct: number;
  wrong: number;
}
