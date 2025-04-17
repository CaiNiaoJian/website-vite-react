import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
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

const FooterLink = styled.a`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.8rem;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(3px);
    transition: transform 0.2s;
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
          <FooterLink href="#">{t('footer.blog')}</FooterLink>
          <FooterLink href="#">{t('footer.projects')}</FooterLink>
          <FooterLink href="#">{t('footer.about')}</FooterLink>
          <FooterLink href="#">{t('footer.more')}</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>{t('footer.resources')}</FooterTitle>
          <FooterLink href="#">{t('footer.visitBlog')}</FooterLink>
          <FooterLink href="#">{t('footer.technicalDocs')}</FooterLink>
          <FooterLink href="#">{t('footer.dataAnalysis')}</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>{t('footer.updates')}</FooterTitle>
          <CurrentTime>
            {formattedDate} {formattedTime}
          </CurrentTime>
          <FooterLink href="#">博客上线啦！</FooterLink>
          <FooterLink href="#">增加了暗黑模式</FooterLink>
          <FooterLink href="#">支持中英文切换</FooterLink>
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