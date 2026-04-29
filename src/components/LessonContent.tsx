"use client";

import { LessonSection } from "@/lib/types";

interface LessonContentProps {
  sections: LessonSection[];
}

function SectionRenderer({ section }: { section: LessonSection }) {
  switch (section.type) {
    case "text":
      return (
        <div className="space-y-2">
          {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{section.heading}</h3>}
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
        </div>
      );

    case "table":
      return (
        <div className="space-y-2">
          {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{section.heading}</h3>}
          {section.content && <p className="text-sm text-gray-600 dark:text-gray-400">{section.content}</p>}
          {section.tableHeaders && section.tableRows && (
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    {section.tableHeaders.map((h, i) => (
                      <th key={i} className="px-2 py-2 text-left font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableRows.map((row, ri) => (
                    <tr key={ri} className="border-b border-gray-100 dark:border-gray-700">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-2 py-1.5 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700 whitespace-pre-line">
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
        <div className="space-y-2">
          {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{section.heading}</h3>}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
          </div>
        </div>
      );

    case "tip":
      return (
        <div className="space-y-2">
          {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{section.heading}</h3>}
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-2">
              <span className="text-base mt-0.5">💡</span>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
            </div>
          </div>
        </div>
      );

    case "comparison":
      return (
        <div className="space-y-2">
          {section.heading && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{section.heading}</h3>}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-100 dark:border-purple-800">
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function LessonContent({ sections }: LessonContentProps) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  );
}
