"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const { signIn, signUp } = useAuth();
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      if (isRegister) {
        const { error: err } = await signUp(email, password);
        if (err) {
          setError(err);
        } else {
          setSuccess("注册成功！请查收邮箱确认链接。");
        }
      } else {
        const { error: err } = await signIn(email, password);
        if (err) {
          setError(err);
        } else {
          router.push("/learn");
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isRegister ? "创建账号" : "登录"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {isRegister ? "注册后可同步学习记录到云端" : "登录以同步你的学习进度"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              邮箱
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              密码
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="至少 6 位"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          {success && (
            <p className="text-sm text-green-500">{success}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2.5 rounded-xl text-sm font-medium transition-all bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
          >
            {submitting ? "处理中..." : isRegister ? "注册" : "登录"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          {isRegister ? "已有账号？" : "没有账号？"}
          <button
            onClick={() => { setIsRegister(!isRegister); setError(""); setSuccess(""); }}
            className="text-blue-500 hover:text-blue-600 ml-1"
          >
            {isRegister ? "去登录" : "注册"}
          </button>
        </p>
      </div>
    </div>
  );
}
