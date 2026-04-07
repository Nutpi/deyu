"use client";

import { useCallback, useState } from "react";
import { Vocabulary } from "@/lib/types";
import { vocabulary } from "@/data/vocabulary";

interface ShareCardProps {
  streak?: number;
  todayNew?: number;
  todayReview?: number;
  totalLearned?: number;
  totalWords?: number;
  word?: Vocabulary;
}

/**
 * 通用分享卡片生成器
 * - 有 word 时：生成单词卡片（适合词库页分享单个词）
 * - 无 word 时：生成打卡卡片（适合首页分享打卡）
 */
export default function ShareCard({ streak = 0, todayNew = 0, todayReview = 0, totalLearned = 0, totalWords = 0, word }: ShareCardProps) {
  const [exporting, setExporting] = useState(false);

  const generateImage = useCallback(async () => {
    setExporting(true);
    try {
      if (word) {
        await generateWordCard(word, streak, totalLearned, totalWords);
      } else {
        await generateCheckInCard(streak, todayNew, todayReview, totalLearned, totalWords);
      }
    } finally {
      setExporting(false);
    }
  }, [word, streak, todayNew, todayReview, totalLearned, totalWords]);

  const label = word ? "📤 分享这个词" : "📤 分享打卡";

  return (
    <button
      onClick={generateImage}
      disabled={exporting}
      className="w-full py-3 rounded-xl text-sm font-medium transition-all active:scale-[0.98] bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
    >
      {exporting ? "生成中..." : label}
    </button>
  );
}

// ─── 打卡卡片 ──────────────────────────────────────────
async function generateCheckInCard(
  streak: number,
  todayNew: number,
  todayReview: number,
  totalLearned: number,
  totalWords: number
) {
  const scale = 3;
  const W = 630;
  const H = 1060;
  const canvas = document.createElement("canvas");
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(scale, scale);

  // 背景渐变
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#0f172a");
  bg.addColorStop(0.4, "#1e3a5f");
  bg.addColorStop(1, "#1e40af");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // 装饰圆
  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.beginPath(); ctx.arc(520, 60, 240, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(50, 900, 200, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(590, 750, 140, 0, Math.PI * 2); ctx.fill();

  // 标题
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.font = "bold 30px 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🔥 德语学习打卡", W / 2, 100);

  // 日期
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "17px system-ui, sans-serif";
  ctx.fillText(dateStr, W / 2, 136);

  divider(ctx, 80, 168, 550);

  // 连续打卡
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  roundRect(ctx, 60, 200, W - 120, 170, 20);
  ctx.fill();

  ctx.fillStyle = "#fbbf24";
  ctx.font = "bold 100px system-ui, sans-serif";
  ctx.fillText(String(streak), W / 2, 320);
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "bold 21px 'PingFang SC', sans-serif";
  ctx.fillText("天连续打卡", W / 2, 355);

  // 每日一词区域
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  roundRect(ctx, 55, 405, W - 110, 310, 20);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "14px 'PingFang SC', sans-serif";
  ctx.fillText("📖 每日一词", W / 2, 442);

  // 从 vocabulary 中基于日期选一个词
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const wotd = vocabulary[seed % vocabulary.length];

  // 德语词（大号）
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 48px system-ui, sans-serif";
  ctx.fillText(wotd.german, W / 2, 510);

  // 冠词 + 复数
  if (wotd.article || wotd.plural) {
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "18px system-ui, sans-serif";
    let sub = "";
    if (wotd.article) sub += wotd.article;
    if (wotd.article && wotd.plural && wotd.plural !== "-") sub += " · ";
    if (wotd.plural && wotd.plural !== "-") sub += "复数: " + wotd.plural;
    if (sub) ctx.fillText(sub, W / 2, 545);
  }

  // 中文释义
  ctx.fillStyle = "#93c5fd";
  ctx.font = "bold 26px 'PingFang SC', sans-serif";
  ctx.fillText(wotd.chinese, W / 2, 590);

  // 例句
  if (wotd.example) {
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.font = "italic 15px system-ui, sans-serif";
    const ex = wotd.example.length > 60 ? wotd.example.slice(0, 57) + "..." : wotd.example;
    ctx.fillText(`"${ex}"`, W / 2, 635);
    if (wotd.exampleTranslation) {
      const tr = wotd.exampleTranslation.length > 40 ? wotd.exampleTranslation.slice(0, 37) + "..." : wotd.exampleTranslation;
      ctx.font = "14px 'PingFang SC', sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillText(tr, W / 2, 665);
    }
  }

  // 级别标签
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillText(wotd.level, W / 2, 700);

  // 三列数据
  const cY = 750;
  const cH = 100;
  const cW = 155;
  const cGap = 17;
  const cX = (W - cW * 3 - cGap * 2) / 2;

  [
    { label: "新学", value: todayNew },
    { label: "复习", value: todayReview },
    { label: "累计掌握", value: totalLearned },
  ].forEach((c, i) => {
    const x = cX + i * (cW + cGap);
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    roundRect(ctx, x, cY, cW, cH, 16);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 38px system-ui, sans-serif";
    ctx.fillText(String(c.value), x + cW / 2, cY + 50);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "14px 'PingFang SC', sans-serif";
    ctx.fillText(c.label, x + cW / 2, cY + 82);
  });

  // 进度条
  const pct = totalWords > 0 ? Math.round((totalLearned / totalWords) * 100) : 0;
  const bY = 895;
  const bW = 420;
  const bH = 12;
  const bX = (W - bW) / 2;

  ctx.fillStyle = "rgba(255,255,255,0.12)";
  roundRect(ctx, bX, bY, bW, bH, 6);
  ctx.fill();
  if (pct > 0) {
    const fW = Math.max(bH, (bW * pct) / 100);
    const g = ctx.createLinearGradient(bX, 0, bX + fW, 0);
    g.addColorStop(0, "#34d399");
    g.addColorStop(1, "#10b981");
    ctx.fillStyle = g;
    roundRect(ctx, bX, bY, fW, bH, 6);
    ctx.fill();
  }
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText(`已掌握 ${totalLearned}/${totalWords} 词 · 完成率 ${pct}%`, W / 2, bY + 38);

  // 品牌
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.font = "13px system-ui, sans-serif";
  ctx.fillText("Deutsch Lernen · 德语学习", W / 2, H - 30);

  await exportCanvas(canvas, dateStr, streak, totalLearned);
}

// ─── 单词卡片 ──────────────────────────────────────────
export async function generateWordCard(
  word: Vocabulary,
  streak: number,
  totalLearned: number,
  totalWords: number
) {
  const scale = 3;
  const W = 630;
  const H = 900;
  const canvas = document.createElement("canvas");
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(scale, scale);

  // 背景
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#1a1a2e");
  bg.addColorStop(0.5, "#16213e");
  bg.addColorStop(1, "#0f3460");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // 装饰
  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.beginPath(); ctx.arc(500, 100, 250, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(80, 800, 200, 0, Math.PI * 2); ctx.fill();

  // 标题
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.font = "bold 28px 'PingFang SC', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("📚 德语词汇分享", W / 2, 90);

  // 级别标签
  ctx.fillStyle = "rgba(147,197,253,0.6)";
  ctx.font = "15px system-ui, sans-serif";
  ctx.fillText(word.level, W / 2, 125);

  divider(ctx, 80, 155, 550);

  // 词汇卡片区域
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  roundRect(ctx, 55, 185, W - 110, 420, 24);
  ctx.fill();

  // 冠词
  if (word.article) {
    const artColors: Record<string, string> = { der: "#60a5fa", die: "#f87171", das: "#34d399" };
    ctx.fillStyle = artColors[word.article] || "#ffffff";
    ctx.font = "bold 22px system-ui, sans-serif";
    ctx.fillText(word.article, W / 2, 235);
  }

  // 德语大字
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 56px system-ui, sans-serif";
  ctx.fillText(word.german, W / 2, 310);

  // 复数
  if (word.plural && word.plural !== "-") {
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "18px system-ui, sans-serif";
    ctx.fillText(`复数: ${word.plural}`, W / 2, 348);
  }

  // 词性
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText(word.wordType, W / 2, 382);

  divider(ctx, 140, 408, 490);

  // 中文释义
  ctx.fillStyle = "#93c5fd";
  ctx.font = "bold 32px 'PingFang SC', sans-serif";
  ctx.fillText(word.chinese, W / 2, 455);

  // 例句
  if (word.example) {
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "italic 17px system-ui, sans-serif";
    const ex = word.example.length > 55 ? word.example.slice(0, 52) + "..." : word.example;
    ctx.fillText(`"${ex}"`, W / 2, 515);

    if (word.exampleTranslation) {
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = "15px 'PingFang SC', sans-serif";
      const tr = word.exampleTranslation.length > 40 ? word.exampleTranslation.slice(0, 37) + "..." : word.exampleTranslation;
      ctx.fillText(tr, W / 2, 548);
    }
  }

  // 底部统计
  divider(ctx, 80, 650, 550);

  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "15px system-ui, sans-serif";

  const pct = totalWords > 0 ? Math.round((totalLearned / totalWords) * 100) : 0;
  ctx.fillText(`🔥 连续 ${streak} 天打卡 · 已掌握 ${totalLearned} 词 · 完成率 ${pct}%`, W / 2, 695);

  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.font = "13px system-ui, sans-serif";
  ctx.fillText("Deutsch Lernen · 德语学习", W / 2, H - 30);

  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;
  await exportCanvas(canvas, dateStr, streak, totalLearned);
}

// ─── 工具函数 ──────────────────────────────────────────

function divider(ctx: CanvasRenderingContext2D, x1: number, y: number, x2: number) {
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}

async function exportCanvas(canvas: HTMLCanvasElement, dateStr: string, streak: number, totalLearned: number) {
  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], "deyu-share.png", { type: "image/png" });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: "德语学习打卡",
          text: `我已连续 ${streak} 天打卡学德语！已掌握 ${totalLearned} 个词汇。`,
        });
        return;
      } catch { /* 用户取消 */ }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `deyu-share-${dateStr}.png`;
    a.click();
    URL.revokeObjectURL(url);
  }, "image/png");
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
