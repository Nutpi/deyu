import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "德语课程 - Deutsch Kurse",
  description: "系统学习德语发音、语法、实用表达和文化知识",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
