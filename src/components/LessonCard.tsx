"use client";

import Link from "next/link";
import { CourseCategory, CourseLesson, LessonProgress } from "@/lib/types";
import { getCategoryMeta } from "@/lib/courseProgress";

interface LessonCardProps {
  lesson: CourseLesson;
  progress?: LessonProgress;
  locked: boolean;
  category?: CourseCategory;
}

const categoryBorders: Record<CourseCategory, string> = {
  pronunciation: "border-l-purple-400 dark:border-l-purple-600",
  grammar: "border-l-blue-400 dark:border-l-blue-600",
  expressions: "border-l-emerald-400 dark:border-l-emerald-600",
  culture: "border-l-amber-400 dark:border-l-amber-600",
};

const categoryBadgeBg: Record<CourseCategory, string> = {
  pronunciation: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-600 dark:text-purple-400",
  grammar: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400",
  expressions: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-600 dark:text-emerald-400",
  culture: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-600 dark:text-amber-400",
};

const categoryLevelBg: Record<CourseCategory, string> = {
  pronunciation: "bg-purple-100/60 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
  grammar: "bg-blue-100/60 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
  expressions: "bg-emerald-100/60 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
  culture: "bg-amber-100/60 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400",
};

export default function LessonCard({ lesson, progress, locked, category }: LessonCardProps) {
  const isCompleted = progress?.completed;
  const cat = category ?? "grammar";

  return locked ? (
    <div className={`flex items-center gap-3 p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-l-gray-300 dark:border-l-gray-600 opacity-50`}>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 text-sm">
        🔒
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-400 dark:text-gray-500 truncate">{lesson.titleZh}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500">{lesson.estimatedMinutes}分钟 · 请先完成前置课程</p>
      </div>
    </div>
  ) : (
    <Link href={`/courses/${lesson.id}`}>
      <div className={`flex items-center gap-3 p-3.5 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-4 ${categoryBorders[cat]}`}>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
          isCompleted
            ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-600 dark:text-green-400"
            : categoryBadgeBg[cat]
        }`}>
          {isCompleted ? "✓" : lesson.order}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{lesson.titleZh}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.titleDe} · {lesson.estimatedMinutes}分钟</p>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryLevelBg[cat]}`}>
          {lesson.level}
        </span>
      </div>
    </Link>
  );
}
