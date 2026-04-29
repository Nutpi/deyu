"use client";

import { useState } from "react";
import { LessonExercise } from "@/lib/types";

interface ExerciseEngineProps {
  exercises: LessonExercise[];
  onComplete: (score: number) => void;
}

export default function ExerciseEngine({ exercises, onComplete }: ExerciseEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const exercise = exercises[currentIndex];
  const total = exercises.length;

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
      return "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:border-blue-400";
    }
    if (option === exercise.correctAnswer) {
      return "bg-green-50 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300";
    }
    if (option === selectedAnswer && option !== exercise.correctAnswer) {
      return "bg-red-50 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300";
    }
    return "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 opacity-50";
  };

  const isCorrect = selectedAnswer === exercise.correctAnswer;

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>练习 {currentIndex + 1}/{total}</span>
          <span>得分: {score}/{currentIndex + (showResult ? 1 : 0)}</span>
        </div>
        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + (showResult ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{exercise.questionZh}</p>
        {exercise.questionDe && (
          <p className="text-base font-medium text-blue-600 dark:text-blue-400">{exercise.questionDe}</p>
        )}
      </div>

      {/* Multiple Choice */}
      {exercise.type === "multiple-choice" && exercise.options && (
        <div className="space-y-2">
          {exercise.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${getOptionStyle(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Article Drill */}
      {exercise.type === "article-drill" && (
        <div className="flex gap-3 justify-center">
          {["der", "die", "das"].map((article) => {
            const color = article === "der" ? "blue" : article === "die" ? "red" : "green";
            return (
              <button
                key={article}
                onClick={() => handleAnswer(article)}
                className={`px-6 py-3 rounded-xl border-2 text-lg font-semibold transition-all ${
                  showResult
                    ? article === exercise.correctAnswer
                      ? `bg-${color}-50 dark:bg-${color}-900/30 border-${color}-500 text-${color}-600`
                      : article === selectedAnswer
                        ? "bg-red-50 dark:bg-red-900/30 border-red-500 text-red-600"
                        : "opacity-40 border-gray-200"
                    : `border-gray-200 dark:border-gray-600 hover:border-${color}-400`
                } ${article === "der" ? "text-blue-600 dark:text-blue-400" : article === "die" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
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
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
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
}: {
  exercise: LessonExercise;
  showResult: boolean;
  onAnswer: (a: string) => void;
  selectedAnswer: string | null;
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
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-800 text-sm focus:outline-none focus:border-blue-400"
        />
        {!showResult && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors"
          >
            确认
          </button>
        )}
      </div>
    </div>
  );
}
