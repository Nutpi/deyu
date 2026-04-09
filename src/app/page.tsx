"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StreakBoard from "@/components/StreakBoard";
import ShareCard from "@/components/ShareCard";
import { getStreak, getAllCardStates, getDailyRecord } from "@/lib/db-unified";
import { useAuth } from "@/lib/auth";
import { isDueForReview } from "@/lib/sm2";
import { vocabulary } from "@/data/vocabulary";

export default function HomePage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const [streak, setStreak] = useState(0);
  const [todayNew, setTodayNew] = useState(0);
  const [todayReview, setTodayReview] = useState(0);
  const [totalLearned, setTotalLearned] = useState(0);
  const [dueCount, setDueCount] = useState(0);

  useEffect(() => {
    if (authLoading) return;

    async function load() {
      try {
        const today = new Date().toISOString().slice(0, 10);
        const [streakVal, cardStates, dailyRecord] = await Promise.all([
          getStreak(),
          getAllCardStates(),
          getDailyRecord(today),
        ]);

        setStreak(streakVal);
        setTodayNew(dailyRecord?.newWords ?? 0);
        setTodayReview(dailyRecord?.reviewWords ?? 0);
        setTotalLearned(cardStates.length);

        const due = cardStates.filter((s) => isDueForReview(s) && s.repetitions > 0);
        setDueCount(due.length);
      } catch {
        // IndexedDB not available yet
      }
    }
    load();
  }, [authLoading, user]);

  const unlearnedCount = vocabulary.length - totalLearned;

  return (
    <div className="space-y-6">
      {/* 标题 */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          德语学习
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Deutsch Lernen</p>
        {user ? (
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-xs text-gray-400 dark:text-gray-500">{user.email}</span>
            <button onClick={() => signOut()} className="text-xs text-gray-400 hover:text-red-500 transition-colors">退出</button>
          </div>
        ) : (
          <Link href="/login" className="mt-2 inline-block text-xs text-blue-500 hover:text-blue-600">登录同步学习记录</Link>
        )}
      </div>

      {/* Streak 和进度 */}
      <StreakBoard
        streak={streak}
        todayNew={todayNew}
        todayReview={todayReview}
        todayGoal={30}
      />

      {/* 快速操作 */}
      <div className="space-y-3">
        <Link
          href="/learn"
          className="flex items-center justify-between w-full p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
        >
          <div>
            <p className="font-semibold">学习新词</p>
            <p className="text-sm text-blue-100">
              还有 {unlearnedCount > 0 ? unlearnedCount : 0} 个待学习
            </p>
          </div>
          <span className="text-2xl">📖</span>
        </Link>

        <Link
          href="/review"
          className={`flex items-center justify-between w-full p-4 rounded-xl transition-colors ${
            dueCount > 0
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
          }`}
        >
          <div>
            <p className="font-semibold">复习</p>
            <p className={dueCount > 0 ? "text-sm text-purple-100" : "text-sm"}>
              {dueCount > 0 ? `${dueCount} 个待复习` : "暂无待复习单词"}
            </p>
          </div>
          <span className="text-2xl">🔄</span>
        </Link>

        <Link
          href="/words"
          className="flex items-center justify-between w-full p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl transition-colors border border-gray-100 dark:border-gray-700"
        >
          <div>
            <p className="font-semibold">词库</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              共 {vocabulary.length} 个词汇
            </p>
          </div>
          <span className="text-2xl">📚</span>
        </Link>
      </div>

      {/* 统计概览 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">学习概览</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{totalLearned}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">已学习</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {vocabulary.length > 0 ? Math.round((totalLearned / vocabulary.length) * 100) : 0}%
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">完成率</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{streak}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">连续天数</p>
          </div>
        </div>

        {/* 分享打卡 */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <ShareCard
            streak={streak}
            todayNew={todayNew}
            todayReview={todayReview}
            totalLearned={totalLearned}
            totalWords={vocabulary.length}
          />
        </div>
      </div>
    </div>
  );
}
