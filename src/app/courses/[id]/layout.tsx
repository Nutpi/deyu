import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "课程详情",
  description: "德语课程详情",
};

export default function LessonDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
