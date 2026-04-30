"use client";

import { useState, useEffect } from "react";
import { CourseCategory, LessonProgress } from "@/lib/types";
import { allLessons, getLessonsByCategory } from "@/data/courses";
import { getAllLessonProgress } from "@/lib/db";
import { getCompletedCountByCategory, getTotalByCategory } from "@/lib/courseProgress";
import CourseCategoryCard from "@/components/CourseCategoryCard";
import LessonCard from "@/components/LessonCard";

const categories: { key: CourseCategory | "all"; label: string; icon: string; gradient?: string }[] = [
  { key: "all", label: "全部", icon: "📋", gradient: "bg-gradient-to-r from-blue-500 to-purple-500" },
  { key: "pronunciation", label: "发音", icon: "🎤", gradient: "bg-gradient-to-r from-purple-500 to-indigo-500" },
  { key: "grammar", label: "语法", icon: "📐", gradient: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { key: "expressions", label: "表达", icon: "💬", gradient: "bg-gradient-to-r from-emerald-500 to-teal-500" },
  { key: "culture", label: "文化", icon: "🌍", gradient: "bg-gradient-to-r from-amber-500 to-orange-500" },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | "all">("all");
  const [progress, setProgress] = useState<LessonProgress[]>([]);

  useEffect(() => {
    getAllLessonProgress().then(setProgress);
  }, []);

  const completedTotal = progress.filter((p) => p.completed).length;
  const totalLessons = allLessons.length;
  const overallPercentage = totalLessons > 0 ? Math.round((completedTotal / totalLessons) * 100) : 0;

  const displayCategories: CourseCategory[] = selectedCategory === "all"
    ? ["pronunciation", "grammar", "expressions", "culture"]
    : [selectedCategory];

  return (
    <div className="space-y-5 pb-20">
      {/* Hero header with gradient */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-950 rounded-2xl p-5 text-white shadow-lg">
        <h1 className="text-xl font-bold">德语课程</h1>
        <p className="text-sm text-blue-100 dark:text-blue-200 mt-0.5">Deutsch Kurse</p>
      </div>

      {/* Overall progress card with mini ring */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4">
          {/* Mini progress ring */}
          <div className="relative shrink-0">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-200 dark:text-gray-700" />
              <circle
                cx="24" cy="24" r="20" fill="none"
                stroke="url(#overall-progress-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 20}
                strokeDashoffset={2 * Math.PI * 20 - (overallPercentage / 100) * 2 * Math.PI * 20}
                className="transition-all duration-700"
                transform="rotate(-90 24 24)"
              />
              <defs>
                <linearGradient id="overall-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{overallPercentage}%</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">学习进度</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {completedTotal}/{totalLessons} 课程
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? `${cat.gradient} text-white shadow-sm`
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Lessons by category */}
      {displayCategories.map((cat, catIndex) => {
        const lessons = getLessonsByCategory(cat);
        const completed = getCompletedCountByCategory(progress, cat, allLessons);
        const total = getTotalByCategory(cat, allLessons);

        return (
          <div key={cat} className="space-y-3 animate-fade-slide-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
            <CourseCategoryCard category={cat} total={total} completed={completed} />
            <div className="space-y-2">
              {lessons.map((lesson) => {
                const lp = progress.find((p) => p.lessonId === lesson.id);
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    progress={lp}
                    locked={false}
                    category={cat}
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
