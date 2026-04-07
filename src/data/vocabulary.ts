import { Vocabulary } from "@/lib/types";
import { a1Vocabulary } from "./a1";
import { a2Vocabulary } from "./a2";
import { b1Vocabulary } from "./b1";
import { b2Vocabulary } from "./b2";
import { c1Vocabulary } from "./c1";
import { c2Vocabulary } from "./c2";

export const vocabulary: Vocabulary[] = [
  ...a1Vocabulary,
  ...a2Vocabulary,
  ...b1Vocabulary,
  ...b2Vocabulary,
  ...c1Vocabulary,
  ...c2Vocabulary,
];

export function getVocabularyByLevel(level: string): Vocabulary[] {
  return vocabulary.filter((v) => v.level === level);
}

export function getVocabularyById(id: string): Vocabulary | undefined {
  return vocabulary.find((v) => v.id === id);
}

export function getRandomWords(count: number, level?: string): Vocabulary[] {
  const pool = level ? getVocabularyByLevel(level) : vocabulary;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
