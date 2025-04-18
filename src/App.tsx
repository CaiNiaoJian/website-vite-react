import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext'
import { GlobalStyles } from './theme/GlobalStyles'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import './i18n/i18n' // 初始化i18n

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
