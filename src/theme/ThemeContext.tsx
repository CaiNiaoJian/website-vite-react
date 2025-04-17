import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

// 安全地获取保存的主题
const getSavedTheme = () => {
  try {
    return localStorage.getItem('theme') || 'light';
  } catch (e) {
    // 如果在服务器端或localStorage不可用
    return 'light';
  }
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 从localStorage获取保存的主题偏好，默认为light
  const [theme, setTheme] = useState(getSavedTheme);

  // 切换主题函数
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // 当主题变化时，更新localStorage和文档根元素的数据属性
  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('LocalStorage is not available');
    }
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // 提供当前主题对象和切换函数
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// 自定义hook，方便在组件中使用主题上下文
export const useTheme = () => React.useContext(ThemeContext); 