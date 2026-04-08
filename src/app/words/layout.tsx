import { Metadata } from "next";

export const metadata: Metadata = {
  title: "词库",
  description: "浏览 900+ 德语词汇，支持按级别（A1-C2）和词性筛选，包含发音、例句、中文释义。",
};

export default function WordsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
