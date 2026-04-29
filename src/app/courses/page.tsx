"use client";

import { useState, useEffect } from "react";
import { CourseCategory, LessonProgress } from "@/lib/types";
import { allLessons, getLessonsByCategory } from "@/data/courses";
import { getAllLessonProgress } from "@/lib/db";
import { getCompletedCountByCategory, getTotalByCategory } from "@/lib/courseProgress";
import CourseCategoryCard from "@/components/CourseCategoryCard";
import LessonCard from "@/components/LessonCard";

const categories: { key: CourseCategory | "all"; label: string; icon: string }[] = [
  { key: "all", label: "全部", icon: "📋" },
  { key: "pronunciation", label: "发音", icon: "🎤" },
  { key: "grammar", label: "语法", icon: "📐" },
  { key: "expressions", label: "表达", icon: "💬" },
  { key: "culture", label: "文化", icon: "🌍" },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | "all">("all");
  const [progress, setProgress] = useState<LessonProgress[]>([]);

  useEffect(() => {
    getAllLessonProgress().then(setProgress);
  }, []);

  const completedTotal = progress.filter((p) => p.completed).length;
  const totalLessons = allLessons.length;

  const displayCategories: CourseCategory[] = selectedCategory === "all"
    ? ["pronunciation", "grammar", "expressions", "culture"]
    : [selectedCategory];

  return (
    <div className="space-y-4 pb-20">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">德语课程</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Deutsch Kurse</p>
      </div>

      {/* Overall progress */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">学习进度</span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{completedTotal}/{totalLessons} 课程</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: totalLessons > 0 ? `${(completedTotal / totalLessons) * 100}%` : "0%" }}
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat.key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Lessons by category */}
      {displayCategories.map((cat) => {
        const lessons = getLessonsByCategory(cat);
        const completed = getCompletedCountByCategory(progress, cat, allLessons);
        const total = getTotalByCategory(cat, allLessons);

        return (
          <div key={cat} className="space-y-3">
            <CourseCategoryCard category={cat} total={total} completed={completed} />
            <div className="space-y-2">
              {lessons.map((lesson) => {
                const lp = progress.find((p) => p.lessonId === lesson.id);
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    progress={lp}
                    locked={false} // For now, no locking
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
