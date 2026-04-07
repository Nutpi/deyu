"use client";

import { useEffect, useState, useCallback } from "react";
import FlashCard from "@/components/FlashCard";
import { vocabulary } from "@/data/vocabulary";
import { CEFRLevel, Grade } from "@/lib/types";
import { calculateSM2 } from "@/lib/sm2";
import {
  getAllCardStates,
  saveCardState,
  initCardState,
  updateSessionStats,
  saveDailyRecord,
  getDailyRecord,
} from "@/lib/db";

const levels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function LearnPage() {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | "all">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [unlearnedWords, setUnlearnedWords] = useState<typeof vocabulary>([]);
  const [loading, setLoading] = useState(true);
  const [sessionCount, setSessionCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const loadWords = useCallback(async () => {
    try {
      const states = await getAllCardStates();
      const learnedIds = new Set(states.map((s) => s.wordId));
      const pool =
        selectedLevel === "all"
          ? vocabulary
          : vocabulary.filter((v) => v.level === selectedLevel);
      const unlearned = pool.filter((v) => !learnedIds.has(v.id));
      setUnlearnedWords(unlearned);
    } catch {
      const pool =
        selectedLevel === "all"
          ? vocabulary
          : vocabulary.filter((v) => v.level === selectedLevel);
      setUnlearnedWords(pool);
    } finally {
      setLoading(false);
    }
  }, [selectedLevel]);

  useEffect(() => {
    setLoading(true);
    setCurrentIndex(0);
    setSessionCount(0);
    setFinished(false);
    loadWords();
  }, [loadWords]);

  const handleGrade = async (grade: Grade) => {
    const word = unlearnedWords[currentIndex];
    if (!word) return;

    try {
      const state = await initCardState(word.id);
      const updated = calculateSM2(state, grade);
      await saveCardState(updated);

      const today = new Date().toISOString().slice(0, 10);
      await updateSessionStats(today, grade >= 3);

      const existing = await getDailyRecord(today);
      await saveDailyRecord({
        date: today,
        newWords: (existing?.newWords ?? 0) + 1,
        reviewWords: existing?.reviewWords ?? 0,
        correctRate: 0,
      });
    } catch {
      // DB error, continue
    }

    const nextIndex = currentIndex + 1;
    const newCount = sessionCount + 1;
    setSessionCount(newCount);

    if (nextIndex >= unlearnedWords.length || newCount >= 10) {
      setFinished(true);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 dark:text-gray-400">加载中...</p>
      </div>
    );
  }

  if (unlearnedWords.length === 0) {
    return (
      <div className="space-y-6">
        {/* 级别选择 */}
        <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-4">
          <span className="text-6xl">🎉</span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {selectedLevel === "all" ? "所有词汇已学习!" : `${selectedLevel} 词汇已学习!`}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {selectedLevel === "all"
              ? "去复习页面巩固记忆吧"
              : "换个级别继续学习，或去复习页面巩固记忆"}
          </p>
          <div className="flex gap-3">
            {selectedLevel === "all" ? (
              <a
                href="/review"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                去复习
              </a>
            ) : (
              <>
                <a
                  href="/learn"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  学习全部级别
                </a>
                <a
                  href="/review"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  去复习
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="space-y-6">
        <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-4">
          <span className="text-6xl">✅</span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">学习完成!</h2>
          <p className="text-gray-500 dark:text-gray-400">
            本次学习了 {sessionCount} 个新词
          </p>
          <div className="flex gap-3">
            <a
              href="/learn"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              继续学习
            </a>
            <a
              href="/"
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-medium transition-colors"
            >
              返回首页
            </a>
          </div>
        </div>
      </div>
    );
  }

  const currentWord = unlearnedWords[currentIndex];

  return (
    <div className="space-y-6">
      {/* 级别选择 */}
      <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />

      {/* 进度条 */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">学习新词</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {sessionCount + 1} / {Math.min(10, unlearnedWords.length)}
        </span>
      </div>

      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
        <div
          className="bg-blue-500 h-1.5 rounded-full transition-all"
          style={{ width: `${((sessionCount + 1) / Math.min(10, unlearnedWords.length)) * 100}%` }}
        />
      </div>

      {/* 词卡 */}
      <FlashCard word={currentWord} onGrade={handleGrade} />
    </div>
  );
}

function LevelSelector({
  selected,
  onSelect,
}: {
  selected: CEFRLevel | "all";
  onSelect: (level: CEFRLevel | "all") => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      <button
        onClick={() => onSelect("all")}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
          selected === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
        }`}
      >
        全部
      </button>
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelect(level)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
            selected === level
              ? "bg-blue-500 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}
