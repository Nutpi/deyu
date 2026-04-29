"use client";

import Link from "next/link";

interface LessonCompleteProps {
  score: number;
  total: number;
  lessonId: string;
  nextLessonId?: string;
}

export default function LessonComplete({ score, total, nextLessonId }: LessonCompleteProps) {
  const percentage = Math.round((score / total) * 100);
  const emoji = percentage >= 80 ? "🎉" : percentage >= 60 ? "👍" : "💪";
  const message = percentage >= 80 ? "太棒了！掌握得很好！" : percentage >= 60 ? "不错！继续加油！" : "再练练会更好！";

  return (
    <div className="flex flex-col items-center py-8 space-y-6">
      <span className="text-6xl">{emoji}</span>
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{score}/{total}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{message}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">正确率 {percentage}%</p>
      </div>
      <div className="w-full space-y-3">
        {nextLessonId && (
          <Link
            href={`/courses/${nextLessonId}`}
            className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-center transition-colors"
          >
            下一课
          </Link>
        )}
        <Link
          href="/courses"
          className="block w-full py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium text-center transition-colors"
        >
          返回课程列表
        </Link>
      </div>
    </div>
  );
}
