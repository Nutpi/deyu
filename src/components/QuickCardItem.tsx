"use client";

import { QuickCard, CourseLesson } from "@/lib/types";
import { getCategoryMeta } from "@/lib/courseProgress";

interface QuickCardItemProps {
  card: QuickCard;
  lesson: CourseLesson;
}

const categoryGradients: Record<string, string> = {
  pronunciation: "bg-gradient-to-r from-purple-500 to-indigo-500",
  grammar: "bg-gradient-to-r from-blue-500 to-cyan-500",
  expressions: "bg-gradient-to-r from-emerald-500 to-teal-500",
  culture: "bg-gradient-to-r from-amber-500 to-orange-500",
};

export default function QuickCardItem({ card, lesson }: QuickCardItemProps) {
  const meta = getCategoryMeta(lesson.category);
  const gradientClass = categoryGradients[lesson.category] || categoryGradients.grammar;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Top accent gradient strip */}
      <div className={`h-1.5 ${gradientClass}`} />

      <div className="flex flex-col flex-1 p-5">
        {/* Heading */}
        <h3 className={`text-lg font-bold mb-3 ${meta.color}`}>{card.heading}</h3>

        {/* Core point */}
        <div className={`${meta.gradientLight} rounded-xl p-4 mb-4`}>
          <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{card.corePoint}</p>
        </div>

        {/* Examples */}
        <div className={`${meta.gradientLight} rounded-xl p-4 mb-4 border ${meta.borderLight}`}>
          <p className={`text-xs font-medium mb-2 ${meta.color}`}>例句</p>
          <div className="space-y-2.5">
            {card.examples.map((ex, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{ex.german}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{ex.chinese}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        {card.tip && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-xl p-3 border border-amber-200 dark:border-amber-800 mt-auto">
            <div className="flex items-start gap-2">
              <span className="text-base mt-0.5 shrink-0">💡</span>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{card.tip}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
