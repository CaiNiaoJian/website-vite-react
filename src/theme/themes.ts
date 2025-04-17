// 主题颜色定义
const colors = {
  lightBlue: '#6ab7ff',
  antiqueWhite: '#f7f0e6',
  deepBlue: '#0f4c81',
  burgundy: '#800020',
  darkNavy: '#121e2d',
  lightGray: '#f5f5f5',
  mediumGray: '#e0e0e0',
  darkGray: '#333333',
  white: '#ffffff',
  black: '#000000',
};

// 浅色主题
export const lightTheme = {
  primary: colors.deepBlue,
  secondary: colors.burgundy,
  accent: colors.lightBlue,
  background: colors.white,
  cardBackground: colors.antiqueWhite,
  text: colors.darkGray,
  secondaryText: colors.darkNavy,
  border: colors.mediumGray,
  shadow: 'rgba(0, 0, 0, 0.05)',
  navBackground: colors.white,
  footerBackground: colors.lightGray,
  hover: colors.lightBlue,
};

// 深色主题
export const darkTheme = {
  primary: colors.lightBlue,
  secondary: colors.burgundy,
  accent: colors.deepBlue,
  background: colors.darkNavy,
  cardBackground: '#1f2937',
  text: colors.white,
  secondaryText: colors.lightGray,
  border: '#2d3748',
  shadow: 'rgba(0, 0, 0, 0.3)',
  navBackground: '#0a1522',
  footerBackground: '#0f1724',
  hover: colors.burgundy,
};

// 默认导出主题类型，用于类型检查
type Theme = typeof lightTheme;
export type { Theme }; 