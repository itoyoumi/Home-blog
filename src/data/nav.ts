export interface NavLink {
  title: string;
  url: string;
  desc?: string;
}

export interface NavCategory {
  id: string;
  name: string;
  en: string;
  links: NavLink[];
}

export const navCategories: NavCategory[] = [
  {
    id: 'ai',
    name: 'AI 官网',
    en: 'AI Labs',
    links: [
      { title: 'OpenAI', url: 'https://openai.com/', desc: 'GPT / ChatGPT / Sora' },
      { title: 'Anthropic', url: 'https://www.anthropic.com/', desc: 'Claude 系列' },
      { title: 'Google DeepMind', url: 'https://deepmind.google/', desc: 'Gemini' },
      { title: 'Mistral AI', url: 'https://mistral.ai/', desc: '欧洲开源模型' },
      { title: 'DeepSeek', url: 'https://www.deepseek.com/', desc: '深度求索' },
      { title: '通义', url: 'https://tongyi.aliyun.com/', desc: 'Qwen 千问' },
      { title: 'Kimi', url: 'https://kimi.moonshot.cn/', desc: '月之暗面' },
      { title: '智谱清言', url: 'https://chatglm.cn/', desc: 'GLM 系列' },
    ],
  },
  {
    id: 'docs',
    name: '开发文档',
    en: 'Docs',
    links: [
      { title: 'Astro Docs', url: 'https://docs.astro.build/', desc: 'Astro 官方文档' },
      { title: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', desc: 'Tailwind v4 文档' },
      { title: 'Vite', url: 'https://vite.dev/', desc: '下一代构建工具' },
      { title: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', desc: 'TS 官方手册' },
      { title: 'MDN', url: 'https://developer.mozilla.org/zh-CN/', desc: 'Web 技术百科' },
    ],
  },
  {
    id: 'blogs',
    name: '博客',
    en: 'Blogs',
    links: [
      { title: 'Astro Blog', url: 'https://astro.build/blog/', desc: 'Astro 官方博客' },
      { title: 'web.dev', url: 'https://web.dev/', desc: 'Google Web 最佳实践' },
      // 你收藏的个人博客继续往下加……
    ],
  },
  {
    id: 'toolbox',
    name: '工具收藏',
    en: 'Toolbox',
    links: [
      { title: 'GitHub', url: 'https://github.com/', desc: '代码托管' },
      { title: 'Can I Use', url: 'https://caniuse.com/', desc: '浏览器兼容性查询' },
      { title: 'Regex101', url: 'https://regex101.com/', desc: '正则调试' },
    ],
  },
];

export const totalLinks = navCategories.reduce((sum, c) => sum + c.links.length, 0);

/** 网站图标服务，三选一 */
export const faviconOf = (url: string) => {
  const host = new URL(url).hostname;
  // return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;   // Google
  // return `https://icons.duckduckgo.com/ip3/${host}.ico`;              // DuckDuckGo
  return `https://favicon.cccyun.cc/${host}`;                            // 国内可用
};
