"use client";

interface StreakBoardProps {
  streak: number;
  todayNew: number;
  todayReview: number;
  todayGoal: number;
}

export default function StreakBoard({ streak, todayNew, todayReview, todayGoal }: StreakBoardProps) {
  const todayTotal = todayNew + todayReview;
  const progress = Math.min((todayTotal / todayGoal) * 100, 100);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      {/* Streak */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-50 dark:bg-orange-950 mb-3">
          <span className="text-4xl">🔥</span>
        </div>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{streak}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">天连续学习</p>
      </div>

      {/* 今日进度 */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-gray-600 dark:text-gray-300">今日目标</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {todayTotal} / {todayGoal}
            </span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-green-600 dark:text-green-400">{todayNew}</p>
            <p className="text-xs text-green-500 dark:text-green-500">新学</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{todayReview}</p>
            <p className="text-xs text-purple-500 dark:text-purple-500">复习</p>
          </div>
        </div>
      </div>
    </div>
  );
}
