import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入翻译资源 - 使用静态对象而不是导入JSON文件
const translationEN = {
  "nav": {
    "blog": "Blog",
    "projects": "Projects",
    "about": "About",
    "more": "More"
  },
  "home": {
    "latestArticles": "Latest Articles",
    "readMore": "Read More",
    "blogUpdates": "Blog Updates",
    "publishedOn": "Published on",
    "updatedOn": "Updated on"
  },
  "footer": {
    "navigation": "Navigation",
    "blog": "Blog",
    "projects": "Projects",
    "about": "About",
    "more": "More",
    "resources": "Resources",
    "visitBlog": "Visit Blog",
    "technicalDocs": "Technical Docs",
    "dataAnalysis": "Data Analysis",
    "updates": "Updates",
    "copyright": "© {{year}} Personal Blog. All Rights Reserved."
  },
  "author": {
    "bio": "Exploring the world one thought at a time. I believe in the power of curiosity and the beauty of shared experiences."
  }
};

const translationZH = {
  "nav": {
    "blog": "博客",
    "projects": "项目",
    "about": "关于",
    "more": "更多"
  },
  "home": {
    "latestArticles": "最新文章",
    "readMore": "开始阅读",
    "blogUpdates": "博客动态",
    "publishedOn": "发布于",
    "updatedOn": "更新于"
  },
  "footer": {
    "navigation": "导航",
    "blog": "博客",
    "projects": "项目",
    "about": "关于",
    "more": "更多",
    "resources": "资源",
    "visitBlog": "访问博客",
    "technicalDocs": "技术文档",
    "dataAnalysis": "数据分析",
    "updates": "更新日志",
    "copyright": "© {{year}} 个人博客. 保留所有权利."
  },
  "author": {
    "bio": "一次一个想法地探索世界。我相信好奇心的力量和共享经验的美丽。"
  }
};

// 配置i18next
i18n
  .use(initReactI18next) // 将i18n实例传递给react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      zh: {
        translation: translationZH
      }
    },
    lng: localStorage.getItem('language') || 'zh', // 默认语言
    fallbackLng: 'en', // 备用语言
    interpolation: {
      escapeValue: false // 不转义插值中的HTML
    }
  });

export default i18n;

// 语言切换函数
export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  localStorage.setItem('language', language);
}; 