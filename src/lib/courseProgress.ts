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
} {
  const meta: Record<CourseCategory, { label: string; labelDe: string; icon: string; color: string; bgColor: string }> = {
    pronunciation: { label: "发音基础", labelDe: "Aussprache", icon: "🎤", color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/30" },
    grammar: { label: "语法体系", labelDe: "Grammatik", icon: "📐", color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-900/30" },
    expressions: { label: "实用表达", labelDe: "Ausdrücke", icon: "💬", color: "text-emerald-600", bgColor: "bg-emerald-50 dark:bg-emerald-900/30" },
    culture: { label: "文化知识", labelDe: "Kultur", icon: "🌍", color: "text-amber-600", bgColor: "bg-amber-50 dark:bg-amber-900/30" },
  };
  return meta[category];
}
