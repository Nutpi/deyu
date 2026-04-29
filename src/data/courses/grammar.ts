import { CourseLesson } from "@/lib/types";

export const grammarLessons: CourseLesson[] = [
  {
    id: "gram-01",
    category: "grammar",
    titleZh: "冠词与名词的性",
    titleDe: "Artikel und das grammatische Geschlecht",
    titleEn: "Articles and Gender",
    description: "理解德语名词的三性系统（der/die/das）及冠词用法",
    level: "A1",
    order: 1,
    estimatedMinutes: 12,
    sections: [
      {
        type: "text",
        heading: "德语名词的三种\"性别\"",
        content: "德语每个名词都有语法\"性\"（Genus），共三种：阳性（maskulin, der）、阴性（feminin, die）、中性（neutrum, das）。这不代表名词真的有性别——比如太阳（die Sonne）是阴性，月亮（der Mond）是阳性，女孩（das Mädchen）是中性！"
      },
      {
        type: "table",
        heading: "定冠词与不定冠词",
        content: "",
        tableHeaders: ["性", "定冠词（特定）", "不定冠词（泛指）", "英语对应"],
        tableRows: [
          ["阳性 maskulin", "der", "ein", "the / a"],
          ["阴性 feminin", "die", "eine", "the / a"],
          ["中性 neutrum", "das", "ein", "the / a"],
          ["复数 Plural", "die", "（无不定冠词）", "the / —"],
        ]
      },
      {
        type: "text",
        heading: "如何判断名词的性？",
        content: "虽然有很多例外，但以下规律能帮你猜对大部分名词的性："
      },
      {
        type: "table",
        heading: "阳性（der）规律",
        content: "",
        tableHeaders: ["规则", "例子"],
        tableRows: [
          ["以 -er 结尾（指人/职业）", "der Lehrer, der Fahrer, der Koch"],
          ["以 -ismus 结尾", "der Tourismus, der Kapitalismus"],
          ["星期、月份、季节", "der Montag, der Januar, der Winter"],
          ["方位、天气", "der Norden, der Schnee, der Regen"],
          ["大多数以 -en 结尾（非 -ung/-heit）", "der Garten, der Boden"],
        ]
      },
      {
        type: "table",
        heading: "阴性（die）规律",
        content: "",
        tableHeaders: ["规则", "例子"],
        tableRows: [
          ["以 -e 结尾（多音节词）", "die Blume, die Kirche, die Straße"],
          ["以 -ung 结尾", "die Wohnung, die Ausbildung"],
          ["以 -heit/-keit 结尾", "die Freiheit, die Gesundheit"],
          ["以 -tion/-sion 结尾", "die Information, die Diskussion"],
          ["以 -ik 结尾", "die Musik, die Physik"],
        ]
      },
      {
        type: "table",
        heading: "中性（das）规律",
        content: "",
        tableHeaders: ["规则", "例子"],
        tableRows: [
          ["以 -chen/-lein 结尾（指小词）", "das Mädchen, das Brötchen"],
          ["以 -ment 结尾", "das Dokument, das Instrument"],
          ["以 Ge- 开头的词", "das Gebäude, das Gesicht"],
          ["绝大多数金属", "das Gold, das Silber, das Eisen"],
        ]
      },
      {
        type: "tip",
        heading: "英语学习者注意",
        content: "英语曾经也有语法性别系统，但已经几乎完全消失了（只保留了 he/she/it）。德语保留了完整的性系统，每个名词都要记住它的冠词。建议：学每个新名词时，连同冠词一起记忆——不是记忆 \"Tisch\"，而是记忆 \"der Tisch\"。"
      }
    ],
    exercises: [
      {
        id: "gram-01-e1",
        type: "article-drill",
        questionZh: "请选择正确的定冠词：",
        questionDe: "___ Buch（书）",
        correctAnswer: "das",
        explanation: "大多数以 -ch 结尾的单音节名词是中性，但这是个常见特例。Buch（书）是中性名词 das Buch。建议记住：das Buch。"
      },
      {
        id: "gram-01-e2",
        type: "article-drill",
        questionZh: "请选择正确的定冠词：",
        questionDe: "___ Wohnung（公寓）",
        correctAnswer: "die",
        explanation: "以 -ung 结尾的名词几乎都是阴性。die Wohnung（公寓）。"
      },
      {
        id: "gram-01-e3",
        type: "article-drill",
        questionZh: "请选择正确的定冠词：",
        questionDe: "___ Montag（星期一）",
        correctAnswer: "der",
        explanation: "星期几都是阳性名词。der Montag, der Dienstag, der Mittwoch..."
      },
      {
        id: "gram-01-e4",
        type: "multiple-choice",
        questionZh: "das Mädchen（女孩）为什么是中性？",
        options: ["因为女孩没有性别", "因为以 -chen 结尾的词都是中性", "因为它指年轻人", "这是个不规则变化"],
        correctAnswer: "因为以 -chen 结尾的词都是中性",
        explanation: "-chen 是指小后缀，所有以 -chen 结尾的词都是中性（das）。Mädchen 来自 Magd（女仆），加上 -chen 后变为中性。语法性别≠自然性别！"
      }
    ]
  },
  {
    id: "gram-02",
    category: "grammar",
    titleZh: "名词的复数形式",
    titleDe: "Der Plural der Nomen",
    titleEn: "Noun Plurals",
    description: "学习德语名词五种复数变化模式及常见规则",
    level: "A1",
    order: 2,
    estimatedMinutes: 10,
    prerequisiteIds: ["gram-01"],
    sections: [
      {
        type: "text",
        heading: "德语复数比英语复杂",
        content: "英语复数通常只加 -s，但德语有五种主要的复数变化方式。好消息是，虽然看起来复杂，但每种都有明确的规则可循。"
      },
      {
        type: "table",
        heading: "五种复数模式",
        content: "",
        tableHeaders: ["模式", "方法", "例子（单数→复数）", "常见于"],
        tableRows: [
          ["1. 加 -e", "词尾加 -e", "der Hund → die Hunde\ndas Buch → die Bücher", "大多数阳性和中性名词"],
          ["2. 加 -er", "词尾加 -er（常伴随变元音）", "das Kind → die Kinder\nder Mann → die Männer", "许多中性名词"],
          ["3. 加 -n/-en", "词尾加 -n 或 -en", "die Frau → die Frauen\ndie Blume → die Blumen", "大多数阴性名词"],
          ["4. 加 -s", "词尾加 -s", "das Auto → die Autos\nder Park → die Parks", "外来词、缩略词"],
          ["5. 零变化", "不变，仅冠词变 die", "der Lehrer → die Lehrer\ndas Mädchen → die Mädchen", "以 -er/-el/-en 结尾的词"],
        ]
      },
      {
        type: "example",
        heading: "变元音（Umlaut）与复数",
        content: "模式 1 和 2 中，如果是单音节名词且元音为 a/o/u，复数时通常变元音：\nder Apfel → die Äpfel（苹果）\nder Vater → die Väter（父亲）\ndas Buch → die Bücher（书）\nder Mund → die Münder（嘴）"
      },
      {
        type: "tip",
        heading: "学习建议",
        content: "不像英语只加 -s，德语复数形式需要逐个记忆。建议：学每个名词时连同复数一起记——不是记 \"der Apfel\"，而是记 \"der Apfel, die Äpfel\"。好消息是，所有复数名词的定冠词都是 die！"
      }
    ],
    exercises: [
      {
        id: "gram-02-e1",
        type: "multiple-choice",
        questionZh: "das Kind（孩子）的复数是？",
        options: ["die Kinds", "die Kinder", "die Kindern", "die Kind"],
        correctAnswer: "die Kinder",
        explanation: "das Kind 属于模式 2（加 -er），复数为 die Kinder。"
      },
      {
        id: "gram-02-e2",
        type: "multiple-choice",
        questionZh: "大多数阴性名词（以 -e 结尾）的复数形式是？",
        options: ["加 -e", "加 -er", "加 -n/-en", "加 -s"],
        correctAnswer: "加 -n/-en",
        explanation: "以 -e 结尾的阴性名词加 -n：die Blume → die Blumen。以辅音结尾的阴性名词加 -en：die Frau → die Frauen。"
      },
      {
        id: "gram-02-e3",
        type: "multiple-choice",
        questionZh: "所有复数名词的共同点是什么？",
        options: ["都加 -s", "定冠词都是 die", "都有变元音", "都在词尾加 e"],
        correctAnswer: "定冠词都是 die",
        explanation: "无论哪种复数模式，所有复数名词的定冠词都是 die（包括阳性和中性名词的复数！）。"
      }
    ]
  },
  {
    id: "gram-03",
    category: "grammar",
    titleZh: "人称代词与 sein 动词变位",
    titleDe: "Personalpronomen und \"sein\"",
    titleEn: "Personal Pronouns and the Verb \"sein\"",
    description: "学习德语人称代词和最重要的动词 sein（是）的变位",
    level: "A1",
    order: 3,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "人称代词",
        content: "",
        tableHeaders: ["德语", "英语", "中文", "说明"],
        tableRows: [
          ["ich", "I", "我", "永远小写"],
          ["du", "you (informal singular)", "你", "非正式，对朋友/家人用"],
          ["er", "he", "他", ""],
          ["sie", "she", "她", ""],
          ["es", "it", "它", ""],
          ["wir", "we", "我们", ""],
          ["ihr", "you (informal plural)", "你们", "对多个人非正式称呼"],
          ["sie", "they", "他们/她们/它们", "与\"她\"同形，根据语境判断"],
          ["Sie", "You (formal)", "您/您们", "永远大写，正式场合用"],
        ]
      },
      {
        type: "table",
        heading: "sein（to be）的现在时变位",
        content: "",
        tableHeaders: ["人称", "sein 变位", "英语对应", "例句"],
        tableRows: [
          ["ich", "bin", "am", "Ich bin Student. (I am a student.)"],
          ["du", "bist", "are", "Du bist klug. (You are smart.)"],
          ["er/sie/es", "ist", "is", "Er ist Lehrer. (He is a teacher.)"],
          ["wir", "sind", "are", "Wir sind müde. (We are tired.)"],
          ["ihr", "seid", "are", "Ihr seid nett. (You are nice.)"],
          ["sie/Sie", "sind", "are", "Sie sind aus Berlin. (They are from Berlin.)"],
        ]
      },
      {
        type: "comparison",
        heading: "德语 vs 英语：sein",
        content: "英语：I am, you are, he is, we are, they are\n德语：ich bin, du bist, er ist, wir sind, sie sind\n\n可以看到，德语每个都有不同形式，而英语简化了很多（you are 通用了）。德语变位更丰富。"
      },
      {
        type: "tip",
        heading: "重要提醒",
        content: "ich 永远小写！这是英语学习者常犯的错误。\n德语有三种不同的\"你\"：du（非正式单数）、ihr（非正式复数）、Sie（正式，永远大写）。\nsein 是最不规则的德语动词，必须硬记。"
      }
    ],
    exercises: [
      {
        id: "gram-03-e1",
        type: "multiple-choice",
        questionZh: "\"Ich ___ Student.\" 空格处应填？",
        questionDe: "Ich ___ Student.",
        options: ["ist", "bin", "bist", "sind"],
        correctAnswer: "bin",
        explanation: "ich 搭配 bin。完整句：Ich bin Student. (I am a student.)"
      },
      {
        id: "gram-03-e2",
        type: "multiple-choice",
        questionZh: "德语中的正式\"您\"用哪个代词？",
        options: ["du", "ihr", "Sie", "sie"],
        correctAnswer: "Sie",
        explanation: "Sie（永远大写）是正式的\"您/您们\"，用于对陌生人、上司、老师等。"
      },
      {
        id: "gram-03-e3",
        type: "multiple-choice",
        questionZh: "\"Wir ___ müde.\" 空格处应填？",
        questionDe: "Wir ___ müde.",
        options: ["bin", "bist", "ist", "sind"],
        correctAnswer: "sind",
        explanation: "wir 搭配 sind。完整句：Wir sind müde. (We are tired.)"
      }
    ]
  },
  {
    id: "gram-04",
    category: "grammar",
    titleZh: "动词现在时变位",
    titleDe: "Verben im Präsens",
    titleEn: "Present Tense Conjugation",
    description: "学习德语规则动词的现在时变位模式",
    level: "A1",
    order: 4,
    estimatedMinutes: 10,
    prerequisiteIds: ["gram-03"],
    sections: [
      {
        type: "text",
        heading: "规则动词变位",
        content: "德语规则动词（schwache Verben）的变位非常有规律。以词干为基础，加上人称词尾。"
      },
      {
        type: "table",
        heading: "规则变位词尾",
        content: "以 machen（to make/do）为例：",
        tableHeaders: ["人称", "词尾", "machen 变位", "英语"],
        tableRows: [
          ["ich", "-e", "mache", "make"],
          ["du", "-st", "machst", "make"],
          ["er/sie/es", "-t", "macht", "makes"],
          ["wir", "-en", "machen", "make"],
          ["ihr", "-t", "macht", "make"],
          ["sie/Sie", "-en", "machen", "make"],
        ]
      },
      {
        type: "text",
        heading: "词干以 -d 或 -t 结尾的动词",
        content: "为便于发音，在 du/er/ihr 形式加额外 -e-：\n\narbeiten（工作）：du arbeitest, er arbeitet, ihr arbeitet\nfinden（找到）：du findest, er findet, ihr findet"
      },
      {
        type: "text",
        heading: "换元音动词（e → i/ie）",
        content: "部分动词在 du 和 er/sie/es 形式中，词干元音从 e 变为 i 或 ie：\n\ne → i：sprechen（说）→ du sprichst, er spricht\ne → i：essen（吃）→ du isst, er isst\ne → ie：lesen（读）→ du liest, er liest\n\n这是最常见的不规则类型，需要逐个记忆。"
      },
      {
        type: "comparison",
        heading: "德语 vs 英语",
        content: "英语现在时只有第三人称单数加 -s：I speak, you speak, he speak**s**\n德语每个人称都有不同形式：ich spreche, du sprichst, er spricht\n\n德语变位信息更丰富——动词本身就包含了主语信息。"
      }
    ],
    exercises: [
      {
        id: "gram-04-e1",
        type: "fill-blank",
        questionZh: "填入正确的动词形式：",
        questionDe: "Ich ___ Deutsch. (lernen)",
        correctAnswer: "lerne",
        explanation: "ich 形式去掉 -en 加 -e：lernen → lerne。Ich lerne Deutsch. (I learn German.)"
      },
      {
        id: "gram-04-e2",
        type: "fill-blank",
        questionZh: "填入正确的动词形式：",
        questionDe: "Er ___ in Berlin. (wohnen)",
        correctAnswer: "wohnt",
        explanation: "er/sie/es 形式加 -t：wohnen → wohnt。Er wohnt in Berlin. (He lives in Berlin.)"
      },
      {
        id: "gram-04-e3",
        type: "multiple-choice",
        questionZh: "动词 sprechen（说）的 er 形式是？",
        options: ["sprecht", "spricht", "sprechet", "sprecht"],
        correctAnswer: "spricht",
        explanation: "sprechen 是换元音动词（e → i），er/sie/es 形式为 spricht。"
      }
    ]
  },
  {
    id: "gram-05",
    category: "grammar",
    titleZh: "haben 与情态动词",
    titleDe: "haben und Modalverben",
    titleEn: "haben and Modal Verbs",
    description: "学习 haben（有）和常用情态动词 können、müssen、wollen 等的用法",
    level: "A1",
    order: 5,
    estimatedMinutes: 10,
    prerequisiteIds: ["gram-04"],
    sections: [
      {
        type: "table",
        heading: "haben（to have）变位",
        content: "",
        tableHeaders: ["人称", "haben 变位", "英语"],
        tableRows: [
          ["ich", "habe", "have"],
          ["du", "hast", "have"],
          ["er/sie/es", "hat", "has"],
          ["wir", "haben", "have"],
          ["ihr", "habt", "have"],
          ["sie/Sie", "haben", "have"],
        ]
      },
      {
        type: "table",
        heading: "常用情态动词",
        content: "",
        tableHeaders: ["动词", "含义", "ich 形式", "du 形式", "er/sie/es 形式"],
        tableRows: [
          ["können", "能够/can", "kann", "kannst", "kann"],
          ["müssen", "必须/must", "muss", "musst", "muss"],
          ["wollen", "想要/want", "will", "willst", "will"],
          ["dürfen", "允许/may", "darf", "darfst", "darf"],
          ["sollen", "应该/should", "soll", "sollst", "soll"],
        ]
      },
      {
        type: "text",
        heading: "情态动词的句子结构",
        content: "情态动词在句子中的用法非常重要：\n\n主语 + 情态动词（变位）+ ... + 动词原形（不定式，放句末）\n\n例子：\nIch kann Deutsch sprechen. (I can speak German.)\nDu musst jetzt gehen. (You must go now.)\nSie will ins Kino gehen. (She wants to go to the cinema.)"
      },
      {
        type: "tip",
        heading: "与英语的对比",
        content: "英语：I can **speak** German.（情态动词后直接跟原形）\n德语：Ich kann Deutsch **sprechen**.（原形动词放在句末！）\n\n这是德语最重要的语序规则之一：情态动词+原形的框架结构。变位的情态动词在第二位，不定式动词在句末。"
      }
    ],
    exercises: [
      {
        id: "gram-05-e1",
        type: "fill-blank",
        questionZh: "填入正确的形式：",
        questionDe: "Ich ___ eine Frage. (haben)",
        correctAnswer: "habe",
        explanation: "ich + haben → habe。Ich habe eine Frage. (I have a question.)"
      },
      {
        id: "gram-05-e2",
        type: "multiple-choice",
        questionZh: "\"She can speak German.\" 的正确德语语序是？",
        options: ["Sie kann sprechen Deutsch.", "Sie kann Deutsch sprechen.", "Sie sprechen kann Deutsch.", "Sie Deutsch kann sprechen."],
        correctAnswer: "Sie kann Deutsch sprechen.",
        explanation: "情态动词框架：变位的 kann 在第二位，不定式 sprechen 放句末。"
      },
      {
        id: "gram-05-e3",
        type: "multiple-choice",
        questionZh: "können 的 ich 形式是？",
        options: ["könnst", "könne", "kann", "kannt"],
        correctAnswer: "kann",
        explanation: "情态动词的 ich 和 er/sie/es 形式相同。ich kann, du kannst, er kann。"
      }
    ]
  },
  {
    id: "gram-06",
    category: "grammar",
    titleZh: "语序：动词第二位",
    titleDe: "Wortstellung: Verb an zweiter Stelle",
    titleEn: "Word Order: Verb Second",
    description: "理解德语核心语序规则——动词永远在第二位",
    level: "A1",
    order: 6,
    estimatedMinutes: 8,
    prerequisiteIds: ["gram-04"],
    sections: [
      {
        type: "text",
        heading: "V2 规则（Verb-Second Rule）",
        content: "德语最重要的语序规则：**变位动词永远在陈述句的第二个位置**。\n\n注意：\"第二个位置\"不一定是第二个词。\"位置\"是语法概念，一个名词短语算一个位置。"
      },
      {
        type: "table",
        heading: "V2 规则示例",
        content: "",
        tableHeaders: ["第一位", "第二位（动词）", "第三位及之后", "中文"],
        tableRows: [
          ["Ich", "lerne", "Deutsch.", "我学德语。"],
          ["Heute", "lerne", "ich Deutsch.", "今天我学德语。"],
          ["Deutsch", "lerne", "ich heute.", "德语我今天学。"],
          ["Am Montag", "beginnt", "der Kurs.", "周一课程开始。"],
        ]
      },
      {
        type: "text",
        heading: "疑问句的语序",
        content: "W 疑问句（特殊疑问句）：疑问词(位1) + 动词(位2) + 主语 + ...\nWas machst du heute? (What are you doing today?)\nWo wohnst du? (Where do you live?)\n\nJa/Nein 疑问句：动词(位1) + 主语 + ...\nWohnst du in Berlin? (Do you live in Berlin?)\nSprichst du Deutsch? (Do you speak German?)"
      },
      {
        type: "comparison",
        heading: "德语 vs 英语",
        content: "英语：Today I learn German.（语序灵活，动词总在主语后）\n德语：Heute lerne ich Deutsch.（动词必须第二位！）\n\n当时间/地点提到句首时，英语保持主语-动词顺序，德语则动词-主语倒装。这是英语学习者最容易犯的错误之一。"
      }
    ],
    exercises: [
      {
        id: "gram-06-e1",
        type: "multiple-choice",
        questionZh: "\"Morgen ___ ich ins Kino.\" 空格处应填动词的正确位置说明是？",
        options: ["动词在第一位", "动词在第二位", "动词在第三位", "动词在句末"],
        correctAnswer: "动词在第二位",
        explanation: "德语陈述句中，变位动词永远在第二位。Morgen(1) gehe(2) ich(3)..."
      },
      {
        id: "gram-06-e2",
        type: "multiple-choice",
        questionZh: "德语 Ja/Nein 疑问句的语序是？",
        options: ["主语+动词+...", "动词+主语+...", "疑问词+动词+主语", "和陈述句一样"],
        correctAnswer: "动词+主语+...",
        explanation: "Ja/Nein 疑问句以动词开头：Kommst du aus China? (Are you from China?)"
      },
      {
        id: "gram-06-e3",
        type: "multiple-choice",
        questionZh: "以下哪个句子的语序是正确的？",
        options: ["Heute ich lerne Deutsch.", "Heute lerne ich Deutsch.", "Lerne heute ich Deutsch.", "Ich heute lerne Deutsch."],
        correctAnswer: "Heute lerne ich Deutsch.",
        explanation: "Heute(位1) + lerne(位2,动词) + ich(位3) + Deutsch(位4)。动词必须在第二位。"
      }
    ]
  },
  {
    id: "gram-07",
    category: "grammar",
    titleZh: "格概述：德语的四个格",
    titleDe: "Die vier Fälle im Deutschen",
    titleEn: "The Four Cases in German",
    description: "概览德语四格系统（主格、宾格、与格、属格）",
    level: "A1",
    order: 7,
    estimatedMinutes: 10,
    prerequisiteIds: ["gram-01", "gram-06"],
    sections: [
      {
        type: "text",
        heading: "什么是\"格\"（Kasus）？",
        content: "格是名词在句子中扮演不同角色时的变化形式。英语中已经基本消失了格的变化（只有 I/me, he/him, she/her 等代词保留了格），但德语中格的变化非常活跃。\n\n简单理解：格告诉你这个名词在句子中是\"谁在做什么\"（主格）、\"被谁做了什么\"（宾格）、\"给谁\"（与格）还是\"谁的\"（属格）。"
      },
      {
        type: "table",
        heading: "四格概览",
        content: "",
        tableHeaders: ["格", "德语名", "功能", "英语近似", "例句"],
        tableRows: [
          ["第一格（主格）", "Nominativ", "主语（做动作的）", "I, he, she", "Der Mann liest."],
          ["第二格（属格）", "Genitiv", "表示所属", "'s / of", "Das Buch des Mannes."],
          ["第三格（与格）", "Dativ", "间接宾语（给谁）", "to/for + 名词", "Ich gebe dem Mann das Buch."],
          ["第四格（宾格）", "Akkusativ", "直接宾语（被作用）", "直接宾语", "Ich sehe den Mann."],
        ]
      },
      {
        type: "text",
        heading: "对初学者最重要的是什么？",
        content: "初学阶段，你主要需要掌握：\n1. 主格（Nominativ）——你已经在用了\n2. 宾格（Akkusativ）——最常见的宾语格\n\n与格（Dativ）和属格（Genitiv）会在 A2-B1 阶段逐渐学习。不要一次试图掌握所有格！"
      },
      {
        type: "tip",
        heading: "英语对比",
        content: "英语的格变化几乎只在代词中保留：\nI (主格) → me (宾格)\nHe (主格) → him (与/宾格)\n\n德语的格变化影响所有名词、冠词和形容词。这是德语语法最大的挑战，也是与英语最大的区别之一。好消息是，变化有规律可循。"
      }
    ],
    exercises: [
      {
        id: "gram-07-e1",
        type: "multiple-choice",
        questionZh: "主格（Nominativ）在句子中扮演什么角色？",
        options: ["直接宾语", "间接宾语", "主语", "表示所属"],
        correctAnswer: "主语",
        explanation: "主格（Nominativ）标记句子的主语——做动作的人或物。"
      },
      {
        id: "gram-07-e2",
        type: "multiple-choice",
        questionZh: "英语中哪个例子保留了格的变化？",
        options: ["the book / a book", "I / me", "big / bigger", "go / went"],
        correctAnswer: "I / me",
        explanation: "I 是主格，me 是宾格。这是英语中少数保留了格变化的例子。"
      },
      {
        id: "gram-07-e3",
        type: "multiple-choice",
        questionZh: "初学者首先需要掌握哪两个格？",
        options: ["属格和与格", "主格和宾格", "宾格和与格", "主格和属格"],
        correctAnswer: "主格和宾格",
        explanation: "主格（做主语）和宾格（做直接宾语）是日常对话中最常用的两个格。"
      }
    ]
  },
  {
    id: "gram-08",
    category: "grammar",
    titleZh: "宾格（Akkusativ）",
    titleDe: "Der Akkusativ",
    titleEn: "The Accusative Case",
    description: "学习德语第四格（宾格）的变化规则和常用动词",
    level: "A1",
    order: 8,
    estimatedMinutes: 10,
    prerequisiteIds: ["gram-07"],
    sections: [
      {
        type: "text",
        heading: "什么时候用宾格？",
        content: "宾格用于句子的直接宾语——动作的直接承受者。\n\nIch sehe den Mann. (I see the man.)\nIch kaufe ein Buch. (I buy a book.)\n\n注意：der Mann 变成了 den Mann，ein 变成了 einen！"
      },
      {
        type: "table",
        heading: "宾格冠词变化",
        content: "",
        tableHeaders: ["性", "主格（N）", "宾格（A）", "变化？"],
        tableRows: [
          ["阳性 der", "der", "den", "der → den ✓"],
          ["阴性 die", "die", "die", "不变"],
          ["中性 das", "das", "das", "不变"],
          ["复数 die", "die", "die", "不变"],
          ["阳性 ein", "ein", "einen", "ein → einen ✓"],
          ["阴性 eine", "eine", "eine", "不变"],
          ["中性 ein", "ein", "ein", "不变"],
        ]
      },
      {
        type: "text",
        heading: "关键规则",
        content: "**只有阳性名词在宾格中发生变化！**der → den，ein → einen。阴性、中性和复数形式不变。\n\n记忆口诀：宾格变化看阳性，其余三个都不变。"
      },
      {
        type: "text",
        heading: "常用接宾格的动词",
        content: "这些动词后面的宾语用宾格：\n\nhaben（有）：Ich habe einen Bruder.\nkaufen（买）：Ich kaufe ein Buch.\ntrinken（喝）：Ich trinke einen Kaffee.\nessen（吃）：Ich esse einen Apfel.\nsehen（看）：Ich sehe den Mann.\nlesen（读）：Ich lese das Buch."
      }
    ],
    exercises: [
      {
        id: "gram-08-e1",
        type: "fill-blank",
        questionZh: "填入正确的冠词（宾格）：",
        questionDe: "Ich sehe ___ Mann. (der)",
        correctAnswer: "den",
        explanation: "阳性 der 在宾格中变为 den。Ich sehe den Mann."
      },
      {
        id: "gram-08-e2",
        type: "fill-blank",
        questionZh: "填入正确的冠词（宾格）：",
        questionDe: "Ich kaufe ___ Buch. (das)",
        correctAnswer: "das",
        explanation: "中性 das 在宾格中不变。Ich kaufe das Buch."
      },
      {
        id: "gram-08-e3",
        type: "multiple-choice",
        questionZh: "宾格中哪种性别的冠词会发生变化？",
        options: ["阴性（die）", "中性（das）", "阳性（der）", "所有都变"],
        correctAnswer: "阳性（der）",
        explanation: "只有阳性名词在宾格中发生变化：der → den, ein → einen。其余不变。"
      }
    ]
  },
  {
    id: "gram-09",
    category: "grammar",
    titleZh: "常用介词",
    titleDe: "Wichtige Präpositionen",
    titleEn: "Common Prepositions",
    description: "学习德语常用介词及其搭配的格",
    level: "A2",
    order: 9,
    estimatedMinutes: 12,
    prerequisiteIds: ["gram-08"],
    sections: [
      {
        type: "text",
        heading: "介词决定后面的格",
        content: "德语介词的一个重要特点：每个介词\"要求\"后面的名词用特定的格。这与英语不同——英语介词后面不需要变格。"
      },
      {
        type: "table",
        heading: "总是接宾格的介词",
        content: "",
        tableHeaders: ["介词", "含义", "例句"],
        tableRows: [
          ["durch", "穿过/through", "Wir gehen durch den Park."],
          ["für", "为了/for", "Das Geschenk ist für dich."],
          ["gegen", "对着/against", "Wir spielen gegen den FC Bayern."],
          ["ohne", "没有/without", "Ich trinke Kaffee ohne Zucker."],
          ["um", "围绕/around, at(time)", "Der Unterricht beginnt um acht Uhr."],
        ]
      },
      {
        type: "table",
        heading: "总是接与格的介词",
        content: "",
        tableHeaders: ["介词", "含义", "例句"],
        tableRows: [
          ["aus", "从...来/from", "Ich komme aus Deutschland."],
          ["bei", "在...那里/at, near", "Ich kaufe beim Bäcker ein."],
          ["mit", "和/with", "Ich fahre mit dem Bus."],
          ["nach", "去/after, to", "Nach der Arbeit gehe ich nach Hause."],
          ["seit", "自从/since", "Ich lerne seit einem Jahr Deutsch."],
          ["von", "从.../from, of", "Ich komme von der Arbeit."],
          ["zu", "到.../to", "Ich gehe zur (zu der) Arbeit."],
        ]
      },
      {
        type: "table",
        heading: "双向介词（Wechselpräpositionen）",
        content: "以下介词可以接宾格（表示方向/移动）或与格（表示位置）：\n",
        tableHeaders: ["介词", "含义", "宾格例句（方向）", "与格例句（位置）"],
        tableRows: [
          ["in", "in/into", "Ich gehe in den Park. (走进去)", "Ich bin im Park. (在公园里)"],
          ["an", "on/at/to", "Ich gehe an den See. (走到湖边)", "Ich bin am See. (在湖边)"],
          ["auf", "on/onto", "Ich lege das Buch auf den Tisch. (放上桌子)", "Das Buch ist auf dem Tisch. (在桌上)"],
          ["unter", "under/under", "Die Katze läuft unter den Tisch. (跑到桌下)", "Die Katze ist unter dem Tisch. (在桌下)"],
        ]
      },
      {
        type: "tip",
        heading: "记忆技巧",
        content: "接宾格的介词可以用口诀记忆：**durch, für, gegen, ohne, um** — \"dogfu\" (通过、为了、对抗、没有、围绕)。\n双向介词的判断标准：有方向变化（Wohin?）→ 宾格；静止位置（Wo?）→ 与格。"
      }
    ],
    exercises: [
      {
        id: "gram-09-e1",
        type: "multiple-choice",
        questionZh: "介词 mit（和）后面接什么格？",
        options: ["主格", "宾格", "与格", "属格"],
        correctAnswer: "与格",
        explanation: "mit 总是接与格：Ich fahre mit dem Bus. (dem 是 der Bus 的与格形式)"
      },
      {
        id: "gram-09-e2",
        type: "multiple-choice",
        questionZh: "\"Ich gehe in ___ Park.\" 这里应该用什么格？",
        options: ["主格（der Park）", "宾格（den Park）", "与格（dem Park）", "取决于语境"],
        correctAnswer: "宾格（den Park）",
        explanation: "\"gehen in\" 表示方向移动（Wohin?），所以用宾格：in den Park。"
      },
      {
        id: "gram-09-e3",
        type: "multiple-choice",
        questionZh: "介词 für（为了）后面接什么格？",
        options: ["主格", "宾格", "与格", "属格"],
        correctAnswer: "宾格",
        explanation: "für 总是接宾格：Das Geschenk ist für dich. (dich 是 du 的宾格形式)"
      }
    ]
  },
  {
    id: "gram-10",
    category: "grammar",
    titleZh: "可分动词",
    titleDe: "Trennbare Verben",
    titleEn: "Separable Verbs",
    description: "学习德语可分动词的构成和在句子中的使用方法",
    level: "A2",
    order: 10,
    estimatedMinutes: 8,
    prerequisiteIds: ["gram-06"],
    sections: [
      {
        type: "text",
        heading: "什么是可分动词？",
        content: "德语有许多\"可分动词\"，由前缀 + 动词组成。在现在时中，前缀和动词\"分离\"——变位的动词在第二位，前缀跑到句末。\n\naufstehen（起床）= auf + stehen\n→ Ich stehe um 7 Uhr **auf**."
      },
      {
        type: "table",
        heading: "常见可分动词",
        content: "",
        tableHeaders: ["动词", "前缀+词根", "含义", "例句"],
        tableRows: [
          ["aufstehen", "auf + stehen", "起床/get up", "Ich stehe um 7 Uhr auf."],
          ["einkaufen", "ein + kaufen", "购物/shop", "Wir gehen einkaufen."],
          ["anrufen", "an + rufen", "打电话/call", "Ich rufe meine Mutter an."],
          ["ausgehen", "aus + gehen", "外出/go out", "Wir gehen heute Abend aus."],
          ["mitkommen", "mit + kommen", "一起来/come along", "Kommst du mit?"],
          ["zurückkommen", "zurück + kommen", "回来/return", "Er kommt morgen zurück."],
        ]
      },
      {
        type: "text",
        heading: "句子结构",
        content: "可分动词在句子中的结构：\n\n主语 + 变位动词(词根) + ... + 前缀(句末)\n\nIch | rufe | dich morgen | an.\nI    | call | you tomorrow | (prefix)\n\n与情态动词结合时，整个可分动词不变地放在句末：\nIch | muss | morgen | aufstehen.\nI    | must | tomorrow | get up"
      },
      {
        type: "comparison",
        heading: "德语 vs 英语",
        content: "英语也有类似的\"动词短语\"（phrasal verbs）：\nget up, wake up, call up, go out\n\n但英语中 get up 总是写在一起：\"I get up at 7.\"\n德语中 auf 和 stehen 分开：\"Ich stehe um 7 Uhr auf.\"\n\n两者本质相同，只是德语把前缀放到了句末。"
      }
    ],
    exercises: [
      {
        id: "gram-10-e1",
        type: "multiple-choice",
        questionZh: "\"Ich ___ um 7 Uhr ___.\" (aufstehen) 正确填入的是？",
        options: ["stehe...aufstehen", "stehe...auf", "aufstehe...auf", "auf...stehe"],
        correctAnswer: "stehe...auf",
        explanation: "可分动词 aufstehen：stehe（变位词根，第二位）... auf（前缀，句末）。Ich stehe um 7 Uhr auf."
      },
      {
        id: "gram-10-e2",
        type: "multiple-choice",
        questionZh: "einkaufen（购物）的前缀是？",
        options: ["kaufen", "ein", "einkaufen", "aus"],
        correctAnswer: "ein",
        explanation: "einkaufen = ein + kaufen。ein 是前缀，kaufen 是词根。Ich kaufe im Supermarkt ein."
      },
      {
        id: "gram-10-e3",
        type: "multiple-choice",
        questionZh: "使用情态动词时，可分动词放在哪里？",
        options: ["放在情态动词前面", "以完整形式放在句末", "前缀和词根分开", "代替情态动词"],
        correctAnswer: "以完整形式放在句末",
        explanation: "与情态动词结合时，可分动词不被分离，完整放在句末：Ich muss um 7 Uhr aufstehen. (不是 auf...stehen)"
      }
    ]
  }
];
