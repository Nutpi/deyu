import { Metadata } from "next";

export const metadata: Metadata = {
  title: "复习",
  description: "间隔重复复习德语词汇，基于 SM2 算法智能安排复习计划，巩固记忆。",
};

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
