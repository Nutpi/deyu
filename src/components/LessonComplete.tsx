"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CourseCategory } from "@/lib/types";
import { getCategoryMeta } from "@/lib/courseProgress";

interface LessonCompleteProps {
  score: number;
  total: number;
  lessonId: string;
  nextLessonId?: string;
  category?: CourseCategory;
}

function Confetti({ color }: { color: string }) {
  const [pieces, setPieces] = useState<Array<{ id: number; left: string; color: string; delay: string; size: number }>>([]);

  useEffect(() => {
    const colors = [color, "#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];
    const newPieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 0.8}s`,
      size: Math.random() * 6 + 4,
    }));
    setPieces(newPieces);
  }, [color]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-40">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-sm animate-confetti-fall"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function ProgressRing({ percentage, accent, accentDark }: { percentage: number; accent: string; accentDark: string }) {
  const [offset, setOffset] = useState(326.73); // circumference = 2 * PI * 52

  useEffect(() => {
    const timer = setTimeout(() => {
      const circumference = 2 * Math.PI * 52;
      setOffset(circumference - (percentage / 100) * circumference);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const isDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const strokeColor = isDark ? accentDark : accent;
  const gradientId = `progress-gradient-${accent.replace("#", "")}`;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={strokeColor} />
          <stop offset="100%" stopColor={accent} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Background ring */}
      <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200 dark:text-gray-700" />
      {/* Progress ring */}
      <circle
        cx="60" cy="60" r="52" fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={2 * Math.PI * 52}
        strokeDashoffset={offset}
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
}

export default function LessonComplete({ score, total, nextLessonId, category }: LessonCompleteProps) {
  const percentage = Math.round((score / total) * 100);
  const cat = category ?? "grammar";
  const meta = getCategoryMeta(cat);
  const [showConfetti, setShowConfetti] = useState(false);

  const message = percentage >= 80 ? "太棒了！掌握得很好！" : percentage >= 60 ? "不错！继续加油！" : "再练练会更好！";

  useEffect(() => {
    if (percentage >= 80) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);

  const wrongCount = total - score;

  return (
    <div className="flex flex-col items-center py-8 space-y-6 animate-fade-slide-in">
      {showConfetti && <Confetti color={meta.accent} />}

      {/* Score ring */}
      <div className="relative flex items-center justify-center">
        <ProgressRing percentage={percentage} accent={meta.accent} accentDark={meta.accentDark} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{score}/{total}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500">{percentage}%</p>
        </div>
      </div>

      {/* Message */}
      <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 w-full">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-green-600 dark:text-green-400">{score}</p>
          <p className="text-xs text-green-600/70 dark:text-green-400/70">正确</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-red-600 dark:text-red-400">{wrongCount}</p>
          <p className="text-xs text-red-600/70 dark:text-red-400/70">错误</p>
        </div>
        <div className={`${meta.gradientLight} rounded-xl p-3 text-center`}>
          <p className={`text-lg font-bold ${meta.color}`}>{percentage}%</p>
          <p className={`text-xs ${meta.color} opacity-70`}>正确率</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="w-full space-y-3">
        {nextLessonId && (
          <Link
            href={`/courses/${nextLessonId}`}
            className={`block w-full py-3.5 ${meta.gradient} hover:opacity-90 text-white rounded-xl font-medium text-center shadow-lg transition-all`}
            style={{ boxShadow: `0 10px 25px -5px ${meta.accent}40` }}
          >
            下一课
          </Link>
        )}
        <Link
          href="/courses"
          className={`block w-full py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium text-center border-2 ${meta.borderLight} transition-colors`}
        >
          返回课程列表
        </Link>
      </div>
    </div>
  );
}
