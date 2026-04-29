import { QuickLesson } from "@/lib/types";

export const pronunciationQuickCards: QuickLesson[] = [
  {
    lessonId: "pron-01",
    cards: [
      {
        id: "pron-01-qc1",
        heading: "德语字母表基础",
        corePoint: "德语使用 26 个拉丁字母 + 4 个特殊字符：ä、ö、ü（变元音）和 ß（Eszett）。",
        examples: [
          { german: "A a /aː/ — Apfel", chinese: "像 father 中的 a" },
          { german: "E e /eː/ — Essen", chinese: "像 bed 中的 e（更紧）" },
        ],
      },
      {
        id: "pron-01-qc2",
        heading: "容易混淆的三个字母",
        corePoint: "W 发英语的 V 音，V 发英语的 F 音，Z 发 TS 音——这是英语学习者最容易搞混的！",
        examples: [
          { german: "Wasser → 听起来像 \"Vasser\"", chinese: "德语 W = 英语 V" },
          { german: "Vater → 听起来像 \"Fater\"", chinese: "德语 V = 英语 F" },
          { german: "Zeit → 听起来像 \"tseit\"", chinese: "德语 Z = TS" },
        ],
      },
      {
        id: "pron-01-qc3",
        heading: "特殊字符发音",
        corePoint: "ä 类似 bed 中的 e，ö 类似 bird 中的 ir（圆唇），ü 类似法语 tu 中的 u，ß 等同于 ss。",
        examples: [
          { german: "ä — Käse, älter", chinese: "张嘴说 bed 中的 e" },
          { german: "ö — schön, König", chinese: "说 e 然后圆唇" },
          { german: "ü — über, fühlen", chinese: "说 i(ee) 然后圆唇" },
        ],
        tip: "发 ü 的方法：先说英语 \"see\"，保持舌位不动，慢慢把嘴唇收圆。",
      },
      {
        id: "pron-01-qc4",
        heading: "其他需要注意的字母",
        corePoint: "J 发英语 Y 音，R 是小舌颤音，S 在词首发 Z 音。",
        examples: [
          { german: "ja, Jahr", chinese: "J = 英语 yes 中的 y" },
          { german: "rot, Rose", chinese: "R = 喉部颤动（小舌颤音）" },
          { german: "Sonne", chinese: "S 在词首发 Z 音" },
        ],
      },
    ],
  },
  {
    lessonId: "pron-02",
    cards: [
      {
        id: "pron-02-qc1",
        heading: "元音长短决定词义",
        corePoint: "德语元音分长音和短音，直接影响词义。如 Staat（国家）vs Stadt（城市），唯一区别是 a 的长短。",
        examples: [
          { german: "Staat /aː/ vs Stadt /a/", chinese: "国家 vs 城市" },
          { german: "Ofen /oː/ vs offen /ɔ/", chinese: "炉子 vs 开放的" },
        ],
      },
      {
        id: "pron-02-qc2",
        heading: "长元音规则",
        corePoint: "元音 + h（h 不发音）、元音双写（aa/ee/oo）、ie 组合、开音节中的元音都发长音。",
        examples: [
          { german: "Stahl, Sohn, Uhr", chinese: "h 只标示长音，不发音" },
          { german: "See, Boot, Meer", chinese: "双写元音 = 长音" },
          { german: "Liebe, sieben", chinese: "ie 发长 i，像英语 see" },
        ],
      },
      {
        id: "pron-02-qc3",
        heading: "短元音规则",
        corePoint: "双辅音前（Mann, Bett）或多个辅音前（Mutter, Kinder）的元音发短音。",
        examples: [
          { german: "Mann, Bett, muss", chinese: "双辅音前 = 短音" },
          { german: "Mutter, Kinder", chinese: "多辅音前 = 短音" },
        ],
        tip: "核心规则：双辅音前 = 短音，h 前或双写元音 = 长音。",
      },
    ],
  },
  {
    lessonId: "pron-03",
    cards: [
      {
        id: "pron-03-qc1",
        heading: "ch 的两种发音",
        corePoint: "ch 在前元音后（i, e）发轻柔的 ich-Laut；在后元音后（a, o, u）发深沉的 ach-Laut。",
        examples: [
          { german: "ich, nicht, leicht", chinese: "ich-Laut：轻柔，类似 human 中的 h" },
          { german: "ach, Buch, noch", chinese: "ach-Laut：深沉，类似清嗓子" },
        ],
        tip: "发 ich-Laut：试着说 \"I\" 然后延长尾音；发 ach-Laut：想象清嗓子。",
      },
      {
        id: "pron-03-qc2",
        heading: "sch 和 sp/st 在词首",
        corePoint: "sch 发英语 sh 音。sp 和 st 在词首时分别变为 ʃp 和 ʃt（sch + p/t）。",
        examples: [
          { german: "Schule → \"Shoo-le\"", chinese: "sch = 英语 sh" },
          { german: "sprechen → \"shpre-chen\"", chinese: "词首 sp = sh-p" },
          { german: "Straße → \"shtra-se\"", chinese: "词首 st = sh-t" },
        ],
      },
      {
        id: "pron-03-qc3",
        heading: "其他特色辅音",
        corePoint: "R 是小舌颤音（不用强求，用英语 r 也行），Z 发 ts，pf 是 p+f 连发。",
        examples: [
          { german: "rot, Rose", chinese: "R = 喉部颤动" },
          { german: "Zeit, Zoo", chinese: "Z = ts 音（如 cats 中的 ts）" },
          { german: "Apfel, Pferd", chinese: "pf = p 和 f 连发" },
        ],
        tip: "发 R 时不用强求小舌颤音，用英语的 r 也可以被理解，慢慢练习即可。",
      },
    ],
  },
  {
    lessonId: "pron-04",
    cards: [
      {
        id: "pron-04-qc1",
        heading: "什么是变元音？",
        corePoint: "ä、ö、ü 是在 a、o、u 上加两点而成，代表舌位更靠前的发音。常出现在复数、动词变位和比较级中。",
        examples: [
          { german: "Schon ↔ Schön", chinese: "已经 ↔ 美丽的" },
          { german: "Mutter ↔ Mütter", chinese: "母亲 ↔ 母亲们（复数）" },
          { german: "lang ↔ länger", chinese: "长的 ↔ 更长的（比较级）" },
        ],
      },
      {
        id: "pron-04-qc2",
        heading: "变元音发音技巧",
        corePoint: "ä 张嘴说 e（如 bed），ö 说 e 然后圆唇，ü 说 i(ee) 然后圆唇。",
        examples: [
          { german: "ä: Käse, älter", chinese: "类似 bed, head 中的 e" },
          { german: "ö: schön, König", chinese: "类似 bird 中的 ir（圆唇）" },
          { german: "ü: über, fühlen", chinese: "无英语等价音（类似法语 tu）" },
        ],
      },
      {
        id: "pron-04-qc3",
        heading: "ß（Eszett）的用法",
        corePoint: "ß 等同于 ss，只出现在长元音或双元音之后（Straße, Fuß），永远不出现在词首。短元音后用 ss（müssen, Wasser）。",
        examples: [
          { german: "Straße, Fuß, groß", chinese: "长元音后用 ß" },
          { german: "müssen, essen, Wasser", chinese: "短元音后用 ss" },
        ],
        tip: "瑞士德语中不使用 ß，全部用 ss 替代。",
      },
    ],
  },
  {
    lessonId: "pron-05",
    cards: [
      {
        id: "pron-05-qc1",
        heading: "德语重音基本规则",
        corePoint: "德语本土词重音在第一个音节（ANT-wort, LER-nen）。复合词重音在第一个组成部分。",
        examples: [
          { german: "ANT-wort, LER-nen", chinese: "本土词：重音在第一音节" },
          { german: "AP-fel-saft, HAND-schuhe", chinese: "复合词：重音在第一部分" },
        ],
      },
      {
        id: "pron-05-qc2",
        heading: "外来词和特殊重音",
        corePoint: "以 -ion 结尾重音在该音节（Informa-TION），以 -ik 结尾重音在该音节（Musi-K），前缀 be-/ge-/er-/ver-/zer- 不重读。",
        examples: [
          { german: "Informa-TION, Na-TION", chinese: "-ion 结尾：重音在 -ion" },
          { german: "Musi-K, Physi-K", chinese: "-ik 结尾：重音在 -ik" },
          { german: "be-SUCHen, ver-STEHen", chinese: "前缀不重读" },
        ],
      },
      {
        id: "pron-05-qc3",
        heading: "德语语调",
        corePoint: "陈述句和 W 疑问句语调下降，Ja/Nein 疑问句句末上扬。德语节奏比英语更均匀，每个音节发音更清晰。",
        examples: [
          { german: "Du kommst aus Berlin. ↘", chinese: "陈述句：语调下降" },
          { german: "Kommst du aus Berlin? ↗", chinese: "是非问句：句末上扬" },
        ],
        tip: "英语 pho-TO-graph-er vs 德语 FO-to-graf——德语重音更靠前。",
      },
    ],
  },
];
