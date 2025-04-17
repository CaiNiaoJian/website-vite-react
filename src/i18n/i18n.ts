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

// 安全地获取localStorage
const getSavedLanguage = () => {
  try {
    return localStorage.getItem('language') || 'zh';
  } catch (e) {
    // 如果在服务器端或localStorage不可用
    return 'zh';
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
    lng: getSavedLanguage(), // 默认语言
    fallbackLng: 'en', // 备用语言
    interpolation: {
      escapeValue: false // 不转义插值中的HTML
    }
  });

export default i18n;

// 语言切换函数
export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  try {
    localStorage.setItem('language', language);
  } catch (e) {
    // 处理localStorage不可用的情况
    console.warn('LocalStorage is not available');
  }
}; 