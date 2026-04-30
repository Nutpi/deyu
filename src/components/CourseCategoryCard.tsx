"use client";

import { CourseCategory } from "@/lib/types";
import { getCategoryMeta } from "@/lib/courseProgress";

interface CourseCategoryCardProps {
  category: CourseCategory;
  total: number;
  completed: number;
}

export default function CourseCategoryCard({ category, total, completed }: CourseCategoryCardProps) {
  const meta = getCategoryMeta(category);

  const progressBars: Record<CourseCategory, string> = {
    pronunciation: "bg-gradient-to-r from-purple-500 to-indigo-500",
    grammar: "bg-gradient-to-r from-blue-500 to-cyan-500",
    expressions: "bg-gradient-to-r from-emerald-500 to-teal-500",
    culture: "bg-gradient-to-r from-amber-500 to-orange-500",
  };

  return (
    <div className={`${meta.gradientLight} rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 ${meta.borderAccent}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{meta.icon}</span>
          <div>
            <h3 className={`font-semibold ${meta.color}`}>{meta.label}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{meta.labelDe}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-sm font-medium ${meta.color}`}>{completed}/{total}</p>
          <p className="text-xs text-gray-400">已完成</p>
        </div>
      </div>
      {total > 0 && (
        <div className="mt-3 h-2 bg-gray-200/60 dark:bg-gray-700/60 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressBars[category]}`}
            style={{ width: `${(completed / total) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
