import React from 'react'
import { ThemeProvider } from './theme/ThemeContext'
import { GlobalStyles } from './theme/GlobalStyles'
import HomePage from './components/home/HomePage'
import './i18n/i18n' // 初始化i18n

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
