import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 0 0 5rem;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 4rem;
  background-image: url('/images/summer.webp');
  background-size: cover;
  background-position: center;
  background-color: #2d3748;
  background-image: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BannerSubtitle = styled.p`
  color: white;
  font-size: 1.25rem;
  max-width: 700px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const ContentBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
`;

const ContentTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.secondaryText};
  position: relative;
  padding-bottom: 0.75rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

const ContentText = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const AuthorSection: React.FC = () => {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState('/images/summer.webp');
  const [imageVisible, setImageVisible] = useState(true);
  
  // 图片加载错误时的备选方案
  const handleImageError = () => {
    console.log('图片加载失败，尝试加载备选图片');
    // 尝试其他图片路径
    if (imageSrc === '/images/summer.webp') {
      setImageSrc('/images/comfortable.webp');
    } else if (imageSrc === '/images/comfortable.webp') {
      setImageSrc('/images/comfortable.avif');
    } else if (imageSrc === '/images/comfortable.avif') {
      setImageSrc('/images/new_about_background.avif');
    } else if (imageSrc === '/images/lake.avif') {
      // 如果所有图片都加载失败，隐藏图片元素，使用容器的背景
      setImageVisible(false);
    } else {
      // 最后的备选方案
      setImageSrc('/images/lake.avif');
    }
  };
  
  return (
    <Section>
      <BannerContainer>
        {imageVisible && (
          <Banner 
            src={imageSrc} 
            alt="Banner" 
            onError={handleImageError}
          />
        )}
        <BannerOverlay>
          <BannerTitle>{t('about.title')}</BannerTitle>
          <BannerSubtitle>{t('about.subtitle')}</BannerSubtitle>
        </BannerOverlay>
      </BannerContainer>
      
      <Container>
        <SectionTitle>{t('about.aboutMe')}</SectionTitle>
        
        <ContentContainer>
          <ContentBox
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContentTitle>{t('about.biography.title')}</ContentTitle>
            <ContentText>{t('about.biography.content1')}</ContentText>
            <ContentText>{t('about.biography.content2')}</ContentText>
          </ContentBox>
          
          <ContentBox
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContentTitle>{t('about.journey.title')}</ContentTitle>
            <ContentText>{t('about.journey.content1')}</ContentText>
            <ContentText>{t('about.journey.content2')}</ContentText>
          </ContentBox>
          
          <ContentBox
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContentTitle>{t('about.reflection.title')}</ContentTitle>
            <ContentText>{t('about.reflection.content1')}</ContentText>
            <ContentText>{t('about.reflection.content2')}</ContentText>
          </ContentBox>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default AuthorSection; 