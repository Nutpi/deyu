"use client";

import { useState, useEffect } from "react";
import { Vocabulary } from "@/lib/types";
import { useSpeech } from "@/lib/useSpeech";

interface FlashCardProps {
  word: Vocabulary;
  onGrade: (grade: 0 | 1 | 2 | 3 | 4 | 5) => void;
  showActions?: boolean;
}

const gradeLabels: { grade: 0 | 1 | 2 | 3 | 4 | 5; label: string; color: string }[] = [
  { grade: 0, label: "完全忘了", color: "bg-red-500 hover:bg-red-600" },
  { grade: 1, label: "有印象", color: "bg-orange-500 hover:bg-orange-600" },
  { grade: 2, label: "想起来了", color: "bg-yellow-500 hover:bg-yellow-600" },
  { grade: 3, label: "有些吃力", color: "bg-lime-500 hover:bg-lime-600" },
  { grade: 4, label: "比较容易", color: "bg-green-500 hover:bg-green-600" },
  { grade: 5, label: "非常简单", color: "bg-emerald-500 hover:bg-emerald-600" },
];

export default function FlashCard({ word, onGrade, showActions = true }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { speak } = useSpeech();

  useEffect(() => {
    setFlipped(false);
  }, [word.id]);

  const articleColor = {
    der: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950",
    die: "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-950",
    das: "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950",
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 卡片 */}
      <div
        className="relative w-full min-h-[280px] perspective-1000"
      >
        <div
          className={`w-full h-full transition-transform duration-500 preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "",
          }}
        >
          {/* 正面 - 德语 */}
          <div
            className={`w-full min-h-[280px] rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center justify-center ${flipped ? "" : "cursor-pointer"}`}
            style={{ backfaceVisibility: "hidden" }}
            onClick={() => { if (!flipped) setFlipped(true); }}
          >
            {word.article && (
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  articleColor[word.article]
                }`}
              >
                {word.article}
              </span>
            )}
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {word.german}
            </h2>
            {word.plural && word.plural !== "-" && (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                复数: {word.plural}
              </p>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                speak(word.german);
              }}
              className="mt-3 p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              title="播放发音"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
              </svg>
            </button>
            <span className="mt-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-500 dark:text-gray-400">
              {word.wordType}
            </span>
          </div>

          {/* 背面 - 中文 */}
          <div
            className="absolute inset-0 w-full min-h-[280px] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 shadow-lg border border-blue-100 dark:border-gray-600 p-8 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {word.chinese}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              {word.article && (
                <span
                  className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                    articleColor[word.article]
                  }`}
                >
                  {word.article}
                </span>
              )}
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {word.german}
              </span>
              {word.plural && word.plural !== "-" && (
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  / {word.plural}
                </span>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(word.german);
                }}
                className="p-1 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                title="播放发音"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>
              </button>
            </div>
            {word.example && (
              <div className="mt-4 p-3 bg-white/60 dark:bg-gray-600/60 rounded-lg w-full text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <p className="text-sm text-gray-700 dark:text-gray-200 italic">
                    &ldquo;{word.example}&rdquo;
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(word.example!);
                    }}
                    className="p-1 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors shrink-0"
                    title="播放例句发音"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                      <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                    </svg>
                  </button>
                </div>
                {word.exampleTranslation && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {word.exampleTranslation}
                  </p>
                )}
              </div>
            )}
            <span className="mt-3 px-2 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs text-blue-600 dark:text-blue-300">
              {word.level}
            </span>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      {showActions && !flipped && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onGrade(4);
            }}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-sm font-medium transition-all active:scale-95"
          >
            认识
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(true);
            }}
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-sm font-medium transition-all active:scale-95"
          >
            不认识
          </button>
        </div>
      )}

      {showActions && flipped && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onGrade(5);
            }}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-sm font-medium transition-all active:scale-95"
          >
            记住了
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onGrade(1);
            }}
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-sm font-medium transition-all active:scale-95"
          >
            还是不会
          </button>
        </div>
      )}

      {!showActions && !flipped && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setFlipped(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-xl text-sm font-medium transition-all active:scale-95"
          >
            显示答案
          </button>
        </div>
      )}
    </div>
  );
}
