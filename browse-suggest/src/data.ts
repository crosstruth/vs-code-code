import type { Site } from "./types";

export const sites: Site[] = [
  { name: "Kemono", desc: "创作者内容聚合平台", icon: "🎨", cat: "娱乐", url: "https://kemono.cr", pinned: true },
  { name: "JMComic", desc: "在线漫画阅读平台", icon: "📖", cat: "娱乐", url: "https://jmcomic-fb.vip", pinned: true },
  { name: "AGE动漫", desc: "动漫在线观看", icon: "🎬", cat: "娱乐", url: "https://www.agedm.org/lander", pinned: true },
  { name: "GitHub", desc: "全球最大的代码托管平台，开源项目聚集地", icon: "🐙", cat: "开发", url: "https://github.com" },
  { name: "Stack Overflow", desc: "程序员问答社区，解决编程疑难杂症", icon: "📚", cat: "开发", url: "https://stackoverflow.com" },
  { name: "MDN Web Docs", desc: "Mozilla 出品的 Web 技术权威文档", icon: "🦊", cat: "开发", url: "https://developer.mozilla.org" },
  { name: "CodePen", desc: "在线前端代码编辑与分享平台", icon: "✏️", cat: "开发", url: "https://codepen.io" },
  { name: "LeetCode", desc: "算法刷题平台，面试必备", icon: "🧩", cat: "开发", url: "https://leetcode.cn" },
  { name: "Can I Use", desc: "查询浏览器对 Web 特性的兼容性", icon: "🔍", cat: "开发", url: "https://caniuse.com" },
  { name: "知乎", desc: "中文互联网高质量问答社区", icon: "💡", cat: "社区", url: "https://www.zhihu.com" },
  { name: "Reddit", desc: "全球最大的社区论坛，话题无所不包", icon: "🤖", cat: "社区", url: "https://www.reddit.com" },
  { name: "Hacker News", desc: "科技创业资讯聚合，极客必读", icon: "🔶", cat: "社区", url: "https://news.ycombinator.com" },
  { name: "V2EX", desc: "创意工作者社区，讨论技术与生活", icon: "✨", cat: "社区", url: "https://www.v2ex.com" },
  { name: "Product Hunt", desc: "每日最新产品推荐发现平台", icon: "🚀", cat: "社区", url: "https://www.producthunt.com" },
  { name: "Dribbble", desc: "设计师作品展示与灵感发现", icon: "🎨", cat: "设计", url: "https://dribbble.com" },
  { name: "Figma", desc: "协作式 UI 设计工具，在线即可用", icon: "🖌️", cat: "设计", url: "https://www.figma.com" },
  { name: "Unsplash", desc: "免费高质量摄影图片资源库", icon: "📷", cat: "设计", url: "https://unsplash.com" },
  { name: "Coolors", desc: "快速生成和谐的配色方案", icon: "🌈", cat: "设计", url: "https://coolors.co" },
  { name: "Coursera", desc: "全球顶尖大学在线课程平台", icon: "🎓", cat: "学习", url: "https://www.coursera.org" },
  { name: "Khan Academy", desc: "免费公益教育平台，数学与科学为主", icon: "📐", cat: "学习", url: "https://zh.khanacademy.org" },
  { name: "freeCodeCamp", desc: "免费编程学习课程与认证", icon: "🏕️", cat: "学习", url: "https://www.freecodecamp.org" },
  { name: "Wolfram Alpha", desc: "计算知识引擎，数学与数据查询利器", icon: "🧮", cat: "学习", url: "https://www.wolframalpha.com" },
  { name: "DevDocs", desc: "多语言 API 文档聚合搜索", icon: "📖", cat: "工具", url: "https://devdocs.io" },
  { name: "TinyPNG", desc: "智能图片压缩，大幅减小文件体积", icon: "🖼️", cat: "工具", url: "https://tinypng.com" },
  { name: "Regex101", desc: "正则表达式在线测试与调试", icon: "⚙️", cat: "工具", url: "https://regex101.com" },
  { name: "JSON Crack", desc: "将 JSON 数据可视化为图表", icon: "🔮", cat: "工具", url: "https://jsoncrack.com" },
  { name: "Excalidraw", desc: "手绘风格在线白板绘图工具", icon: "✍️", cat: "工具", url: "https://excalidraw.com" },
];

export const categories = ["全部", ...new Set(sites.map((s) => s.cat))];
