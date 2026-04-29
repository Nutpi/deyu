import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "德语课程 - 发音、语法、表达、文化",
  description:
    "41节免费德语课程，涵盖发音基础、语法体系、实用表达和德国文化知识。每课包含速览卡片、详细教程和互动练习，适合A1-B1水平学习者。",
  keywords: [
    "德语课程",
    "德语语法",
    "德语发音",
    "德语入门",
    "德语教程",
    "Deutsch Kurse",
    "German lessons",
  ],
  openGraph: {
    title: "德语课程 - 41节免费课程 | 德语学习",
    description:
      "涵盖发音、语法、表达和文化，每课包含速览卡片和互动练习。",
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
