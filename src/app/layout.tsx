import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import AuthGuard from "@/components/AuthGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "德语学习 - Deutsch Lernen | 德语词汇记忆工具",
    template: "%s | 德语学习",
  },
  description:
    "免费德语学习工具，支持 CEFR A1-C2 级别词汇，采用间隔重复记忆法（SM2），包含 900+ 德语词汇、发音、例句，适合德语初学者和备考歌德考试。",
  keywords: [
    "德语学习",
    "德语词汇",
    "德语单词",
    "Deutsch lernen",
    "German vocabulary",
    "间隔重复",
    "SM2",
    "歌德考试",
    "CEFR",
    "A1",
    "A2",
    "B1",
    "德语背单词",
    "德语发音",
  ],
  authors: [{ name: "Deutsch Lernen" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "德语学习 - Deutsch Lernen",
    title: "德语学习 - Deutsch Lernen | 免费德语词汇记忆工具",
    description:
      "采用间隔重复记忆法，高效记忆 900+ 德语词汇。支持发音、例句、打卡分享。",
  },
  twitter: {
    card: "summary",
    title: "德语学习 - Deutsch Lernen",
    description: "免费德语词汇记忆工具，间隔重复法高效背单词",
  },
  alternates: {
    canonical: "https://deyu.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "德语学习 - Deutsch Lernen",
              description: "免费德语词汇学习工具，采用间隔重复记忆法（SM2），包含 900+ 德语词汇、发音、例句。",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "CNY",
              },
              inLanguage: ["zh-CN", "de"],
              educationalLevel: "Beginner to Intermediate",
              learningResourceType: "Vocabulary",
            }),
          }}
        />
        <AuthGuard>
          <main className="flex-1 max-w-lg mx-auto w-full px-4 pb-20 pt-6">
            {children}
          </main>
          <Navigation />
        </AuthGuard>
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
