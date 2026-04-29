import { QuickLesson } from "@/lib/types";
import { pronunciationQuickCards } from "./pronunciation";
import { grammarQuickCards } from "./grammar";
import { expressionsQuickCards } from "./expressions";
import { cultureQuickCards } from "./culture";

export const allQuickLessons: QuickLesson[] = [
  ...pronunciationQuickCards,
  ...grammarQuickCards,
  ...expressionsQuickCards,
  ...cultureQuickCards,
];

export function getQuickLessonById(lessonId: string): QuickLesson | undefined {
  return allQuickLessons.find((ql) => ql.lessonId === lessonId);
}
