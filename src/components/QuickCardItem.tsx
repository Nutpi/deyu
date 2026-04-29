"use client";

import { QuickCard, CourseLesson } from "@/lib/types";

interface QuickCardItemProps {
  card: QuickCard;
  lesson: CourseLesson;
}

const categoryColors: Record<string, string> = {
  pronunciation: "text-purple-600 dark:text-purple-400",
  grammar: "text-blue-600 dark:text-blue-400",
  expressions: "text-green-600 dark:text-green-400",
  culture: "text-amber-600 dark:text-amber-400",
};

const categoryBorders: Record<string, string> = {
  pronunciation: "border-purple-200 dark:border-purple-800",
  grammar: "border-blue-200 dark:border-blue-800",
  expressions: "border-green-200 dark:border-green-800",
  culture: "border-amber-200 dark:border-amber-800",
};

export default function QuickCardItem({ card, lesson }: QuickCardItemProps) {
  const colorClass = categoryColors[lesson.category] || "text-blue-600";
  const borderClass = categoryBorders[lesson.category] || "border-blue-200";

  return (
    <div className="flex flex-col h-full px-2">
      {/* Heading */}
      <h3 className={`text-lg font-bold mb-3 ${colorClass}`}>{card.heading}</h3>

      {/* Core point */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-4">
        <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{card.corePoint}</p>
      </div>

      {/* Examples */}
      <div className={`bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-4 border ${borderClass}`}>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">例句</p>
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
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 border border-amber-200 dark:border-amber-800 mt-auto">
          <div className="flex items-start gap-2">
            <span className="text-base mt-0.5 shrink-0">💡</span>
            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{card.tip}</p>
          </div>
        </div>
      )}
    </div>
  );
}
