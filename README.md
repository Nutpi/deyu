# 德语学习 - Deutsch Lernen

一款基于 **Next.js** 构建的德语词汇学习应用，采用 **SM-2 间隔重复算法** 帮助你高效记忆德语单词。支持 CEFR A1-C2 全级别词汇，内置语音朗读、学习打卡、PWA 离线使用等功能。

## 功能特性

### 核心功能

- **间隔重复复习** — 基于 SM-2 算法智能安排复习计划，在最佳时间点巩固记忆
- **分级词汇库** — 覆盖 CEFR A1 到 C2 六个等级，共计 500+ 词汇
- **互动闪卡** — 3D 翻转卡片，点击查看释义和例句
- **语音朗读** — 使用 Web Speech API 朗读德语单词和例句，帮助练习发音
- **学习打卡** — 连续学习天数统计，生成打卡卡片用于分享

### 学习流程

1. **学习新词** — 每次学习 10 个新单词，通过闪卡交互记忆
2. **间隔复习** — 根据记忆曲线，系统自动推送需要复习的单词
3. **词库浏览** — 按级别筛选、搜索单词，查看学习状态
4. **打卡分享** — 生成精美的学习打卡图片，分享到社交平台

### 其他特性

- **PWA 支持** — 可安装到手机桌面，支持离线使用
- **深色模式** — 自适应系统主题，保护眼睛
- **本地存储** — 所有数据存储在浏览器 IndexedDB 中，无需注册登录
- **冠词颜色标记** — der（蓝色）、die（红色）、das（绿色），帮助记忆名词词性
- **响应式设计** — 适配手机和桌面端

## 词汇数据

词汇按照 CEFR（欧洲语言共同参考框架）等级分类：

| 等级 | 说明 | 词汇数量 |
|------|------|----------|
| A1 | 入门 — 日常简单表达 | 116 |
| A2 | 初级 — 基本交流 | 111 |
| B1 | 中级 — 独立使用语言 | 98 |
| B2 | 中高级 — 流畅交流 | 72 |
| C1 | 高级 — 专业学术场景 | 72 |
| C2 | 精通 — 近母语水平 | 56 |

每个词汇条目包含：
- 德语单词及冠词（名词）
- 复数形式（名词）
- 词性（名词/动词/形容词/副词/介词/连词等）
- 中文释义
- 德语例句及中文翻译
- IPA 音标（部分词汇）

## 技术栈

| 技术 | 用途 |
|------|------|
| [Next.js 16](https://nextjs.org/) | React 全栈框架 |
| [React 19](https://react.dev/) | UI 组件库 |
| [TypeScript 5](https://www.typescriptlang.org/) | 类型安全 |
| [Tailwind CSS 4](https://tailwindcss.com/) | 原子化 CSS 框架 |
| IndexedDB | 本地数据持久化 |
| Web Speech API | 语音合成 |
| Service Worker | PWA 离线缓存 |

## 项目结构

```
deyu/
├── public/
│   ├── manifest.json        # PWA 配置
│   ├── sw.js                # Service Worker
│   └── *.svg                # 图标资源
├── src/
│   ├── app/
│   │   ├── layout.tsx       # 根布局（导航栏）
│   │   ├── page.tsx         # 首页（学习概览）
│   │   ├── learn/
│   │   │   └── page.tsx     # 新词学习页
│   │   ├── review/
│   │   │   └── page.tsx     # 复习页（SM-2）
│   │   └── words/
│   │       └── page.tsx     # 词库浏览页
│   ├── components/
│   │   ├── FlashCard.tsx    # 闪卡组件
│   │   ├── Navigation.tsx   # 底部导航
│   │   ├── ShareCard.tsx    # 打卡分享组件
│   │   ├── StreakBoard.tsx  # 连续天数面板
│   │   └── ServiceWorkerRegistrar.tsx
│   ├── lib/
│   │   ├── sm2.ts           # SM-2 间隔重复算法
│   │   ├── db.ts            # IndexedDB 数据库操作
│   │   ├── sessionStorage.ts # 学习会话持久化
│   │   ├── types.ts         # TypeScript 类型定义
│   │   └── useSpeech.ts     # 语音朗读 Hook
│   └── data/
│       ├── vocabulary.ts    # 词汇汇总
│       ├── a1.ts ~ c2.ts    # 各级别词汇数据
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm、yarn、pnpm 或 bun

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/Nutpi/deyu.git
cd deyu

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可使用。

### 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

也可以部署到 [Vercel](https://vercel.com)、Netlify 等平台，支持一键部署。

## SM-2 算法说明

本应用采用 [SuperMemo SM-2](https://www.supermemo.com/zh/archives1990-2015/english/ol/sm2) 间隔重复算法：

- **难度因子（EF）**：初始值 2.5，根据复习表现动态调整（范围 1.3 ~ 3.0）
- **复习间隔**：首次 1 天，第二次 6 天，之后按 `interval × EF` 指数增长
- **评分等级**：0-5 分制
  - 0-2 分：重新学习，间隔重置
  - 3 分：及格，维持当前间隔
  - 4-5 分：优秀，间隔增长
- **复习调度**：根据间隔和难度因子自动计算下次复习时间

## 浏览器兼容性

| 功能 | Chrome | Firefox | Safari | Edge |
|------|--------|---------|--------|------|
| 基础功能 | ✅ | ✅ | ✅ | ✅ |
| 语音朗读 | ✅ | ✅ | ✅ | ✅ |
| PWA 安装 | ✅ | ❌ | ✅ | ✅ |
| 离线使用 | ✅ | ✅ | ✅ | ✅ |

> 语音朗读功能依赖浏览器的 SpeechSynthesis 支持，不同浏览器可用的语音可能有差异。

## 许可证

MIT License

## 致谢

- [SuperMemo](https://www.supermemo.com/) — SM-2 间隔重复算法
- [Next.js](https://nextjs.org/) — React 全栈框架
- [Tailwind CSS](https://tailwindcss.com/) — CSS 框架
