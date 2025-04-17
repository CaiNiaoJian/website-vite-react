import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -10%;
    width: 120%;
    height: 100%;
    background: linear-gradient(135deg, 
      ${({ theme }) => `${theme.accent}10`} 0%, 
      ${({ theme }) => `${theme.accent}05`} 100%);
    z-index: 1;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroBio = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  font-weight: 300;
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  
  @media (max-width: 992px) {
    order: 1;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  border: 4px solid ${({ theme }) => theme.accent};
`;

const MotionDiv = styled(motion.div)``;

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTitle>Hi, I'm Author</HeroTitle>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroBio>{t('author.bio')}</HeroBio>
          </MotionDiv>
        </HeroContent>
        
        <HeroImageContainer>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ProfileImage 
              src="public\images\hero-master.avif" 
              alt="Author" 
            />
          </MotionDiv>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 