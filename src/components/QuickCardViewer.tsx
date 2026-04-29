"use client";

import { useState, useCallback, useRef } from "react";
import { QuickLesson, CourseLesson } from "@/lib/types";
import QuickCardItem from "./QuickCardItem";
import QuickCardShareButton from "./QuickCardShareButton";

interface QuickCardViewerProps {
  quickLesson: QuickLesson;
  lesson: CourseLesson;
  onStartExercise: () => void;
  onViewTutorial: () => void;
}

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

  const goTo = useCallback(
    (index: number, direction: "left" | "right") => {
      if (index < 0 || index >= total) return;
      setSlideDirection(direction);
      setTimeout(() => {
        setCurrentIndex(index);
        setSlideDirection(null);
      }, 150);
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
    <div className="flex flex-col">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mb-4">
        {quickLesson.cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > currentIndex ? "left" : "right")}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex
                ? "bg-blue-600 dark:bg-blue-400 w-5"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
        <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
          {currentIndex + 1}/{total}
        </span>
      </div>

      {/* Card area */}
      <div
        ref={containerRef}
        className="relative min-h-[55vh] touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`absolute inset-0 transition-all duration-150 ${
            slideDirection === "left"
              ? "opacity-0 -translate-x-8"
              : slideDirection === "right"
                ? "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
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
          className="p-2 rounded-lg text-gray-400 dark:text-gray-500 disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-colors"
            >
              开始练习 ({lesson.exercises.length}题)
            </button>
          )}
        </div>

        {/* Next button */}
        <button
          onClick={goNext}
          disabled={isLast}
          className="p-2 rounded-lg text-gray-400 dark:text-gray-500 disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* View full tutorial link */}
      <button
        onClick={onViewTutorial}
        className="mt-4 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-center"
      >
        查看完整教程 →
      </button>
    </div>
  );
}
