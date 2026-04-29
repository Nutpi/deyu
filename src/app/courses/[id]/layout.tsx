import type { Metadata } from "next";
import { allLessons } from "@/data/courses";

const baseUrl = "https://deyu.vercel.app";

const categoryLabels: Record<string, string> = {
  pronunciation: "发音基础",
  grammar: "语法",
  expressions: "实用表达",
  culture: "文化知识",
};

export async function generateStaticParams() {
  return allLessons.map((lesson) => ({ id: lesson.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const lesson = allLessons.find((l) => l.id === id);

  if (!lesson) {
    return { title: "课程未找到" };
  }

  const category = categoryLabels[lesson.category] || "";
  const title = `${lesson.titleZh}（${lesson.titleDe}）`;
  const description = `${lesson.level} 德语${category}课程：${lesson.description}。包含速览卡片、详细教程和互动练习，约${lesson.estimatedMinutes}分钟。`;

  return {
    title,
    description,
    keywords: [
      lesson.titleZh,
      lesson.titleDe,
      lesson.titleEn,
      `德语${category}`,
      `德语${lesson.level}`,
      "德语课程",
      "德语学习",
      "Deutsch lernen",
    ],
    openGraph: {
      title: `${lesson.titleZh} - 德语${category}课程`,
      description,
      url: `${baseUrl}/courses/${lesson.id}`,
      type: "article",
      locale: "zh_CN",
      siteName: "德语学习 - Deutsch Lernen",
    },
    twitter: {
      card: "summary",
      title: `${lesson.titleZh} - 德语${category}课程`,
      description,
    },
    alternates: {
      canonical: `${baseUrl}/courses/${lesson.id}`,
    },
  };
}

export default function LessonDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
