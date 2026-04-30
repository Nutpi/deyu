"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { LessonProgress } from "@/lib/types";
import { getLessonById, allLessons } from "@/data/courses";
import { getQuickLessonById } from "@/data/quickcards";
import { getLessonProgress, saveLessonProgress } from "@/lib/db";
import { getNextLesson, getCategoryMeta } from "@/lib/courseProgress";
import LessonContent from "@/components/LessonContent";
import ExerciseEngine from "@/components/ExerciseEngine";
import LessonComplete from "@/components/LessonComplete";
import QuickCardViewer from "@/components/QuickCardViewer";

export default function LessonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [mode, setMode] = useState<"quickcards" | "tutorial" | "exercise" | "complete">("quickcards");
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState<LessonProgress | undefined>();

  const lesson = getLessonById(id);
  const quickLesson = lesson ? getQuickLessonById(lesson.id) : undefined;
  const nextLesson = lesson ? getNextLesson(lesson.id, allLessons) : undefined;

  // If no quick lesson data, fall back to tutorial mode
  useEffect(() => {
    if (lesson && !getQuickLessonById(lesson.id)) {
      setMode("tutorial");
    }
  }, [lesson]);

  useEffect(() => {
    if (id) getLessonProgress(id).then(setProgress);
  }, [id]);

  if (!lesson) {
    return (
      <div className="flex flex-col items-center py-12 space-y-4">
        <span className="text-4xl">😕</span>
        <p className="text-gray-500 dark:text-gray-400">课程未找到</p>
        <Link href="/courses" className="text-blue-600 hover:text-blue-700 text-sm">返回课程列表</Link>
      </div>
    );
  }

  const handleExerciseComplete = async (finalScore: number) => {
    setScore(finalScore);
    setMode("complete");

    const total = lesson.exercises.length;
    const percentage = Math.round((finalScore / total) * 100);
    const existingBest = progress?.bestScore ?? 0;

    const newProgress: LessonProgress = {
      lessonId: lesson.id,
      completed: true,
      completedAt: Date.now(),
      bestScore: Math.max(percentage, existingBest),
    };

    await saveLessonProgress(newProgress);
    setProgress(newProgress);
  };

  const meta = getCategoryMeta(lesson.category);

  return (
    <div className="space-y-4 pb-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: lesson.titleZh,
            description: lesson.description,
            inLanguage: ["de", "zh-CN"],
            educationalLevel: lesson.level,
            learningResourceType: "Lesson",
            teaches: {
              "@type": "Thing",
              name: `${meta.label} - ${lesson.titleZh}`,
            },
            timeRequired: `PT${lesson.estimatedMinutes}M`,
            url: `https://deyu.vercel.app/courses/${lesson.id}`,
            isPartOf: {
              "@type": "Course",
              name: "德语学习课程",
              provider: {
                "@type": "Organization",
                name: "Deutsch Lernen",
              },
            },
          }),
        }}
      />

      {/* Header with gradient background */}
      <div className={`${meta.gradientLight} rounded-2xl p-4 shadow-sm border ${meta.borderLight}`}>
        <div className="flex items-center gap-3">
          <Link href="/courses" className="bg-white/60 dark:bg-gray-700/60 rounded-full p-1.5 hover:bg-white dark:hover:bg-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 truncate">{lesson.titleZh}</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.titleDe} · {lesson.titleEn}</p>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-3">
          <span className={`px-2 py-0.5 rounded-full ${meta.gradientLight} ${meta.color} font-medium`}>{lesson.level}</span>
          <span>{lesson.estimatedMinutes}分钟</span>
          {progress?.completed && <span className="text-green-600 dark:text-green-400 font-medium">✓ 已完成</span>}
        </div>
      </div>

      {/* Quick cards mode (default) */}
      {mode === "quickcards" && quickLesson && (
        <QuickCardViewer
          quickLesson={quickLesson}
          lesson={lesson}
          onStartExercise={() => setMode("exercise")}
          onViewTutorial={() => setMode("tutorial")}
        />
      )}

      {/* Tutorial mode */}
      {mode === "tutorial" && (
        <>
          <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.description}</p>

          <LessonContent sections={lesson.sections} category={lesson.category} />

          <div className="flex flex-col gap-2">
            {lesson.exercises.length > 0 && (
              <button
                onClick={() => setMode("exercise")}
                className={`w-full py-3 ${meta.gradient} hover:opacity-90 text-white rounded-xl font-medium shadow-md transition-all`}
              >
                开始练习 ({lesson.exercises.length}题)
              </button>
            )}
            {quickLesson && (
              <button
                onClick={() => setMode("quickcards")}
                className={`w-full py-2 text-sm ${meta.color} hover:underline transition-colors`}
              >
                ← 返回速览卡片
              </button>
            )}
          </div>
        </>
      )}

      {/* Exercise mode */}
      {mode === "exercise" && (
        <ExerciseEngine
          exercises={lesson.exercises}
          onComplete={handleExerciseComplete}
          category={lesson.category}
        />
      )}

      {/* Complete mode */}
      {mode === "complete" && (
        <LessonComplete
          score={score}
          total={lesson.exercises.length}
          lessonId={lesson.id}
          nextLessonId={nextLesson?.id}
          category={lesson.category}
        />
      )}
    </div>
  );
}
