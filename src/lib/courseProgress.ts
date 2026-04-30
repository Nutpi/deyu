import { CourseLesson, CourseCategory, LessonProgress } from "./types";

export function getCompletedCountByCategory(
  progress: LessonProgress[],
  category: CourseCategory,
  allLessons: CourseLesson[]
): number {
  const lessonIds = allLessons.filter((l) => l.category === category).map((l) => l.id);
  return progress.filter((p) => p.completed && lessonIds.includes(p.lessonId)).length;
}

export function getTotalByCategory(
  category: CourseCategory,
  allLessons: CourseLesson[]
): number {
  return allLessons.filter((l) => l.category === category).length;
}

export function isLessonLocked(
  lesson: CourseLesson,
  progress: LessonProgress[]
): boolean {
  if (!lesson.prerequisiteIds || lesson.prerequisiteIds.length === 0) return false;
  return lesson.prerequisiteIds.some((preId) => {
    const p = progress.find((pr) => pr.lessonId === preId);
    return !p || !p.completed;
  });
}

export function getNextLesson(
  currentLessonId: string,
  allLessons: CourseLesson[]
): CourseLesson | undefined {
  const current = allLessons.find((l) => l.id === currentLessonId);
  if (!current) return undefined;
  return allLessons.find(
    (l) => l.category === current.category && l.order === current.order + 1
  );
}

export function getCategoryMeta(category: CourseCategory): {
  label: string;
  labelDe: string;
  icon: string;
  color: string;
  bgColor: string;
  gradient: string;
  gradientLight: string;
  accent: string;
  accentDark: string;
  borderAccent: string;
  borderLight: string;
} {
  const meta: Record<CourseCategory, {
    label: string; labelDe: string; icon: string;
    color: string; bgColor: string;
    gradient: string; gradientLight: string;
    accent: string; accentDark: string;
    borderAccent: string; borderLight: string;
  }> = {
    pronunciation: {
      label: "发音基础", labelDe: "Aussprache", icon: "🎤",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/30",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
      gradientLight: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40",
      accent: "#8b5cf6", accentDark: "#a78bfa",
      borderAccent: "border-purple-400 dark:border-purple-600",
      borderLight: "border-purple-200 dark:border-purple-800",
    },
    grammar: {
      label: "语法体系", labelDe: "Grammatik", icon: "📐",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      gradientLight: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
      accent: "#3b82f6", accentDark: "#60a5fa",
      borderAccent: "border-blue-400 dark:border-blue-600",
      borderLight: "border-blue-200 dark:border-blue-800",
    },
    expressions: {
      label: "实用表达", labelDe: "Ausdrücke", icon: "💬",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
      gradientLight: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40",
      accent: "#10b981", accentDark: "#34d399",
      borderAccent: "border-emerald-400 dark:border-emerald-600",
      borderLight: "border-emerald-200 dark:border-emerald-800",
    },
    culture: {
      label: "文化知识", labelDe: "Kultur", icon: "🌍",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/30",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
      gradientLight: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40",
      accent: "#f59e0b", accentDark: "#fbbf24",
      borderAccent: "border-amber-400 dark:border-amber-600",
      borderLight: "border-amber-200 dark:border-amber-800",
    },
  };
  return meta[category];
}
