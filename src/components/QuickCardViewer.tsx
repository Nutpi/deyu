"use client";

import { useState, useCallback, useRef } from "react";
import { QuickLesson, CourseLesson, CourseCategory } from "@/lib/types";
import { getCategoryMeta } from "@/lib/courseProgress";
import QuickCardItem from "./QuickCardItem";
import QuickCardShareButton from "./QuickCardShareButton";

interface QuickCardViewerProps {
  quickLesson: QuickLesson;
  lesson: CourseLesson;
  onStartExercise: () => void;
  onViewTutorial: () => void;
}

const categoryDots: Record<CourseCategory, string> = {
  pronunciation: "bg-purple-500 dark:bg-purple-400",
  grammar: "bg-blue-500 dark:bg-blue-400",
  expressions: "bg-emerald-500 dark:bg-emerald-400",
  culture: "bg-amber-500 dark:bg-amber-400",
};

const categoryGradients: Record<CourseCategory, string> = {
  pronunciation: "bg-gradient-to-br from-purple-500 to-indigo-600",
  grammar: "bg-gradient-to-br from-blue-500 to-cyan-500",
  expressions: "bg-gradient-to-br from-emerald-500 to-teal-500",
  culture: "bg-gradient-to-br from-amber-500 to-orange-500",
};

const categoryArrowBg: Record<CourseCategory, string> = {
  pronunciation: "hover:bg-purple-50 dark:hover:bg-purple-900/30 text-purple-500 dark:text-purple-400",
  grammar: "hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-500 dark:text-blue-400",
  expressions: "hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400",
  culture: "hover:bg-amber-50 dark:hover:bg-amber-900/30 text-amber-500 dark:text-amber-400",
};

export default function QuickCardViewer({
  quickLesson,
  lesson,
  onStartExercise,
  onViewTutorial,
}: QuickCardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = quickLesson.cards.length;
  const card = quickLesson.cards[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;
  const hasExercises = lesson.exercises.length > 0;
  const cat = lesson.category;
  const meta = getCategoryMeta(cat);
  const dotColor = categoryDots[cat];
  const gradientClass = categoryGradients[cat];
  const arrowStyle = categoryArrowBg[cat];

  const goTo = useCallback(
    (index: number, direction: "left" | "right") => {
      if (index < 0 || index >= total) return;
      setSlideDirection(direction);
      setTimeout(() => {
        setCurrentIndex(index);
        setSlideDirection(null);
      }, 200);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1, "left"), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1, "right"), [currentIndex, goTo]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const delta = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) goNext();
        else goPrev();
      }
      touchStartX.current = null;
    },
    [goNext, goPrev]
  );

  return (
    <div className="flex flex-col animate-fade-slide-in">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mb-4">
        {quickLesson.cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > currentIndex ? "left" : "right")}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? `${dotColor} w-6`
                : "bg-gray-300 dark:bg-gray-600 w-2"
            }`}
          />
        ))}
        <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
          {currentIndex + 1}/{total}
        </span>
      </div>

      {/* Card area with stacked deck effect */}
      <div
        ref={containerRef}
        className="relative min-h-[55vh] touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Back card 2 (deepest) */}
        <div className="absolute inset-3 bg-gray-200 dark:bg-gray-700 rounded-2xl opacity-40" />

        {/* Back card 1 */}
        <div className="absolute inset-1.5 bg-gray-100 dark:bg-gray-700/60 rounded-2xl opacity-60" />

        {/* Main card */}
        <div
          className={`relative transition-all duration-300 ease-out ${
            slideDirection === "left"
              ? "opacity-0 -translate-x-12 scale-95"
              : slideDirection === "right"
                ? "opacity-0 translate-x-12 scale-95"
                : "opacity-100 translate-x-0 scale-100"
          }`}
        >
          <QuickCardItem card={card} lesson={lesson} />
        </div>
      </div>

      {/* Navigation + actions */}
      <div className="flex items-center justify-between mt-4 gap-2">
        {/* Prev button */}
        <button
          onClick={goPrev}
          disabled={isFirst}
          className={`p-2.5 rounded-xl transition-colors disabled:opacity-20 ${arrowStyle}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Center: share + CTA */}
        <div className="flex-1 flex flex-col items-center gap-2">
          <QuickCardShareButton card={card} lesson={lesson} />

          {isLast && hasExercises && (
            <button
              onClick={onStartExercise}
              className={`w-full py-3 ${gradientClass} hover:opacity-90 text-white rounded-xl font-medium text-sm shadow-md transition-all`}
            >
              开始练习 ({lesson.exercises.length}题)
            </button>
          )}
        </div>

        {/* Next button */}
        <button
          onClick={goNext}
          disabled={isLast}
          className={`p-2.5 rounded-xl transition-colors disabled:opacity-20 ${arrowStyle}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* View full tutorial link */}
      <button
        onClick={onViewTutorial}
        className={`mt-4 text-xs ${meta.color} hover:underline transition-colors text-center`}
      >
        查看完整教程 →
      </button>
    </div>
  );
}
