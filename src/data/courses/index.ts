import { CourseLesson, CourseCategory } from "@/lib/types";
import { pronunciationLessons } from "./pronunciation";
import { grammarLessons } from "./grammar";
import { expressionsLessons } from "./expressions";
import { cultureLessons } from "./culture";

export const allLessons: CourseLesson[] = [
  ...pronunciationLessons,
  ...grammarLessons,
  ...expressionsLessons,
  ...cultureLessons,
].sort((a, b) => {
  const categoryOrder: Record<CourseCategory, number> = {
    pronunciation: 0,
    grammar: 1,
    expressions: 2,
    culture: 3,
  };
  if (categoryOrder[a.category] !== categoryOrder[b.category]) {
    return categoryOrder[a.category] - categoryOrder[b.category];
  }
  return a.order - b.order;
});

export function getLessonsByCategory(category: CourseCategory): CourseLesson[] {
  return allLessons.filter((l) => l.category === category);
}

export function getLessonById(id: string): CourseLesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function getCategoryCount(category: CourseCategory): number {
  return allLessons.filter((l) => l.category === category).length;
}
