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

  return (
    <div className={`${meta.bgColor} rounded-2xl p-4 border border-gray-100 dark:border-gray-700`}>
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
        <div className="mt-3 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              category === "pronunciation" ? "bg-blue-500" :
              category === "grammar" ? "bg-purple-500" :
              category === "expressions" ? "bg-emerald-500" : "bg-amber-500"
            }`}
            style={{ width: `${(completed / total) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
