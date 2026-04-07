"use client";

import { useCallback, useRef } from "react";

export function useSpeech() {
  const speakingRef = useRef(false);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // 如果正在播放，先停止
    if (speakingRef.current) {
      window.speechSynthesis.cancel();
      speakingRef.current = false;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.85;
    utterance.pitch = 1;

    // 尝试使用德语语音
    const voices = window.speechSynthesis.getVoices();
    const germanVoice =
      voices.find((v) => v.lang.startsWith("de") && v.localService) ||
      voices.find((v) => v.lang.startsWith("de"));
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    utterance.onstart = () => {
      speakingRef.current = true;
    };
    utterance.onend = () => {
      speakingRef.current = false;
    };
    utterance.onerror = () => {
      speakingRef.current = false;
    };

    // 先取消残留队列再播放
    window.speechSynthesis.cancel();

    // 如果 voices 还没加载，等 voiceschanged 事件后再播放
    if (voices.length === 0) {
      const handler = () => {
        const v = window.speechSynthesis.getVoices();
        const gv =
          v.find((vi) => vi.lang.startsWith("de") && vi.localService) ||
          v.find((vi) => vi.lang.startsWith("de"));
        if (gv) utterance.voice = gv;
        window.speechSynthesis.speak(utterance);
        window.speechSynthesis.removeEventListener("voiceschanged", handler);
      };
      window.speechSynthesis.addEventListener("voiceschanged", handler);
    } else {
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return { speak };
}
