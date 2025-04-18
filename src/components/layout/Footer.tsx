import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { NavLink as RouterLink } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaSteam } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.footerBackground};
  padding: 3rem 0 2rem;
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.secondaryText};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

const FooterLink = styled(RouterLink)`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.8rem;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(3px);
  }
`;

const ExternalFooterLink = styled.a`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.8rem;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(3px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterCopyright = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const CurrentTime = styled.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>{t('footer.navigation')}</FooterTitle>
          <FooterLink to="/">{t('footer.blog')}</FooterLink>
          <FooterLink to="/projects">{t('footer.projects')}</FooterLink>
          <FooterLink to="/about">{t('footer.about')}</FooterLink>
          <FooterLink to="/more">{t('footer.more')}</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>{t('footer.resources')}</FooterTitle>
          <FooterLink to="/">{t('footer.visitBlog')}</FooterLink>
          <ExternalFooterLink href="#">{t('footer.technicalDocs')}</ExternalFooterLink>
          <ExternalFooterLink href="#">{t('footer.dataAnalysis')}</ExternalFooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>{t('footer.updates')}</FooterTitle>
          <CurrentTime>
            {formattedDate} {formattedTime}
          </CurrentTime>
          <ExternalFooterLink href="#">博客上线啦！</ExternalFooterLink>
          <ExternalFooterLink href="#">增加了暗黑模式</ExternalFooterLink>
          <ExternalFooterLink href="#">支持中英文切换</ExternalFooterLink>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <FooterCopyright>
          {t('footer.copyright', { year: currentTime.getFullYear() })}
        </FooterCopyright>
        
        <FooterSocial>
          <SocialLink href="https://steamcommunity.com" target="_blank" aria-label="Steam">
            <FaSteam />
          </SocialLink>
          <SocialLink href="mailto:contact@example.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
          <SocialLink href="https://github.com" target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialLink>
        </FooterSocial>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 