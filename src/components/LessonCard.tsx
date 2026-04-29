"use client";

import Link from "next/link";
import { CourseLesson, LessonProgress } from "@/lib/types";
import { isLessonLocked } from "@/lib/courseProgress";

interface LessonCardProps {
  lesson: CourseLesson;
  progress?: LessonProgress;
  locked: boolean;
}

export default function LessonCard({ lesson, progress, locked }: LessonCardProps) {
  const isCompleted = progress?.completed;

  return locked ? (
    <div className="flex items-center gap-3 p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 opacity-60">
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
      <div className="flex items-center gap-3 p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
          isCompleted
            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
            : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
        }`}>
          {isCompleted ? "✓" : lesson.order}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{lesson.titleZh}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.titleDe} · {lesson.estimatedMinutes}分钟</p>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
          {lesson.level}
        </span>
      </div>
    </Link>
  );
}
