import { QuickLesson } from "@/lib/types";

export const expressionsQuickCards: QuickLesson[] = [
  {
    lessonId: "expr-01",
    cards: [
      {
        id: "expr-01-qc1",
        heading: "常用问候语",
        corePoint: "正式用 Guten Morgen/Tag/Abend，非正式用 Hallo。巴伐利亚说 Grüß Gott，北部说 Moin。",
        examples: [
          { german: "Guten Morgen! / Guten Tag!", chinese: "早上好！/ 您好！（正式）" },
          { german: "Hallo!", chinese: "你好！（非正式）" },
        ],
      },
      {
        id: "expr-01-qc2",
        heading: "常用告别语",
        corePoint: "正式说 Auf Wiedersehen，非正式说 Tschüss。Bis später = 回头见，Bis morgen = 明天见。",
        examples: [
          { german: "Auf Wiedersehen! / Tschüss!", chinese: "再见！（正式/非正式）" },
          { german: "Bis später! / Bis morgen!", chinese: "回头见！/ 明天见！" },
        ],
        tip: "走进小店时要说 Guten Tag，离开时说 Auf Wiedersehen 或 Tschüss，不打招呼被认为不礼貌。",
      },
    ],
  },
  {
    lessonId: "expr-02",
    cards: [
      {
        id: "expr-02-qc1",
        heading: "自我介绍基本句型",
        corePoint: "用 Ich heiße/Mein Name ist 说名字，用 Ich komme aus 说来历，用 Ich bin 说职业。",
        examples: [
          { german: "Ich heiße... / Ich komme aus China.", chinese: "我叫... / 我来自中国。" },
          { german: "Ich bin Student/Studentin.", chinese: "我是学生（男/女）。" },
        ],
      },
      {
        id: "expr-02-qc2",
        heading: "询问对方信息",
        corePoint: "正式用 Sie（Wie heißen Sie?），非正式用 du（Wie heißt du?）。不确定时先用 Sie。",
        examples: [
          { german: "Wie heißen Sie? / Wie heißt du?", chinese: "您叫什么？/ 你叫什么？" },
          { german: "Woher kommen Sie?", chinese: "您从哪里来？" },
        ],
        tip: "德语职业分性别：Student（男学生），Studentin（女学生）。职业前不加冠词。",
      },
    ],
  },
  {
    lessonId: "expr-03",
    cards: [
      {
        id: "expr-03-qc1",
        heading: "基础数字 0-20",
        corePoint: "0 null, 1 eins, 2 zwei, 3 drei, 4 vier, 5 fünf, 6 sechs, 7 sieben, 8 acht, 9 neun, 10 zehn, 11 elf, 12 zwölf, 13-19 数字+zehn, 20 zwanzig。",
        examples: [
          { german: "eins, zwei, drei, vier, fünf", chinese: "1, 2, 3, 4, 5" },
          { german: "sechs, sieben, acht, neun, zehn", chinese: "6, 7, 8, 9, 10" },
        ],
      },
      {
        id: "expr-03-qc2",
        heading: "21-99：个位 + und + 十位",
        corePoint: "德语先说个位再说十位，与英语相反！21 = einundzwanzig (ein+und+zwanzig)，99 = neunundneunzig。",
        examples: [
          { german: "21 = einundzwanzig", chinese: "one-and-twenty" },
          { german: "47 = siebenundvierzig", chinese: "seven-and-forty" },
        ],
        tip: "halb acht = 7:30（不是 8:30！）——\"到八点过半了\"。",
      },
    ],
  },
  {
    lessonId: "expr-04",
    cards: [
      {
        id: "expr-04-qc1",
        heading: "餐厅点餐用语",
        corePoint: "礼貌表达用 Ich hätte gern... 或 Ich möchte...。点菜说 Ich nehme...，买单说 Die Rechnung, bitte。",
        examples: [
          { german: "Ich hätte gern einen Kaffee.", chinese: "请给我一杯咖啡。（最礼貌）" },
          { german: "Die Rechnung, bitte.", chinese: "请买单。" },
        ],
      },
      {
        id: "expr-04-qc2",
        heading: "小费与餐桌文化",
        corePoint: "小费通常 5-10%，说 \"Stimmt so\" 表示不用找零（差额即小费）。需主动招呼服务员（举手或说 Entschuldigung）。",
        examples: [
          { german: "Stimmt so.", chinese: "不用找了（小费包含）" },
          { german: "Entschuldigung!", chinese: "打扰了！（招呼服务员）" },
        ],
        tip: "德国餐厅水不是免费提供的，需单独购买矿泉水（带气的更常见）。",
      },
    ],
  },
  {
    lessonId: "expr-05",
    cards: [
      {
        id: "expr-05-qc1",
        heading: "问路基本表达",
        corePoint: "先说 Entschuldigung 打扰了，然后问 Wo ist...? 或 Wie komme ich zum...?",
        examples: [
          { german: "Entschuldigung, wo ist der Bahnhof?", chinese: "请问火车站在哪里？" },
          { german: "Wie komme ich zum Bahnhof?", chinese: "我怎么去火车站？" },
        ],
      },
      {
        id: "expr-05-qc2",
        heading: "方向与位置",
        corePoint: "geradeaus = 直走，links/rechts = 左/右，gegenüber = 对面，neben = 旁边。",
        examples: [
          { german: "Gehen Sie geradeaus.", chinese: "请直走。" },
          { german: "Biegen Sie links/rechts ab.", chinese: "请左转/右转。" },
          { german: "Es ist gegenüber dem Bahnhof.", chinese: "在火车站对面。" },
        ],
        tip: "德国人通常很乐意帮忙指路。可以问 \"Sprechen Sie Englisch?\"（您说英语吗？）",
      },
    ],
  },
  {
    lessonId: "expr-06",
    cards: [
      {
        id: "expr-06-qc1",
        heading: "购物常用语",
        corePoint: "问价说 Was kostet das?，找东西说 Ich suche...，要买说 Ich nehme das。刷卡问 Kann ich mit Karte zahlen?",
        examples: [
          { german: "Was kostet das?", chinese: "这个多少钱？" },
          { german: "Kann ich mit Karte zahlen?", chinese: "我可以刷卡吗？" },
        ],
      },
      {
        id: "expr-06-qc2",
        heading: "德国购物文化",
        corePoint: "商品标价已含税（19%增值税），看到的价格就是最终价格。超市需自带购物袋。",
        examples: [
          { german: "Ich zahle bar.", chinese: "我付现金。" },
          { german: "Haben Sie das in Größe...?", chinese: "这个有...码的吗？" },
        ],
        tip: "德国很多小店只收现金，随身带些现金总是好的。",
      },
    ],
  },
  {
    lessonId: "expr-07",
    cards: [
      {
        id: "expr-07-qc1",
        heading: "时间表达",
        corePoint: "halb acht = 7:30（不是8:30！），Viertel nach = 过一刻，Viertel vor = 差一刻。",
        examples: [
          { german: "Es ist acht Uhr.", chinese: "8:00" },
          { german: "Es ist halb acht. = 7:30", chinese: "注意！不是 8:30" },
          { german: "Viertel nach acht = 8:15", chinese: "八点过一刻" },
        ],
      },
      {
        id: "expr-07-qc2",
        heading: "约定时间",
        corePoint: "用 treffen 约见面，用 passen/geht 确认时间。",
        examples: [
          { german: "Wann treffen wir uns?", chinese: "我们什么时候见面？" },
          { german: "Passt dir um 15 Uhr?", chinese: "下午3点你可以吗？" },
          { german: "Geht es am Montag?", chinese: "周一可以吗？" },
        ],
      },
    ],
  },
  {
    lessonId: "expr-08",
    cards: [
      {
        id: "expr-08-qc1",
        heading: "就医常用语",
        corePoint: "表达症状：Ich habe Kopfschmerzen（头疼），Ich habe Fieber（发烧），Mein ... tut weh（我...疼）。",
        examples: [
          { german: "Ich brauche einen Arzt.", chinese: "我需要看医生。" },
          { german: "Ich habe Kopfschmerzen.", chinese: "我头疼。" },
          { german: "Mein Bauch tut weh.", chinese: "我肚子疼。" },
        ],
      },
      {
        id: "expr-08-qc2",
        heading: "德国医疗须知",
        corePoint: "带医保卡（Versichertenkarte），先去全科医生（Hausarzt），需要时转诊专科。急救电话 112，警察 110。",
        examples: [
          { german: "die Versichertenkarte", chinese: "医保卡" },
          { german: "der Hausarzt / der Facharzt", chinese: "全科医生 / 专科医生" },
        ],
        tip: "112 是全欧洲统一的急救电话。",
      },
    ],
  },
  {
    lessonId: "expr-09",
    cards: [
      {
        id: "expr-09-qc1",
        heading: "酒店入住用语",
        corePoint: "说有预订 Ich habe eine Reservierung，要房间 Ich hätte gern ein Einzelzimmer/Doppelzimmer，问价格 Was kostet das Zimmer pro Nacht?",
        examples: [
          { german: "Ich habe eine Reservierung.", chinese: "我有预订。" },
          { german: "Ich möchte auschecken.", chinese: "我想退房。" },
        ],
      },
      {
        id: "expr-09-qc2",
        heading: "酒店相关词汇",
        corePoint: "der Schlüssel = 钥匙，die Rezeption = 前台，der Aufzug = 电梯，das Frühstück = 早餐。",
        examples: [
          { german: "der Schlüssel, die Rezeption", chinese: "钥匙、前台" },
          { german: "Können Sie mich um 7 Uhr wecken?", chinese: "您能7点叫醒我吗？" },
        ],
        tip: "退房时间通常中午12点前。德国酒店通常含早餐，不需要给小费。",
      },
    ],
  },
  {
    lessonId: "expr-10",
    cards: [
      {
        id: "expr-10-qc1",
        heading: "天气表达",
        corePoint: "Es ist warm/kalt/heiß（暖/冷/热），Es regnet/schneit（下雨/雪），Die Sonne scheint（出太阳）。",
        examples: [
          { german: "Wie ist das Wetter?", chinese: "天气怎么样？" },
          { german: "Es regnet. / Es schneit.", chinese: "下雨了。/ 下雪了。" },
          { german: "Es ist bewölkt.", chinese: "多云。" },
        ],
      },
      {
        id: "expr-10-qc2",
        heading: "四季与温度",
        corePoint: "四季：Frühling（春）、Sommer（夏）、Herbst（秋）、Winter（冬）。德国用摄氏度。",
        examples: [
          { german: "der Frühling (März—Mai)", chinese: "春天" },
          { german: "Es sind 25 Grad.", chinese: "气温25度（摄氏）" },
        ],
        tip: "谈论天气是德国人最常用的小话题：\"Schönes Wetter heute, oder?\"（今天天气不错，对吧？）",
      },
    ],
  },
  {
    lessonId: "expr-11",
    cards: [
      {
        id: "expr-11-qc1",
        heading: "谈论爱好",
        corePoint: "用 动词 + gern 表达喜欢做某事：Ich spiele gern Fußball. Ich lese gern Bücher. Ich höre gern Musik.",
        examples: [
          { german: "Ich spiele gern Fußball.", chinese: "我喜欢踢足球。" },
          { german: "Ich lese gern Bücher.", chinese: "我喜欢读书。" },
          { german: "Ich koche gern.", chinese: "我喜欢做饭。" },
        ],
      },
      {
        id: "expr-11-qc2",
        heading: "gern 的三级别",
        corePoint: "gern（喜欢）→ lieber（更喜欢）→ am liebsten（最喜欢）。",
        examples: [
          { german: "Ich trinke gern Kaffee.", chinese: "我喜欢喝咖啡。" },
          { german: "Ich trinke lieber Tee.", chinese: "我更喜欢喝茶。" },
          { german: "Ich trinke am liebsten Wasser.", chinese: "我最喜欢喝水。" },
        ],
        tip: "德国人重视 Work-Life-Balance，户外活动（徒步 Wandern、骑车 Radfahren）很受欢迎。",
      },
    ],
  },
  {
    lessonId: "expr-12",
    cards: [
      {
        id: "expr-12-qc1",
        heading: "打电话常用语",
        corePoint: "自报姓名 Hier spricht...，找人 Kann ich bitte mit... sprechen?，留言 Möchten Sie eine Nachricht hinterlassen?",
        examples: [
          { german: "Hier spricht...", chinese: "我是..." },
          { german: "Kann ich bitte mit Herrn Schmidt sprechen?", chinese: "请找施密特先生接电话。" },
        ],
      },
      {
        id: "expr-12-qc2",
        heading: "德国电话礼仪",
        corePoint: "接电话先报姓名（\"Schmidt, guten Tag!\"），结束说 Auf Wiederhören（不是 Wiedersehen，因为电话里\"听\"不是\"看\"）。",
        examples: [
          { german: "Auf Wiederhören!", chinese: "再见！（电话用语，\"再听到\"）" },
          { german: "der Anrufbeantworter", chinese: "电话答录机" },
        ],
        tip: "Hören = 听 → Wiederhören = 再次听到（电话再见）；Sehen = 看 → Wiedersehen = 再次看到（面对面再见）。",
      },
    ],
  },
];
