import { QuickLesson } from "@/lib/types";

export const grammarQuickCards: QuickLesson[] = [
  {
    lessonId: "gram-01",
    cards: [
      {
        id: "gram-01-qc1",
        heading: "名词的三种\"性别\"",
        corePoint: "德语每个名词都有语法性：阳性 der、阴性 die、中性 das。这不代表真实性别——女孩 das Mädchen 是中性！",
        examples: [
          { german: "der Tisch (桌子), der Mond (月亮)", chinese: "阳性 — der" },
          { german: "die Sonne (太阳), die Blume (花)", chinese: "阴性 — die" },
          { german: "das Mädchen (女孩), das Buch (书)", chinese: "中性 — das" },
        ],
      },
      {
        id: "gram-01-qc2",
        heading: "阳性 (der) 规律",
        corePoint: "以 -er（指人）、-ismus 结尾，星期/月份/季节，方位/天气的名词多为阳性。",
        examples: [
          { german: "der Lehrer, der Fahrer", chinese: "以 -er 结尾（指人/职业）" },
          { german: "der Montag, der Januar, der Winter", chinese: "星期、月份、季节" },
        ],
      },
      {
        id: "gram-01-qc3",
        heading: "阴性 (die) 规律",
        corePoint: "以 -e（多音节）、-ung、-heit/-keit、-tion/-sion、-ik 结尾的名词多为阴性。",
        examples: [
          { german: "die Wohnung, die Ausbildung", chinese: "以 -ung 结尾" },
          { german: "die Freiheit, die Gesundheit", chinese: "以 -heit/-keit 结尾" },
          { german: "die Information, die Diskussion", chinese: "以 -tion/-sion 结尾" },
        ],
      },
      {
        id: "gram-01-qc4",
        heading: "中性 (das) 规律",
        corePoint: "以 -chen/-lein（指小词）、-ment 结尾，以 Ge- 开头，绝大多数金属都是中性。",
        examples: [
          { german: "das Mädchen, das Brötchen", chinese: "以 -chen 结尾（指小词）" },
          { german: "das Gebäude, das Gesicht", chinese: "以 Ge- 开头" },
          { german: "das Gold, das Silber", chinese: "绝大多数金属" },
        ],
        tip: "学每个新名词时连同冠词一起记——不是记 \"Tisch\"，而是记 \"der Tisch\"。",
      },
    ],
  },
  {
    lessonId: "gram-02",
    cards: [
      {
        id: "gram-02-qc1",
        heading: "五种复数模式",
        corePoint: "加 -e（大多数阳性/中性）、加 -er（常伴随变元音）、加 -n/-en（大多数阴性）、加 -s（外来词）、零变化（以 -er/-el/-en 结尾）。",
        examples: [
          { german: "der Hund → die Hunde", chinese: "加 -e" },
          { german: "das Kind → die Kinder", chinese: "加 -er" },
          { german: "die Frau → die Frauen", chinese: "加 -en" },
        ],
      },
      {
        id: "gram-02-qc2",
        heading: "复数与变元音",
        corePoint: "单音节名词且元音为 a/o/u 时，加 -e 或 -er 变复数常伴随变元音：a→ä, o→ö, u→ü。",
        examples: [
          { german: "der Apfel → die Äpfel", chinese: "苹果（a→ä）" },
          { german: "das Buch → die Bücher", chinese: "书（u→ü）" },
          { german: "der Vater → die Väter", chinese: "父亲（a→ä）" },
        ],
        tip: "所有复数名词的定冠词都是 die！学名词时连同复数一起记：der Apfel, die Äpfel。",
      },
    ],
  },
  {
    lessonId: "gram-03",
    cards: [
      {
        id: "gram-03-qc1",
        heading: "人称代词",
        corePoint: "ich（我）、du（你，非正式）、er/sie/es（他/她/它）、wir（我们）、ihr（你们）、sie（他们）、Sie（您，正式，永远大写）。",
        examples: [
          { german: "ich — 永远小写！", chinese: "我" },
          { german: "du / ihr / Sie", chinese: "非正式单数你 / 非正式复数你们 / 正式您" },
        ],
      },
      {
        id: "gram-03-qc2",
        heading: "sein（是）的变位",
        corePoint: "ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind。sein 是最不规则的动词，必须硬记。",
        examples: [
          { german: "Ich bin Student.", chinese: "我是学生。" },
          { german: "Er ist Lehrer.", chinese: "他是老师。" },
          { german: "Wir sind müde.", chinese: "我们累了。" },
        ],
        tip: "德语有三种\"你\"：du（非正式单数）、ihr（非正式复数）、Sie（正式，永远大写）。",
      },
    ],
  },
  {
    lessonId: "gram-04",
    cards: [
      {
        id: "gram-04-qc1",
        heading: "规则动词变位词尾",
        corePoint: "ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en。以 machen 为例：ich mache, du machst, er macht...",
        examples: [
          { german: "ich mache, du machst, er macht", chinese: "我做，你做，他做" },
          { german: "wir machen, ihr macht, sie machen", chinese: "我们做，你们做，他们做" },
        ],
      },
      {
        id: "gram-04-qc2",
        heading: "换元音动词（e → i/ie）",
        corePoint: "部分动词在 du 和 er/sie/es 形式中词干元音变化：sprechen → sprichst/spricht, essen → isst, lesen → liest。",
        examples: [
          { german: "sprechen → du sprichst, er spricht", chinese: "说（e→i）" },
          { german: "lesen → du liest, er liest", chinese: "读（e→ie）" },
          { german: "essen → du isst, er isst", chinese: "吃（e→i）" },
        ],
        tip: "词干以 -d 或 -t 结尾时加额外 -e- 便于发音：arbeiten → du arbeitest。",
      },
    ],
  },
  {
    lessonId: "gram-05",
    cards: [
      {
        id: "gram-05-qc1",
        heading: "haben（有）变位",
        corePoint: "ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben。",
        examples: [
          { german: "Ich habe eine Frage.", chinese: "我有一个问题。" },
          { german: "Er hat keine Zeit.", chinese: "他没有时间。" },
        ],
      },
      {
        id: "gram-05-qc2",
        heading: "情态动词的用法",
        corePoint: "变位的情态动词在第二位，动词原形（不定式）放在句末！这就是德语的\"框架结构\"。",
        examples: [
          { german: "Ich kann Deutsch sprechen.", chinese: "我会说德语。（sprechen 在句末）" },
          { german: "Du musst jetzt gehen.", chinese: "你现在必须走。（gehen 在句末）" },
        ],
      },
      {
        id: "gram-05-qc3",
        heading: "五个常用情态动词",
        corePoint: "können（能够）、müssen（必须）、wollen（想要）、dürfen（允许）、sollen（应该）。ich 和 er/sie/es 形式相同。",
        examples: [
          { german: "ich kann / ich muss / ich will", chinese: "我能 / 我必须 / 我想要" },
          { german: "ich darf / ich soll", chinese: "我被允许 / 我应该" },
        ],
        tip: "英语：I can speak German. 德语：Ich kann Deutsch sprechen.（原形动词在句末！）",
      },
    ],
  },
  {
    lessonId: "gram-06",
    cards: [
      {
        id: "gram-06-qc1",
        heading: "V2 规则：动词第二位",
        corePoint: "变位动词永远在陈述句的第二个位置。不管第一位放什么，动词都在第二位。",
        examples: [
          { german: "Ich lerne Deutsch.", chinese: "我学德语。" },
          { german: "Heute lerne ich Deutsch.", chinese: "今天我学德语。（ich 和 Deutsch 倒装）" },
          { german: "Deutsch lerne ich heute.", chinese: "德语我今天学。" },
        ],
      },
      {
        id: "gram-06-qc2",
        heading: "疑问句语序",
        corePoint: "W 疑问句：疑问词 + 动词 + 主语。Ja/Nein 疑问句：动词开头。",
        examples: [
          { german: "Was machst du heute?", chinese: "你今天做什么？" },
          { german: "Wohnst du in Berlin?", chinese: "你住在柏林吗？（动词开头）" },
        ],
        tip: "时间/地点提到句首时，英语保持主语-动词顺序，德语则动词-主语倒装。",
      },
    ],
  },
  {
    lessonId: "gram-07",
    cards: [
      {
        id: "gram-07-qc1",
        heading: "德语的四个格",
        corePoint: "主格（Nominativ）= 主语，宾格（Akkusativ）= 直接宾语，与格（Dativ）= 间接宾语，属格（Genitiv）= 所属。",
        examples: [
          { german: "Der Mann liest. (主格)", chinese: "那个男人在读书。" },
          { german: "Ich sehe den Mann. (宾格)", chinese: "我看到那个男人。" },
          { german: "Ich gebe dem Mann das Buch. (与格)", chinese: "我把书给那个男人。" },
        ],
      },
      {
        id: "gram-07-qc2",
        heading: "初学者的重点",
        corePoint: "初学阶段主要掌握主格（已在用）和宾格（最常见的宾语格）。与格和属格在 A2-B1 阶段逐步学习。",
        examples: [
          { german: "英语：I → me (主格→宾格)", chinese: "英语只在代词保留格变化" },
          { german: "德语：der → den → dem → des", chinese: "德语冠词全面保留格变化" },
        ],
        tip: "不要一次试图掌握所有格！先掌握主格和宾格。",
      },
    ],
  },
  {
    lessonId: "gram-08",
    cards: [
      {
        id: "gram-08-qc1",
        heading: "宾格冠词变化",
        corePoint: "只有阳性名词在宾格中变化！der → den, ein → einen。阴性、中性和复数不变。",
        examples: [
          { german: "der Mann → den Mann", chinese: "阳性变化！" },
          { german: "die Frau → die Frau", chinese: "阴性不变" },
          { german: "das Buch → das Buch", chinese: "中性不变" },
        ],
      },
      {
        id: "gram-08-qc2",
        heading: "常用接宾格的动词",
        corePoint: "haben（有）、kaufen（买）、trinken（喝）、essen（吃）、sehen（看）、lesen（读）——后面接宾格。",
        examples: [
          { german: "Ich sehe den Mann.", chinese: "我看到那个男人。" },
          { german: "Ich kaufe ein Buch.", chinese: "我买一本书。" },
          { german: "Ich habe einen Bruder.", chinese: "我有一个兄弟。" },
        ],
        tip: "记忆口诀：宾格变化看阳性，其余三个都不变。",
      },
    ],
  },
  {
    lessonId: "gram-09",
    cards: [
      {
        id: "gram-09-qc1",
        heading: "接宾格的介词",
        corePoint: "durch（穿过）、für（为了）、gegen（对抗）、ohne（没有）、um（围绕/在...时间）。口诀：dogfu。",
        examples: [
          { german: "Das Geschenk ist für dich.", chinese: "这个礼物是给你的。" },
          { german: "Der Unterricht beginnt um acht Uhr.", chinese: "课程八点开始。" },
        ],
      },
      {
        id: "gram-09-qc2",
        heading: "接与格的介词",
        corePoint: "aus（从）、bei（在...附近）、mit（和）、nach（去/在...之后）、seit（自从）、von（从）、zu（到）。",
        examples: [
          { german: "Ich komme aus Deutschland.", chinese: "我来自德国。" },
          { german: "Ich fahre mit dem Bus.", chinese: "我坐公交车。（dem 是与格）" },
        ],
      },
      {
        id: "gram-09-qc3",
        heading: "双向介词",
        corePoint: "in, an, auf, unter 等表示方向（Wohin?）时接宾格，表示位置（Wo?）时接与格。",
        examples: [
          { german: "Ich gehe in den Park. (方向→宾格)", chinese: "我走进公园。" },
          { german: "Ich bin im (in dem) Park. (位置→与格)", chinese: "我在公园里。" },
        ],
        tip: "判断标准：有方向变化（Wohin?）→ 宾格；静止位置（Wo?）→ 与格。",
      },
    ],
  },
  {
    lessonId: "gram-10",
    cards: [
      {
        id: "gram-10-qc1",
        heading: "什么是可分动词？",
        corePoint: "可分动词 = 前缀 + 动词。现在时中前缀和动词分离：变位动词在第二位，前缀跑到句末。",
        examples: [
          { german: "aufstehen → Ich stehe um 7 Uhr auf.", chinese: "起床：stehe(第二位)...auf(句末)" },
          { german: "anrufen → Ich rufe dich morgen an.", chinese: "打电话：rufe...an" },
        ],
      },
      {
        id: "gram-10-qc2",
        heading: "常见可分动词",
        corePoint: "aufstehen（起床）、einkaufen（购物）、anrufen（打电话）、ausgehen（外出）、mitkommen（一起来）。",
        examples: [
          { german: "aufstehen = auf + stehen", chinese: "起床" },
          { german: "einkaufen = ein + kaufen", chinese: "购物" },
          { german: "ausgehen = aus + gehen", chinese: "外出" },
        ],
        tip: "与情态动词结合时，可分动词不被分离，完整放在句末：Ich muss aufstehen.",
      },
    ],
  },
  {
    lessonId: "gram-11",
    cards: [
      {
        id: "gram-11-qc1",
        heading: "与格冠词变化",
        corePoint: "阳性和中性：dem；阴性：der（注意！和阳性主格同形）；复数加 -n：die Kinder → den Kindern。",
        examples: [
          { german: "der Mann → dem Mann", chinese: "阳性→dem" },
          { german: "die Frau → der Frau", chinese: "阴性→der（注意！）" },
          { german: "das Kind → dem Kind", chinese: "中性→dem" },
        ],
      },
      {
        id: "gram-11-qc2",
        heading: "常用接与格的动词",
        corePoint: "geben（给）、helfen（帮助）、danken（感谢）、gefallen（使喜欢）、gehören（属于）、zeigen（给...看）。",
        examples: [
          { german: "Ich gebe dir das Buch.", chinese: "我把书给你。（dir 是与格）" },
          { german: "Kannst du mir helfen?", chinese: "你能帮我吗？（mir 是与格）" },
          { german: "Das Essen gefällt mir.", chinese: "我喜欢这个食物。" },
        ],
        tip: "三格记忆口诀：主格做主语，宾格被作用，与格是\"给谁\"。",
      },
    ],
  },
  {
    lessonId: "gram-12",
    cards: [
      {
        id: "gram-12-qc1",
        heading: "完成时的构成",
        corePoint: "完成时 = haben/sein（变位）+ ... + 过去分词（句末）。规则动词：ge + 词干 + t（machen → gemacht）。",
        examples: [
          { german: "Ich habe Deutsch gelernt.", chinese: "我学了德语。" },
          { german: "Ich habe einen Film gesehen.", chinese: "我看了一部电影。" },
        ],
      },
      {
        id: "gram-12-qc2",
        heading: "用 haben 还是 sein？",
        corePoint: "大多数动词用 haben。表示移动/方向变化（gehen, kommen, fahren）和状态变化（aufwachen）的动词用 sein。",
        examples: [
          { german: "Ich bin gegangen. (移动)", chinese: "我走了。（用 sein）" },
          { german: "Ich bin gekommen. (移动)", chinese: "我来了。（用 sein）" },
          { german: "Ich habe gearbeitet. (大多数)", chinese: "我工作了。（用 haben）" },
        ],
        tip: "完成时是口语中最常用的过去时态，相当于英语现在完成时 + 简单过去时。",
      },
    ],
  },
  {
    lessonId: "gram-13",
    cards: [
      {
        id: "gram-13-qc1",
        heading: "sein 和 haben 的过去时",
        corePoint: "sein 过去时：ich war, du warst, er war, wir waren... haben 过去时：ich hatte, du hattest, er hatte, wir hatten...",
        examples: [
          { german: "Ich war müde.", chinese: "我累了。（不用 bin gewesen）" },
          { german: "Ich hatte keine Zeit.", chinese: "我没有时间。（不用 habe gehabt）" },
        ],
      },
      {
        id: "gram-13-qc2",
        heading: "何时用过去时 vs 完成时？",
        corePoint: "口语优先用完成时（Perfekt），书面语优先用过去时（Präteritum）。但 sein 和 haben 在口语中也用过去时。",
        examples: [
          { german: "口语：Ich habe gesehen.", chinese: "我看了。（完成时）" },
          { german: "书面：Ich sah.", chinese: "我看了。（过去时）" },
        ],
        tip: "不规则动词过去时需要逐个记忆：gehen→ging, kommen→kam, sehen→sah, sprechen→sprach。",
      },
    ],
  },
  {
    lessonId: "gram-14",
    cards: [
      {
        id: "gram-14-qc1",
        heading: "形容词词尾变化规则",
        corePoint: "有定冠词（弱变化）：词尾多为 -e 或 -en。无/不定冠词（强变化）：形容词承担冠词功能，词尾更丰富。",
        examples: [
          { german: "der große Mann", chinese: "那个高大的男人（有定冠词 → -e）" },
          { german: "ein großer Mann", chinese: "一个高大的男人（不定冠词 → -er）" },
          { german: "ein großes Haus", chinese: "一栋大房子（中性 → -es）" },
        ],
      },
      {
        id: "gram-14-qc2",
        heading: "简化记忆法",
        corePoint: "与格和复数几乎总是 -en。主格阳性无冠词 -er，主格中性无冠词 -es。",
        examples: [
          { german: "mit dem großen Mann (与格)", chinese: "与格 → 总是 -en" },
          { german: "die großen Männer (复数)", chinese: "复数 → 总是 -en" },
        ],
        tip: "形容词作表语不变：Der Mann ist groß.（这个男人很高。groß 不加词尾）",
      },
    ],
  },
  {
    lessonId: "gram-15",
    cards: [
      {
        id: "gram-15-qc1",
        heading: "从句核心规则：动词放句末",
        corePoint: "德语从句中变位动词放在句末！这是与英语最大的区别之一。",
        examples: [
          { german: "Ich weiß, dass er kommt.", chinese: "我知道他会来。（kommt 在句末）" },
          { german: "Ich bleibe zu Hause, weil es regnet.", chinese: "因为下雨我待在家。（regnet 在句末）" },
        ],
      },
      {
        id: "gram-15-qc2",
        heading: "常用从句连词",
        corePoint: "dass（that）、weil（because）、ob（whether）、wenn（when/if）、obwohl（although）、damit（so that）。",
        examples: [
          { german: "weil — because", chinese: "Ich bleibe zu Hause, weil es regnet." },
          { german: "wenn — when/if", chinese: "Wenn ich Zeit habe, gehe ich ins Kino." },
        ],
        tip: "从句放在主句前面时，主句动词紧跟在从句后面：Weil es regnet, bleibe ich zu Hause.",
      },
    ],
  },
  {
    lessonId: "gram-16",
    cards: [
      {
        id: "gram-16-qc1",
        heading: "虚拟式三大用途",
        corePoint: "1. 礼貌请求（最常用）：Ich hätte gern... 2. 假设：Wenn ich reich wäre... 3. 愿望：Ich wünschte...",
        examples: [
          { german: "Ich hätte gern einen Kaffee.", chinese: "请给我一杯咖啡。（礼貌）" },
          { german: "Könnten Sie mir helfen?", chinese: "您能帮我吗？（比 Können 更礼貌）" },
        ],
      },
      {
        id: "gram-16-qc2",
        heading: "常用虚拟式形式",
        corePoint: "haben→hätte, sein→wäre, können→könnte, müssen→müsste, sollen→sollte, dürfen→dürfte。",
        examples: [
          { german: "Ich wäre gern in Deutschland.", chinese: "我很想在德国。（wäre = sein 虚拟式）" },
          { german: "Ich möchte gern... (mögen 的虚拟式)", chinese: "我想要..." },
        ],
      },
      {
        id: "gram-16-qc3",
        heading: "Wenn 从句（如果...）",
        corePoint: "虚拟式常用于 wenn 从句表达非现实条件：Wenn ich Zeit hätte, würde ich Deutsch lernen.",
        examples: [
          { german: "Wenn ich reich wäre...", chinese: "如果我有钱的话..." },
          { german: "Wenn ich Zeit hätte, würde ich lernen.", chinese: "如果我有时间，我会学习。" },
        ],
        tip: "虚拟式的核心就是\"客气化\"——把直截了当的请求变得委婉。相当于英语的 would/could/should。",
      },
    ],
  },
];
