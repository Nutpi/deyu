"use client";

import { useEffect, useState, useCallback } from "react";
import FlashCard from "@/components/FlashCard";
import { vocabulary } from "@/data/vocabulary";
import { CardState, Grade } from "@/lib/types";
import { calculateSM2, isDueForReview } from "@/lib/sm2";
import {
  getAllCardStates,
  saveCardState,
  updateSessionStats,
  saveDailyRecord,
  getDailyRecord,
} from "@/lib/db-unified";

export default function ReviewPage() {
  const [dueWords, setDueWords] = useState<
    { word: (typeof vocabulary)[0]; state: CardState }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [reviewed, setReviewed] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  const loadDueWords = useCallback(async () => {
    try {
      const states = await getAllCardStates();
      const dueStates = states.filter(
        (s) => isDueForReview(s) && s.repetitions > 0
      );

      const wordMap = new Map(vocabulary.map((v) => [v.id, v]));
      const due = dueStates
        .map((state) => {
          const word = wordMap.get(state.wordId);
          return word ? { word, state } : null;
        })
        .filter(Boolean) as { word: (typeof vocabulary)[0]; state: CardState }[];

      // 随机排序
      due.sort(() => Math.random() - 0.5);
      setDueWords(due);
    } catch {
      // DB error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDueWords();
  }, [loadDueWords]);

  const handleGrade = (grade: Grade) => {
    const item = dueWords[currentIndex];
    if (!item) return;

    const newReviewed = reviewed + 1;
    const newCorrect = correct + (grade >= 3 ? 1 : 0);
    setReviewed(newReviewed);
    setCorrect(newCorrect);

    const nextIndex = currentIndex + 1;
    if (nextIndex >= dueWords.length) {
      setFinished(true);
    } else {
      setCurrentIndex(nextIndex);
    }

    // 后台保存数据
    (async () => {
      try {
        const updated = calculateSM2(item.state, grade);
        const today = new Date().toISOString().slice(0, 10);
        await Promise.all([
          saveCardState(updated),
          updateSessionStats(today, grade >= 3),
          getDailyRecord(today).then((existing) =>
            saveDailyRecord({
              date: today,
              newWords: existing?.newWords ?? 0,
              reviewWords: (existing?.reviewWords ?? 0) + 1,
              correctRate: 0,
            })
          ),
        ]);
      } catch {
        // DB error, already moved to next card
      }
    })();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 dark:text-gray-400">加载中...</p>
      </div>
    );
  }

  if (dueWords.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
        <span className="text-6xl">😊</span>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">暂无待复习单词</h2>
        <p className="text-gray-500 dark:text-gray-400">
          所有单词都在记忆周期内，休息一下吧
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
        >
          返回首页
        </a>
      </div>
    );
  }

  if (finished) {
    const accuracy = reviewed > 0 ? Math.round((correct / reviewed) * 100) : 0;
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
        <span className="text-6xl">🎉</span>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">复习完成!</h2>
        <div className="space-y-1">
          <p className="text-gray-500 dark:text-gray-400">
            复习了 {reviewed} 个词，正确率 {accuracy}%
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="/review"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            再复习一轮
          </a>
          <a
            href="/"
            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-medium transition-colors"
          >
            返回首页
          </a>
        </div>
      </div>
    );
  }

  const currentWord = dueWords[currentIndex].word;

  return (
    <div className="space-y-6">
      {/* 进度 */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">复习</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentIndex + 1} / {dueWords.length}
        </span>
      </div>

      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
        <div
          className="bg-purple-500 h-1.5 rounded-full transition-all"
          style={{
            width: `${((currentIndex + 1) / dueWords.length) * 100}%`,
          }}
        />
      </div>

      {/* 统计小条 */}
      <div className="flex gap-4 text-sm">
        <span className="text-green-500">正确: {correct}</span>
        <span className="text-red-500">错误: {reviewed - correct}</span>
      </div>

      {/* 词卡 */}
      <FlashCard word={currentWord} onGrade={handleGrade} />
    </div>
  );
}
