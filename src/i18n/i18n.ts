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
  },
  "about": {
    "title": "About Me",
    "subtitle": "My journey, reflections, and vision for the future",
    "aboutMe": "About the Author",
    "biography": {
      "title": "Personal Biography",
      "content1": "I'm a passionate explorer of ideas and a lifelong learner. My journey began with a curiosity about how things work and how people connect with the world around them.",
      "content2": "Throughout my career, I've pursued projects that blend technology with human insight, creating experiences that resonate with people's lives and aspirations."
    },
    "journey": {
      "title": "My Journey",
      "content1": "My path has been shaped by diverse experiences across multiple fields. Each challenge has taught me to approach problems with both analytical precision and creative intuition.",
      "content2": "I believe that the most impactful work happens at the intersection of disciplines, where different perspectives converge to create holistic solutions."
    },
    "reflection": {
      "title": "Reflections & Vision",
      "content1": "Looking back, I realize that every setback has been a stepping stone toward greater understanding. The moments of doubt and uncertainty have ultimately led to the most meaningful growth.",
      "content2": "Moving forward, I aim to continue exploring the boundaries of what's possible, with a commitment to creating work that is not only technically sound but also deeply human."
    },
    "projectsTitle": "Project Experience",
    "projects": {
      "web": {
        "title": "Web Development Leadership",
        "period": "2018 - Present",
        "description": "Led multiple web development projects from inception to launch, focusing on creating responsive, accessible, and high-performance applications. Implemented modern front-end architectures and collaborated with cross-functional teams to deliver exceptional user experiences."
      },
      "data": {
        "title": "Data Analytics Initiative",
        "period": "2019 - 2022",
        "description": "Directed a data analytics initiative that transformed raw organizational data into actionable insights. Designed data pipelines, implemented analytical solutions, and created visualization dashboards that drove strategic decision-making across departments."
      },
      "product": {
        "title": "Product Management",
        "period": "2017 - 2020",
        "description": "Managed the entire product lifecycle for a SaaS platform serving over 50,000 users. Conducted market research, defined product roadmaps, and worked closely with development teams to ensure timely delivery of features that addressed user needs and business objectives."
      },
      "strategy": {
        "title": "Strategic Planning",
        "period": "2020 - Present",
        "description": "Developed and implemented strategic initiatives that aligned with organizational goals and market opportunities. Created comprehensive plans that included market analysis, competitive positioning, and resource allocation strategies."
      }
    },
    "awardsTitle": "Awards & Achievements",
    "awards": {
      "innovation": {
        "title": "Innovation Excellence Award",
        "date": "2021",
        "description": "Recognized for developing an innovative approach to solving complex technical challenges, resulting in significant improvements to system performance and user experience."
      },
      "excellence": {
        "title": "Technical Excellence Award",
        "date": "2019",
        "description": "Awarded for outstanding technical contributions that demonstrated exceptional skill, creativity, and commitment to quality in software development."
      },
      "leadership": {
        "title": "Leadership Recognition",
        "date": "2020",
        "description": "Acknowledged for exemplary leadership in guiding cross-functional teams through challenging projects, fostering collaboration, and mentoring junior team members."
      },
      "achievement": {
        "title": "Special Achievement Award",
        "date": "2022",
        "description": "Honored for extraordinary contributions to a critical project that exceeded expectations and delivered exceptional value to stakeholders."
      }
    },
    "updatesTitle": "Blog & Project Updates",
    "updates": {
      "launch": {
        "title": "Blog Launch",
        "date": "November 2023",
        "content": "Officially launched this personal blog to share insights, experiences, and learnings from my journey in technology and beyond. Built with modern web technologies for a seamless user experience."
      },
      "design": {
        "title": "New Design System",
        "date": "December 2023",
        "content": "Implemented a comprehensive design system with dark mode support and responsive layouts to ensure a consistent and accessible experience across all devices and user preferences."
      },
      "content": {
        "title": "Content Strategy",
        "date": "January 2024",
        "content": "Developed a structured content strategy focusing on technical tutorials, philosophical reflections, and case studies from past projects, aiming to provide value to readers from diverse backgrounds."
      },
      "future": {
        "title": "Future Plans",
        "date": "Ongoing",
        "content": "Working on expanding the platform with interactive elements, community features, and integration with other digital presence channels to create a more engaging and connected experience."
      }
    }
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
  },
  "about": {
    "title": "关于我",
    "subtitle": "我的旅程、反思和对未来的展望",
    "aboutMe": "关于作者",
    "biography": {
      "title": "个人简介",
      "content1": "我是一位对思想充满热情的探索者和终身学习者。我的旅程始于对事物如何运作以及人们如何与周围世界联系的好奇心。",
      "content2": "在我的职业生涯中，我追求将技术与人类洞察力结合的项目，创造与人们生活和抱负产生共鸣的体验。"
    },
    "journey": {
      "title": "我的旅程",
      "content1": "我的道路由跨越多个领域的多样化经验塑造。每一个挑战都教会我用分析精确性和创造性直觉来解决问题。",
      "content2": "我相信最具影响力的工作发生在学科的交叉点，不同的视角汇聚在一起，创造全面的解决方案。"
    },
    "reflection": {
      "title": "反思与展望",
      "content1": "回顾过去，我意识到每一次挫折都是通向更深理解的垫脚石。怀疑和不确定的时刻最终导致了最有意义的成长。",
      "content2": "展望未来，我的目标是继续探索可能性的边界，致力于创造不仅技术上合理而且深具人文关怀的作品。"
    },
    "projectsTitle": "项目经验",
    "projects": {
      "web": {
        "title": "网站开发领导",
        "period": "2018年 - 至今",
        "description": "从构思到发布领导多个网站开发项目，专注于创建响应式、可访问且高性能的应用程序。实施现代前端架构，并与跨职能团队合作，提供卓越的用户体验。"
      },
      "data": {
        "title": "数据分析计划",
        "period": "2019年 - 2022年",
        "description": "指导了一项将原始组织数据转化为可执行洞察力的数据分析计划。设计数据管道，实施分析解决方案，并创建可视化仪表板，推动各部门的战略决策。"
      },
      "product": {
        "title": "产品管理",
        "period": "2017年 - 2020年",
        "description": "管理服务超过50,000用户的SaaS平台的整个产品生命周期。进行市场研究，定义产品路线图，并与开发团队密切合作，确保及时交付满足用户需求和业务目标的功能。"
      },
      "strategy": {
        "title": "战略规划",
        "period": "2020年 - 至今",
        "description": "制定并实施与组织目标和市场机会一致的战略计划。创建包括市场分析、竞争定位和资源分配策略在内的综合计划。"
      }
    },
    "awardsTitle": "奖项与成就",
    "awards": {
      "innovation": {
        "title": "创新卓越奖",
        "date": "2021年",
        "description": "因开发解决复杂技术挑战的创新方法而获得认可，显著改善了系统性能和用户体验。"
      },
      "excellence": {
        "title": "技术卓越奖",
        "date": "2019年",
        "description": "因在软件开发中展示了卓越的技能、创造力和对质量的承诺而获得技术贡献奖。"
      },
      "leadership": {
        "title": "领导力认可",
        "date": "2020年",
        "description": "因在指导跨职能团队完成具有挑战性的项目、促进协作和指导初级团队成员方面的卓越领导力而获得认可。"
      },
      "achievement": {
        "title": "特殊成就奖",
        "date": "2022年",
        "description": "因为对一个关键项目的非凡贡献而受到表彰，该项目超出了预期并为利益相关者提供了卓越的价值。"
      }
    },
    "updatesTitle": "博客与项目更新",
    "updates": {
      "launch": {
        "title": "博客启动",
        "date": "2023年11月",
        "content": "正式启动这个个人博客，分享我在技术和其他领域旅程中的见解、经验和学习。使用现代网络技术构建，提供无缝的用户体验。"
      },
      "design": {
        "title": "新设计系统",
        "date": "2023年12月",
        "content": "实施了一个全面的设计系统，支持暗黑模式和响应式布局，确保在所有设备和用户偏好下提供一致且可访问的体验。"
      },
      "content": {
        "title": "内容策略",
        "date": "2024年1月",
        "content": "制定了一个结构化的内容策略，重点关注技术教程、哲学反思和过去项目的案例研究，旨在为来自不同背景的读者提供价值。"
      },
      "future": {
        "title": "未来计划",
        "date": "进行中",
        "content": "正在致力于扩展平台，增加交互式元素、社区功能和与其他数字存在渠道的集成，创建更具吸引力和联系的体验。"
      }
    }
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