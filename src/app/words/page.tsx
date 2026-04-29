"use client";

import { useEffect, useState } from "react";
import { vocabulary } from "@/data/vocabulary";
import { CEFRLevel, WordType, Vocabulary, CardState } from "@/lib/types";
import { useSpeech } from "@/lib/useSpeech";
import { generateWordCard } from "@/components/ShareCard";
import { getAllCardStates, getStreak } from "@/lib/db-unified";
import { isDueForReview } from "@/lib/sm2";

const levels: (CEFRLevel | "all")[] = ["all", "A1", "A2", "B1", "B2", "C1", "C2"];
const wordTypes: (WordType | "all")[] = ["all", "noun", "verb", "adjective", "adverb"];

const wordTypeLabels: Record<WordType, string> = {
  noun: "名词", verb: "动词", adjective: "形容词", adverb: "副词",
  preposition: "介词", conjunction: "连词", particle: "小品词", phrase: "短语", number: "数字",
};

const articleColors: Record<string, string> = {
  der: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  die: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  das: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

type WordStatus = "learned" | "review" | "new";

function getWordStatus(wordId: string, cardStates: Map<string, CardState>): WordStatus {
  const state = cardStates.get(wordId);
  if (!state) return "new";
  if (state.repetitions > 0 && !isDueForReview(state)) return "learned";
  return "review";
}

const statusConfig: Record<WordStatus, { label: string; color: string; dot: string }> = {
  learned: { label: "已学习", color: "text-green-600 dark:text-green-400", dot: "bg-green-500" },
  review: { label: "待复习", color: "text-yellow-600 dark:text-yellow-400", dot: "bg-yellow-500" },
  new: { label: "未学习", color: "text-gray-400 dark:text-gray-500", dot: "bg-gray-300 dark:bg-gray-600" },
};

export default function WordsPage() {
  const [levelFilter, setLevelFilter] = useState<CEFRLevel | "all">("all");
  const [typeFilter, setTypeFilter] = useState<WordType | "all">("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [cardStatesMap, setCardStatesMap] = useState<Map<string, CardState>>(new Map());
  const [streak, setStreak] = useState(0);
  const [totalLearned, setTotalLearned] = useState(0);

  useEffect(() => {
    Promise.all([getAllCardStates(), getStreak()]).then(([states, streakVal]) => {
      const map = new Map(states.map((s) => [s.wordId, s]));
      setCardStatesMap(map);
      setTotalLearned(states.length);
      setStreak(streakVal);
    }).catch(() => {});
  }, []);

  const filtered = vocabulary.filter((v) => {
    if (levelFilter !== "all" && v.level !== levelFilter) return false;
    if (typeFilter !== "all" && v.wordType !== typeFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return v.german.toLowerCase().includes(q) || v.chinese.includes(q);
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const counts = { learned: 0, review: 0, new: 0 };
  filtered.forEach((w) => { counts[getWordStatus(w.id, cardStatesMap)]++; });

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">词库</h1>
      <input
        type="text" placeholder="搜索德语或中文..." value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <div className="flex gap-2 overflow-x-auto pb-1">
        {levels.map((level) => (
          <button key={level} onClick={() => setLevelFilter(level)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              levelFilter === level ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >{level === "all" ? "全部" : level}</button>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {wordTypes.map((type) => (
          <button key={type} onClick={() => setTypeFilter(type)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              typeFilter === type ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >{type === "all" ? "全部词性" : wordTypeLabels[type]}</button>
        ))}
      </div>
      <div className="flex items-center gap-4 text-xs">
        <span className="text-gray-400 dark:text-gray-500">共 {filtered.length} 个词汇</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />{counts.learned}</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />{counts.review}</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 inline-block" />{counts.new}</span>
      </div>
      <div className="space-y-2">
        {filtered.map((word) => (
          <WordRow key={word.id} word={word} status={getWordStatus(word.id, cardStatesMap)}
            expanded={expandedId === word.id} onToggle={() => toggleExpand(word.id)}
            streak={streak} totalLearned={totalLearned} totalWords={vocabulary.length} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 dark:text-gray-500 py-8">没有找到匹配的词汇</p>
      )}
    </div>
  );
}

function WordRow({ word, status, expanded, onToggle, streak, totalLearned, totalWords }: {
  word: Vocabulary; status: WordStatus; expanded: boolean; onToggle: () => void;
  streak: number; totalLearned: number; totalWords: number;
}) {
  const { speak } = useSpeech();
  const cfg = statusConfig[status];

  return (
    <div onClick={onToggle}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-3.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} title={cfg.label} />
          {word.article && (
            <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${articleColors[word.article] ?? ""}`}>
              {word.article}
            </span>
          )}
          <span className="font-medium text-gray-900 dark:text-white">{word.german}</span>
          {word.plural && word.plural !== "-" && (
            <span className="text-xs text-gray-400 dark:text-gray-500">({word.plural})</span>
          )}
          <button onClick={(e) => { e.stopPropagation(); speak(word.german); }}
            className="p-1 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors" title="播放发音">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">{word.chinese}</span>
          {word.english && (
            <span className="text-xs text-gray-400 dark:text-gray-500">{word.english}</span>
          )}
          <span className={`text-xs transform transition-transform ${expanded ? "rotate-180" : ""}`}>▼</span>
        </div>
      </div>
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 space-y-2">
          <div className="flex gap-2 items-center">
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-500 dark:text-gray-400">{wordTypeLabels[word.wordType]}</span>
            <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900 rounded text-xs text-blue-600 dark:text-blue-400">{word.level}</span>
            <span className={`px-2 py-0.5 rounded text-xs ${cfg.color}`}>{cfg.label}</span>
          </div>
          {word.example && (
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
              <div className="flex items-start gap-1.5">
                <p className="text-sm text-gray-700 dark:text-gray-200 italic flex-1">{word.example}</p>
                <button onClick={(e) => { e.stopPropagation(); speak(word.example!); }}
                  className="p-1 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors shrink-0" title="播放例句发音">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                  </svg>
                </button>
              </div>
              {word.exampleTranslation && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{word.exampleTranslation}</p>
              )}
              {word.exampleTranslationEn && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{word.exampleTranslationEn}</p>
              )}
            </div>
          )}
          {/* 分享这个词 */}
          <div className="pt-1">
            <ShareWordButton word={word} streak={streak} totalLearned={totalLearned} totalWords={totalWords} />
          </div>
        </div>
      )}
    </div>
  );
}

function ShareWordButton({ word, streak, totalLearned, totalWords }: {
  word: Vocabulary; streak: number; totalLearned: number; totalWords: number;
}) {
  const [sharing, setSharing] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setSharing(true);
    try {
      await generateWordCard(word, streak, totalLearned, totalWords);
    } finally {
      setSharing(false);
    }
  };

  return (
    <button
      onClick={handleShare}
      disabled={sharing}
      className="flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors disabled:opacity-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
      {sharing ? "生成中..." : "分享这个词"}
    </button>
  );
}
