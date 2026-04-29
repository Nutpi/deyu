import { CourseLesson } from "@/lib/types";

export const pronunciationLessons: CourseLesson[] = [
  {
    id: "pron-01",
    category: "pronunciation",
    titleZh: "德语字母与发音规则",
    titleDe: "Das deutsche Alphabet",
    titleEn: "The German Alphabet",
    description: "学习德语26个字母及4个特殊字符的发音，了解德语拼读规则",
    level: "A1",
    order: 1,
    estimatedMinutes: 10,
    sections: [
      {
        type: "text",
        heading: "德语字母表",
        content: "德语使用拉丁字母，共26个字母，与英语完全相同。但德语还有4个特殊字符：ä、ö、ü（变元音 Umlaut）和 ß（Eszett）。掌握字母发音是学习德语的第一步。"
      },
      {
        type: "table",
        heading: "字母发音对照表",
        content: "以下是德语字母及其发音，附有英语近似发音对照：",
        tableHeaders: ["字母", "德语发音", "英语近似", "例词"],
        tableRows: [
          ["A a", "/aː/", "像 father 中的 a", "Apfel, Abend"],
          ["B b", "/beː/", "同英语 b", "Buch, Baum"],
          ["C c", "/tseː/", "类似 ts", "Celsius, Café"],
          ["D d", "/deː/", "同英语 d", "den, danke"],
          ["E e", "/eː/", "像 bed 中的 e（更紧）", "Essen, sehr"],
          ["F f", "/ɛf/", "同英语 f", "Fisch, für"],
          ["G g", "/geː/", "像 go 中的 g", "gut, Garten"],
          ["H h", "/haː/", "同英语 h", "Haus, hier"],
          ["I i", "/iː/", "像 see 中的 ee", "ich, mir"],
          ["J j", "/jɔt/", "像 yes 中的 y", "ja, Jahr"],
          ["K k", "/kaː/", "同英语 k", "Kind, kommen"],
          ["L l", "/ɛl/", "同英语 l", "lesen, Lehrer"],
          ["M m", "/ɛm/", "同英语 m", "Mann, Mutter"],
          ["N n", "/ɛn/", "同英语 n", "nein, Nacht"],
          ["O o", "/oː/", "像 snow 中的 o", "ob, ohne"],
          ["P p", "/peː/", "同英语 p", "Park, Polizei"],
          ["Q q", "/kuː/", "同英语 q（总与 u 连用）", "Qualität"],
          ["R r", "/ɛr/", "小舌颤音（喉部颤动）", "rot, Rose"],
          ["S s", "/ɛs/", "词首像 z，其他位置像 s", "Sonne, Haus"],
          ["T t", "/teː/", "同英语 t", "Tisch, Tag"],
          ["U u", "/uː/", "像 moon 中的 oo", "und, Uhr"],
          ["V v", "/faʊ/", "大多发 f 音", "Vater, Vogel"],
          ["W w", "/veː/", "像英语 v", "Wasser, Woche"],
          ["X x", "/ɪks/", "像 ks", "hexen, Axt"],
          ["Y y", "/ʏpsɪlɔn/", "类似 ü", "Typ, System"],
          ["Z z", "/tsɛt/", "发 ts 音", "Zeit, Zoo"],
        ]
      },
      {
        type: "tip",
        heading: "英语学习者的注意事项",
        content: "德语 W 发英语的 V 音，德语 V 发英语的 F 音，德语 Z 发 TS 音。这是英语学习者最容易混淆的三个字母！"
      },
      {
        type: "text",
        heading: "特殊字符",
        content: "ä = a 上加两点，发音类似 bed 中的 e\nö = o 上加两点，发音类似 bird 中的 ir\nü = u 上加两点，发音类似法语 tu 中的 u\nß = Eszett，等同于 ss，永远不出现在词首"
      }
    ],
    exercises: [
      {
        id: "pron-01-e1",
        type: "multiple-choice",
        questionZh: "德语字母 W 的发音最接近英语的哪个音？",
        options: ["w (如 water)", "v (如 very)", "f (如 fish)", "b (如 boy)"],
        correctAnswer: "v (如 very)",
        explanation: "德语 W 发音相当于英语的 V。例如 Wasser 听起来像 \"Vasser\"。"
      },
      {
        id: "pron-01-e2",
        type: "multiple-choice",
        questionZh: "德语字母 Z 的发音是？",
        options: ["z (如 zoo)", "ts (如 cats)", "s (如 sun)", "th (如 thin)"],
        correctAnswer: "ts (如 cats)",
        explanation: "德语 Z 发 ts 音。例如 Zeit 听起来像 \"tseit\"。"
      },
      {
        id: "pron-01-e3",
        type: "multiple-choice",
        questionZh: "特殊字符 ß 等同于？",
        options: ["单个 s", "双写 ss", "z", "sh"],
        correctAnswer: "双写 ss",
        explanation: "ß (Eszett) 等同于 ss，只能出现在长元音或双元音之后。"
      },
      {
        id: "pron-01-e4",
        type: "multiple-choice",
        questionZh: "德语字母 V 在大多数单词中发什么音？",
        options: ["v (如 very)", "f (如 fish)", "w (如 water)", "p (如 pig)"],
        correctAnswer: "f (如 fish)",
        explanation: "德语 V 在大多数本土词中发 f 音，如 Vater (父亲) 听起来像 \"Fater\"。"
      }
    ]
  },
  {
    id: "pron-02",
    category: "pronunciation",
    titleZh: "元音发音：长短有别",
    titleDe: "Vokale: Lang und Kurz",
    titleEn: "German Vowels: Long and Short",
    description: "掌握德语元音的长短音区别，这是德语发音最核心的规则之一",
    level: "A1",
    order: 2,
    estimatedMinutes: 8,
    prerequisiteIds: ["pron-01"],
    sections: [
      {
        type: "text",
        heading: "元音的长短决定词义",
        content: "德语元音分长音和短音，这不仅是发音问题，还直接影响词义。比如：Staat（国家）vs Stadt（城市），唯一区别就是 a 的长短。"
      },
      {
        type: "table",
        heading: "长元音规则",
        content: "以下情况元音发长音：",
        tableHeaders: ["规则", "例子", "发音"],
        tableRows: [
          ["元音 + h", "Stahl, Sohn, Uhr", "h 不发音，只标示前面元音为长音"],
          ["元音双写", "See, Boot, Meer", "aa/ee/oo 表示长音"],
          ["ie 组合", "Liebe,sieben", "ie 发长 i 音，类似英语 ee"],
          ["单独元音（开音节）", "da, so, du", "以元音结尾的音节中，元音通常为长音"],
        ]
      },
      {
        type: "table",
        heading: "短元音规则",
        content: "以下情况元音发短音：",
        tableHeaders: ["规则", "例子", "说明"],
        tableRows: [
          ["元音 + 双辅音", "Mann, Bett, muss", "双辅音前的元音发短音"],
          ["元音 + 多个辅音", "Mutter, Kinder", "多个辅音前的元音通常发短音"],
        ]
      },
      {
        type: "comparison",
        heading: "最小对立体（Minimal Pairs）",
        content: "请注意以下成对词的元音长短差异：\nStaat (国家, 长a) ↔ Stadt (城市, 短a)\nOfen (炉子, 长o) ↔ offen (开放的, 短o)\nRaten (劝告, 长a) ↔ raten (猜测, 短a — 此例中拼写相同但语境不同)\nbeeten (铺床, 长e) ↔ beten (祈祷, 长e)"
      },
      {
        type: "tip",
        heading: "英语对比提示",
        content: "英语中元音长短也会改变词义（如 sheep vs ship），但德语中长短音的区别更加系统和规则化。记住：双辅音前 = 短音，h 前或双写元音 = 长音。"
      }
    ],
    exercises: [
      {
        id: "pron-02-e1",
        type: "multiple-choice",
        questionZh: "以下哪个单词中的元音发长音？",
        options: ["Mann", "Staat", "muss", "Bett"],
        correctAnswer: "Staat",
        explanation: "Staat 中 aa 双写表示长元音。其余单词中元音后接双辅音，发短音。"
      },
      {
        id: "pron-02-e2",
        type: "multiple-choice",
        questionZh: "德语 ie 组合（如 Liebe）发音最接近英语的？",
        options: ["i (如 bit)", "ee (如 see)", "ie (如 pie)", "e (如 bed)"],
        correctAnswer: "ee (如 see)",
        explanation: "德语 ie 发长 i 音，类似英语 see 或 meet 中的 ee。"
      },
      {
        id: "pron-02-e3",
        type: "multiple-choice",
        questionZh: "单词 Uhr 中 h 的作用是什么？",
        options: ["发 h 音", "标示前面元音为长音", "没有作用", "标示后面还有音节"],
        correctAnswer: "标示前面元音为长音",
        explanation: "在德语中，元音后的 h 通常不发音，仅作为长音标记（Dehnungs-h）。"
      }
    ]
  },
  {
    id: "pron-03",
    category: "pronunciation",
    titleZh: "辅音发音要点",
    titleDe: "Konsonanten",
    titleEn: "German Consonants",
    description: "掌握德语特色辅音 ch、r、sch 等的发音方法",
    level: "A1",
    order: 3,
    estimatedMinutes: 10,
    prerequisiteIds: ["pron-01"],
    sections: [
      {
        type: "text",
        heading: "德语特色辅音",
        content: "德语有几个对英语学习者来说比较陌生的辅音。掌握这些音是发音准确的关键。"
      },
      {
        type: "table",
        heading: "核心辅音发音对照",
        content: "",
        tableHeaders: ["德语音", "国际音标", "发音方法", "英语参考"],
        tableRows: [
          ["ch (ich)", "/ç/", "舌面靠近硬腭，气流摩擦", "类似 human 中的 h"],
          ["ch (ach)", "/x/", "舌根靠近软腭，气流摩擦", "类似 Loch 中的 ch（苏格兰音）"],
          ["sch", "/ʃ/", "同英语 sh", "shoe, ship"],
          ["sp (词首)", "/ʃp/", "sch + p", "sh-p"],
          ["st (词首)", "/ʃt/", "sch + t", "sh-t"],
          ["r", "/ʁ/", "小舌颤音（喉部颤动）", "法语 Paris 中的 r"],
          ["z", "/ts/", "t + s 连发", "cats 中的 ts"],
          ["pf", "/pf/", "p + f 连发", "无英语等价音"],
        ]
      },
      {
        type: "example",
        heading: "ch 的两种发音",
        content: "ich-Laut（前元音后）: ich, nicht, leicht — 发音较轻柔，舌位靠前\nach-Laut（后元音后）: ach, Buch, noch — 发音较深沉，舌位靠后"
      },
      {
        type: "tip",
        heading: "英语学习者技巧",
        content: "发 ch(ich) 时：试着说 \"I\" 然后延长尾音，那个摩擦音就是 ich-Laut。\n发 ch(ach) 时：想象你在清嗓子，那个摩擦音就是 ach-Laut。\n发 r 时：不用强求小舌颤音，用英语的 r 也可以被理解，慢慢练习即可。"
      }
    ],
    exercises: [
      {
        id: "pron-03-e1",
        type: "multiple-choice",
        questionZh: "德语 sch 的发音等同于英语的？",
        options: ["s (如 sun)", "sh (如 shoe)", "ch (如 church)", "sk (如 sky)"],
        correctAnswer: "sh (如 shoe)",
        explanation: "sch 在德语中发 /ʃ/，与英语 sh 完全相同。例如 Schule (学校) = \"Shoo-le\"。"
      },
      {
        id: "pron-03-e2",
        type: "multiple-choice",
        questionZh: "单词 sprechen（说）中 sp 的发音是？",
        options: ["sp (如 spy)", "ʃp (如 sh-p)", "sb (如 spill)", "st (如 stay)"],
        correctAnswer: "ʃp (如 sh-p)",
        explanation: "sp 在词首时发音变为 ʃp（sch + p）。所以 sprechen 听起来像 \"shpre-chen\"。"
      },
      {
        id: "pron-03-e3",
        type: "multiple-choice",
        questionZh: "ch 在 ich 中和在 ach 中的发音不同。ich 中的 ch 更接近？",
        options: ["清嗓子声", "说 human 时 h 的摩擦音", "英语 k 音", "英语 g 音"],
        correctAnswer: "说 human 时 h 的摩擦音",
        explanation: "ich-Laut 是前部摩擦音，轻柔。ach-Laut 是后部摩擦音，深沉，像清嗓子。"
      }
    ]
  },
  {
    id: "pron-04",
    category: "pronunciation",
    titleZh: "变元音与 ß",
    titleDe: "Umlaute und Eszett",
    titleEn: "Umlauts and Eszett",
    description: "深入了解 ä、ö、ü 三个变元音和 ß 的用法与发音",
    level: "A1",
    order: 4,
    estimatedMinutes: 8,
    prerequisiteIds: ["pron-02"],
    sections: [
      {
        type: "text",
        heading: "什么是变元音（Umlaut）？",
        content: "德语的三个变元音 ä、ö、ü 是在 a、o、u 上加两点而成。它们代表舌位更靠前的发音。变元音在德语中非常常见，通常出现在名词复数、动词变位和比较级中。"
      },
      {
        type: "table",
        heading: "变元音发音指南",
        content: "",
        tableHeaders: ["变元音", "发音方法", "英语近似", "例词"],
        tableRows: [
          ["ä", "张嘴说 e（如 bed）", "bed, head 中的 e", "Käse, älter"],
          ["ö", "说 e 然后圆唇", "bird 中的 ir（圆唇）", "schön, König"],
          ["ü", "说 i 然后圆唇", "无英语等价音（类似法语 tu）", "über, fühlen"],
        ]
      },
      {
        type: "example",
        heading: "变元音改变词义的例子",
        content: "Schon (已经) ↔ Schön (美丽的)\nMutter (母亲) ↔ Mütter (母亲们，复数)\nHaus (房子) ↔ Häuser (房子们，复数)\nlang (长的) ↔ länger (更长的，比较级)"
      },
      {
        type: "text",
        heading: "关于 ß（Eszett）",
        content: "ß 是德语独有的字母，表示清辅音 /s/（同 ss）。\n\n使用规则：\n- 只出现在长元音或双元音之后：Straße, Fuß, groß\n- 在短元音后用 ss 替代：müssen, essen, Wasser\n- 永远不出现在词首\n- 在瑞士德语中不使用 ß，全部用 ss 替代\n\n2017年德语正字法改革后，ß 的使用规则更加简化：任何地方只要 ss 是正确的，ß 也可以替换为 ss（但反过来不行）。"
      },
      {
        type: "tip",
        heading: "发音技巧",
        content: "发 ü 的方法：先说英语的 \"ee\"（如 see），然后保持舌位不动，慢慢把嘴唇收圆。这个圆唇的 \"ee\" 就是 ü。\n发 ö 的方法：先说英语的 \"eh\"（如 bed），然后保持舌位不动，慢慢把嘴唇收圆。这个圆唇的 \"eh\" 就是 ö。"
      }
    ],
    exercises: [
      {
        id: "pron-04-e1",
        type: "multiple-choice",
        questionZh: "ä 的发音最接近英语的？",
        options: ["a (如 father)", "e (如 bed)", "i (如 bit)", "u (如 put)"],
        correctAnswer: "e (如 bed)",
        explanation: "ä 发音类似英语 bed 或 head 中的短 e 音。"
      },
      {
        id: "pron-04-e2",
        type: "multiple-choice",
        questionZh: "ß 可以出现在单词的什么位置？",
        options: ["词首", "词尾或词中", "任何位置", "只在动词中"],
        correctAnswer: "词尾或词中",
        explanation: "ß 永远不出现在词首。它只出现在长元音或双元音之后，位于词中或词尾。"
      },
      {
        id: "pron-04-e3",
        type: "multiple-choice",
        questionZh: "发 ü 的正确方法是？",
        options: ["说 u 然后展唇", "说 i(ee) 然后圆唇", "说 o 然后展唇", "说 a 然后圆唇"],
        correctAnswer: "说 i(ee) 然后圆唇",
        explanation: "先发 i (如 see)，保持舌位，圆唇即得 ü。这是最有效的学习方法。"
      }
    ]
  },
  {
    id: "pron-05",
    category: "pronunciation",
    titleZh: "词重音与语调",
    titleDe: "Wortakzent und Intonation",
    titleEn: "Word Stress and Intonation",
    description: "学习德语单词重音规则和基本语调模式",
    level: "A1",
    order: 5,
    estimatedMinutes: 8,
    prerequisiteIds: ["pron-03"],
    sections: [
      {
        type: "text",
        heading: "德语重音规则",
        content: "与英语不同，德语的重音规则非常规律。掌握这些规则后，你基本可以正确重读任何新遇到的德语单词。"
      },
      {
        type: "table",
        heading: "重音规则总结",
        content: "",
        tableHeaders: ["词的类型", "重音位置", "例子"],
        tableRows: [
          ["德语本土词", "第一个音节", "ANT-wort, LER-nen, WAH-rung"],
          ["以 -ion 结尾的词", "-ion 音节", "Informa-TION, Na-TION, Sta-TION"],
          ["以 -ik 结尾的词", "-ik 音节", "Musi-K, Physi-K, Grammati-K"],
          ["前缀 be-, ge-, er-, ver-, zer-", "不在前缀上", "be-SUCHen, ge-SCHICHTE, ver-STEHen"],
          ["复合词", "第一个组成部分", "AP-fel-saft, HAND-schuhe"],
          ["外来词", "通常保持原语言重音", "Com-PU-ter, In-ter-ne-TI-onal"],
        ]
      },
      {
        type: "text",
        heading: "德语语调特点",
        content: "德语陈述句：语调逐渐下降，与英语类似。\n德语疑问句（W疑问词开头）：也下降。\n德语疑问句（Ja/Nein 问题）：句末语调上扬，与英语类似。\n\n关键区别：德语的语调节奏更均匀，不像英语那样有大幅度的音高变化。每个音节的长度更一致。"
      },
      {
        type: "comparison",
        heading: "德语 vs 英语重音对比",
        content: "英语：pho-TO-graph-er（重音在第二音节）\n德语：FO-to-graf（重音在第一音节）\n\n英语的节奏是\"重音计时\"（stress-timed），弱读的音节会缩短。\n德语虽然也是重音计时语言，但每个音节的发音比英语更清晰、更完整。"
      }
    ],
    exercises: [
      {
        id: "pron-05-e1",
        type: "multiple-choice",
        questionZh: "德语本土词的重音通常在？",
        options: ["最后一个音节", "第一个音节", "倒数第二个音节", "因词而异无规律"],
        correctAnswer: "第一个音节",
        explanation: "德语本土词的重音几乎总是在第一个音节。这是德语最基本也最稳定的重音规则。"
      },
      {
        id: "pron-05-e2",
        type: "multiple-choice",
        questionZh: "复合词 Handschuh（手套）的重音在？",
        options: ["schuh 上", "Hand 上", "两个音节都重读", "不重读"],
        correctAnswer: "Hand 上",
        explanation: "德语复合词的重音在第一个组成部分上。Hand-schuh = 手 + 鞋 → 手套，重音在 Hand。"
      },
      {
        id: "pron-05-e3",
        type: "multiple-choice",
        questionZh: "以 -ion 结尾的词（如 Information）重音在？",
        options: ["第一个音节", "-ion 音节", "倒数第二个音节", "无规律"],
        correctAnswer: "-ion 音节",
        explanation: "以 -ion 结尾的外来词，重音落在 -ion 音节上：Informa-TION。"
      }
    ]
  }
];
