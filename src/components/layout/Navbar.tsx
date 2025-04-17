import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaEnvelope, FaSteam } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FiGlobe } from 'react-icons/fi';
import { useTheme } from '../../theme/ThemeContext';
import { changeLanguage } from '../../i18n/i18n';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.navBackground};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.shadow};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoContainer>
          <Logo src="public\images\githubherofigureimage.png" alt="Logo" />
        </LogoContainer>
        
        <NavLinks>
          <NavLink href="#">{t('nav.blog')}</NavLink>
          <NavLink href="#">{t('nav.projects')}</NavLink>
          <NavLink href="#">{t('nav.about')}</NavLink>
          <NavLink href="#">{t('nav.more')}</NavLink>
        </NavLinks>
        
        <IconsContainer>
          <IconButton as="a" href="https://steamcommunity.com" target="_blank" aria-label="Steam">
            <FaSteam />
          </IconButton>
          <IconButton as="a" href="mailto:contact@example.com" aria-label="Email">
            <FaEnvelope />
          </IconButton>
          <IconButton as="a" href="https://github.com" target="_blank" aria-label="GitHub">
            <FaGithub />
          </IconButton>
          <IconButton onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
          </IconButton>
          <IconButton onClick={toggleLanguage} aria-label="Toggle language">
            <FiGlobe />
          </IconButton>
        </IconsContainer>
        
        <MobileMenuButton aria-label="Menu">
          ☰
        </MobileMenuButton>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar; 