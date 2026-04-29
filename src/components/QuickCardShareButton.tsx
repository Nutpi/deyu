"use client";

import { useState } from "react";
import { QuickCard, CourseLesson } from "@/lib/types";
import { roundRect, divider, exportCanvas } from "@/lib/canvasHelpers";

interface QuickCardShareButtonProps {
  card: QuickCard;
  lesson: CourseLesson;
}

async function generateQuickCardImage(card: QuickCard, lesson: CourseLesson) {
  const scale = 3;
  const W = 630;
  const H = 900;
  const canvas = document.createElement("canvas");
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(scale, scale);

  // Background
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#1a1a2e");
  bg.addColorStop(0.5, "#16213e");
  bg.addColorStop(1, "#0f3460");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Decorative circles
  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.beginPath(); ctx.arc(500, 100, 250, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(80, 800, 200, 0, Math.PI * 2); ctx.fill();

  // Title
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.font = "bold 26px 'PingFang SC', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("📚 德语课程速览", W / 2, 80);

  // Level + category
  ctx.fillStyle = "rgba(147,197,253,0.6)";
  ctx.font = "15px system-ui, sans-serif";
  ctx.fillText(`${lesson.level} · ${lesson.titleDe}`, W / 2, 115);

  divider(ctx, 80, 145, 550);

  // Card heading
  ctx.fillStyle = "#93c5fd";
  ctx.font = "bold 30px 'PingFang SC', system-ui, sans-serif";
  ctx.fillText(card.heading, W / 2, 195);

  // Core point box
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  roundRect(ctx, 55, 220, W - 110, 200, 20);
  ctx.fill();

  // Core point text — wrap manually
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.font = "20px 'PingFang SC', sans-serif";
  ctx.textAlign = "left";
  const maxLineWidth = W - 160;
  const words = card.corePoint.split("");
  let line = "";
  let y = 260;
  for (const char of words) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxLineWidth) {
      ctx.fillText(line, 80, y);
      line = char;
      y += 30;
    } else {
      line = testLine;
    }
  }
  if (line) ctx.fillText(line, 80, y);

  // Examples
  const exampleY = Math.max(y + 50, 460);
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  roundRect(ctx, 55, exampleY - 15, W - 110, card.examples.length * 55 + 40, 16);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "13px 'PingFang SC', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("例句", W / 2, exampleY + 5);

  ctx.textAlign = "left";
  ctx.font = "16px system-ui, sans-serif";
  card.examples.forEach((ex, i) => {
    const ey = exampleY + 35 + i * 55;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(ex.german.length > 45 ? ex.german.slice(0, 42) + "..." : ex.german, 80, ey);
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.font = "14px 'PingFang SC', sans-serif";
    ctx.fillText(ex.chinese, 80, ey + 24);
    ctx.font = "16px system-ui, sans-serif";
  });

  // Tip
  if (card.tip) {
    const tipY = exampleY + 35 + card.examples.length * 55 + 30;
    ctx.fillStyle = "rgba(251,191,36,0.15)";
    roundRect(ctx, 55, tipY, W - 110, 60, 12);
    ctx.fill();
    ctx.fillStyle = "rgba(251,191,36,0.8)";
    ctx.font = "14px 'PingFang SC', sans-serif";
    ctx.textAlign = "center";
    const tipText = card.tip.length > 60 ? card.tip.slice(0, 57) + "..." : card.tip;
    ctx.fillText("💡 " + tipText, W / 2, tipY + 35);
  }

  // Lesson title
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = "13px 'PingFang SC', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(lesson.titleZh, W / 2, H - 60);

  // Branding
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.font = "13px system-ui, sans-serif";
  ctx.fillText("Deutsch Lernen · 德语学习", W / 2, H - 30);

  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;
  await exportCanvas(canvas, dateStr, 0, 0);
}

export default function QuickCardShareButton({ card, lesson }: QuickCardShareButtonProps) {
  const [exporting, setExporting] = useState(false);

  const handleShareImage = async () => {
    setExporting(true);
    try {
      await generateQuickCardImage(card, lesson);
    } finally {
      setExporting(false);
    }
  };

  const handleShareLink = async () => {
    const url = `${window.location.origin}/courses/${lesson.id}`;
    const shareData = {
      title: `${lesson.titleZh} - 德语课程`,
      text: `来看看这节德语课程：${lesson.titleZh}（${lesson.titleDe}）`,
      url,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(url);
    alert("链接已复制到剪贴板");
  };

  return (
    <div className="flex items-center gap-2 w-full justify-center">
      <button
        onClick={handleShareImage}
        disabled={exporting}
        className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        {exporting ? "生成中..." : "分享图片"}
      </button>
      <button
        onClick={handleShareLink}
        className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" />
        </svg>
        分享链接
      </button>
    </div>
  );
}
