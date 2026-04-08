import { Metadata } from "next";

export const metadata: Metadata = {
  title: "学习新词",
  description: "学习德语新词汇，支持 CEFR A1 到 C2 全级别，采用闪卡模式高效记忆。",
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
