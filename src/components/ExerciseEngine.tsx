"use client";

import { useState } from "react";
import { CourseCategory, LessonExercise } from "@/lib/types";
import { getCategoryMeta } from "@/lib/courseProgress";

interface ExerciseEngineProps {
  exercises: LessonExercise[];
  onComplete: (score: number) => void;
  category?: CourseCategory;
}

const categoryProgressBars: Record<CourseCategory, string> = {
  pronunciation: "bg-gradient-to-r from-purple-500 to-indigo-500",
  grammar: "bg-gradient-to-r from-blue-500 to-cyan-500",
  expressions: "bg-gradient-to-r from-emerald-500 to-teal-500",
  culture: "bg-gradient-to-r from-amber-500 to-orange-500",
};

const categoryGradients: Record<CourseCategory, string> = {
  pronunciation: "bg-gradient-to-br from-purple-500 to-indigo-600",
  grammar: "bg-gradient-to-br from-blue-500 to-cyan-500",
  expressions: "bg-gradient-to-br from-emerald-500 to-teal-500",
  culture: "bg-gradient-to-br from-amber-500 to-orange-500",
};

export default function ExerciseEngine({ exercises, onComplete, category }: ExerciseEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const exercise = exercises[currentIndex];
  const total = exercises.length;
  const cat = category ?? "grammar";
  const progressBar = categoryProgressBars[cat];
  const gradientClass = categoryGradients[cat];
  const meta = getCategoryMeta(cat);

  if (!exercise) return null;

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === exercise.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= total) {
      onComplete(score + (selectedAnswer === exercise.correctAnswer ? 0 : 0));
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getOptionStyle = (option: string) => {
    if (!showResult) {
      return "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-600";
    }
    if (option === exercise.correctAnswer) {
      return "bg-green-50 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300 animate-pulse-success";
    }
    if (option === selectedAnswer && option !== exercise.correctAnswer) {
      return "bg-red-50 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300 animate-shake";
    }
    return "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 opacity-50";
  };

  const isCorrect = selectedAnswer === exercise.correctAnswer;

  return (
    <div className="space-y-4 animate-fade-slide-in">
      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>练习 {currentIndex + 1}/{total}</span>
          <span>得分: {score}/{currentIndex + (showResult ? 1 : 0)}</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressBar}`}
            style={{ width: `${((currentIndex + (showResult ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border-l-4 ${meta.borderAccent}`}>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{exercise.questionZh}</p>
        {exercise.questionDe && (
          <p className={`text-base font-medium ${meta.color}`}>{exercise.questionDe}</p>
        )}
      </div>

      {/* Multiple Choice */}
      {exercise.type === "multiple-choice" && exercise.options && (
        <div className="space-y-2">
          {exercise.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`w-full text-left p-3 rounded-xl border text-sm transition-all duration-200 ${getOptionStyle(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Article Drill */}
      {exercise.type === "article-drill" && (
        <div className="flex gap-3 justify-center">
          {(["der", "die", "das"] as const).map((article) => {
            const colorClasses = {
              der: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500",
              die: "text-red-600 dark:text-red-400 border-red-200 dark:border-red-700 hover:border-red-400 dark:hover:border-red-500",
              das: "text-green-600 dark:text-green-400 border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500",
            };
            const resultClasses = {
              der: article === exercise.correctAnswer ? "bg-blue-50 dark:bg-blue-900/30 border-blue-500" : "bg-red-50 dark:bg-red-900/30 border-red-500",
              die: article === exercise.correctAnswer ? "bg-red-50 dark:bg-red-900/30 border-red-500" : "bg-red-50 dark:bg-red-900/30 border-red-500",
              das: article === exercise.correctAnswer ? "bg-green-50 dark:bg-green-900/30 border-green-500" : "bg-red-50 dark:bg-red-900/30 border-red-500",
            };

            let style: string;
            if (!showResult) {
              style = `bg-white dark:bg-gray-800 ${colorClasses[article]} shadow-md hover:shadow-lg hover:-translate-y-0.5`;
            } else if (article === exercise.correctAnswer) {
              style = `${resultClasses[article]} ${colorClasses[article]} animate-pulse-success`;
            } else if (article === selectedAnswer) {
              style = `${resultClasses[article]} text-red-600 dark:text-red-400 animate-shake`;
            } else {
              style = "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 opacity-40";
            }

            return (
              <button
                key={article}
                onClick={() => handleAnswer(article)}
                className={`px-6 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-200 ${style}`}
              >
                {article}
              </button>
            );
          })}
        </div>
      )}

      {/* Fill Blank */}
      {exercise.type === "fill-blank" && (
        <FillBlankExercise
          exercise={exercise}
          showResult={showResult}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          accent={meta.accent}
        />
      )}

      {/* Result feedback */}
      {showResult && (
        <div className={`p-3 rounded-xl text-sm ${
          isCorrect
            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
            : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
        }`}>
          <p className="font-medium">{isCorrect ? "✓ 正确！" : "✗ 不正确"}</p>
          {!isCorrect && <p className="mt-1">正确答案：{exercise.correctAnswer}</p>}
          {exercise.explanation && <p className="mt-1 text-gray-600 dark:text-gray-400">{exercise.explanation}</p>}
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <button
          onClick={handleNext}
          className={`w-full py-3 ${gradientClass} hover:opacity-90 text-white rounded-xl font-medium shadow-md transition-all`}
        >
          {currentIndex + 1 >= total ? "查看结果" : "下一题"}
        </button>
      )}
    </div>
  );
}

function FillBlankExercise({
  exercise,
  showResult,
  onAnswer,
  selectedAnswer,
  accent,
}: {
  exercise: LessonExercise;
  showResult: boolean;
  onAnswer: (a: string) => void;
  selectedAnswer: string | null;
  accent: string;
}) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onAnswer(input.trim().toLowerCase());
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={showResult ? (selectedAnswer || "") : input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !showResult && handleSubmit()}
          disabled={showResult}
          placeholder="输入答案..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 transition-shadow"
          style={{ '--tw-ring-color': accent + '33' } as React.CSSProperties}
        />
        {!showResult && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 hover:opacity-90 text-white rounded-xl text-sm font-medium shadow-md transition-all"
          >
            确认
          </button>
        )}
      </div>
    </div>
  );
}
