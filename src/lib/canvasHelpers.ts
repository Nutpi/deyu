/**
 * Canvas 工具函数 —— 从 ShareCard.tsx 提取的通用绘制函数
 */

export function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
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

export function divider(ctx: CanvasRenderingContext2D, x1: number, y: number, x2: number) {
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}

export async function exportCanvas(canvas: HTMLCanvasElement, dateStr: string, streak: number, totalLearned: number) {
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
