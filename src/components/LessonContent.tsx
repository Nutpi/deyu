"use client";

import { CourseCategory, LessonSection } from "@/lib/types";
import { getCategoryMeta } from "@/lib/courseProgress";

interface LessonContentProps {
  sections: LessonSection[];
  category?: CourseCategory;
}

const categoryHeaderBg: Record<CourseCategory, string> = {
  pronunciation: "bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40",
  grammar: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
  expressions: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40",
  culture: "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40",
};

function SectionRenderer({ section, category }: { section: LessonSection; category: CourseCategory }) {
  const meta = getCategoryMeta(category);
  const headerBg = categoryHeaderBg[category];

  switch (section.type) {
    case "text":
      return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 border-l-gray-300 dark:border-l-gray-600">
          {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">{section.heading}</h3>}
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
        </div>
      );

    case "table":
      return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 ${meta.borderAccent}`}>
          {section.heading && <h3 className={`text-base font-semibold mb-2 ${meta.color}`}>{section.heading}</h3>}
          {section.content && <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{section.content}</p>}
          {section.tableHeaders && section.tableRows && (
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 -mx-1">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className={headerBg}>
                    {section.tableHeaders.map((h, i) => (
                      <th key={i} className="px-3 py-2.5 text-left font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableRows.map((row, ri) => (
                    <tr key={ri} className={`border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${ri % 2 === 1 ? "bg-gray-50/50 dark:bg-gray-700/30" : ""}`}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-3 py-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );

    case "example":
      return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700`}>
          <div className={`h-1 ${meta.gradient}`} />
          <div className="p-4">
            {section.heading && <h3 className={`text-base font-semibold mb-2 ${meta.color}`}>{section.heading}</h3>}
            <div className={`${meta.gradientLight} rounded-lg p-3`}>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
            </div>
          </div>
        </div>
      );

    case "tip":
      return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
          <div className="p-4">
            {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">{section.heading}</h3>}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-2">
                <span className="text-base mt-0.5">💡</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "comparison":
      return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400" />
          <div className="p-4">
            {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">{section.heading}</h3>}
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 rounded-lg p-3 border border-violet-200 dark:border-violet-800">
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function LessonContent({ sections, category }: LessonContentProps) {
  const cat = category ?? "grammar";

  return (
    <div className="space-y-4">
      {sections.map((section, i) => (
        <div key={i} className="animate-fade-slide-in" style={{ animationDelay: `${i * 80}ms` }}>
          <SectionRenderer section={section} category={cat} />
        </div>
      ))}
    </div>
  );
}
