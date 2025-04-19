import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUserAlt, FaRoad, FaLightbulb } from 'react-icons/fa';

// 创建呼吸光晕动画
const pulseGlow = keyframes`
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.9);
  }
  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

const Section = styled.section`
  padding: 0 0 5rem;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 4rem;
  background-color: #0f172a; /* 深色背景基准色 */
  background-image: 
    linear-gradient(125deg, rgba(66, 153, 225, 0.15) 0%, rgba(66, 153, 225, 0) 70%),
    linear-gradient(210deg, rgba(49, 130, 206, 0.1) 10%, rgba(49, 130, 206, 0) 80%),
    linear-gradient(315deg, rgba(99, 179, 237, 0.1) 30%, rgba(99, 179, 237, 0) 60%),
    linear-gradient(to right, #0f172a, #1a202c);
  position: relative;
  z-index: 1;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 150%, rgba(99, 179, 237, 0.18) 0%, rgba(99, 179, 237, 0) 50%),
      radial-gradient(circle at 80% 50%, rgba(49, 130, 206, 0.12) 0%, rgba(49, 130, 206, 0) 70%);
    z-index: -1;
    pointer-events: none;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 0;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const DynamicGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(66, 153, 225, 0.15) 0%, rgba(66, 153, 225, 0) 70%);
  border-radius: 50%;
  z-index: 0;
  animation: ${pulseGlow} 8s ease-in-out infinite;
  pointer-events: none;
`;

const SecondaryGlow = styled.div`
  position: absolute;
  top: 60%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, rgba(49, 130, 206, 0.1) 0%, rgba(49, 130, 206, 0) 70%);
  border-radius: 50%;
  z-index: 0;
  animation: ${pulseGlow} 12s ease-in-out infinite;
  animation-delay: 2s;
  pointer-events: none;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.75) saturate(1.2);
  opacity: 0.85;
  position: relative;
  z-index: 2;
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
  z-index: 3;
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7), 0 4px 20px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BannerSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  max-width: 700px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  font-weight: 400;
  letter-spacing: 0.5px;
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

const IntegratedContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  overflow: hidden;
  margin-top: 3rem;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => `${theme.border}`};
`;

interface TabProps {
  $active: boolean;
}

const Tab = styled.div<TabProps>`
  flex: 1;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ $active, theme }) => $active ? theme.primary : theme.text};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ $active, theme }) => $active ? theme.primary : 'transparent'};
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => `${theme.primary}08`};
  }
`;

const TabIcon = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const ContentPanel = styled(motion.div)`
  padding: 2.5rem;
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

const Highlight = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const AccentBox = styled.div`
  background-color: ${({ theme }) => `${theme.primary}10`};
  border-left: 4px solid ${({ theme }) => theme.primary};
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

const AccentBoxText = styled.p`
  margin: 0;
  font-style: italic;
  line-height: 1.6;
`;

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const AuthorSection: React.FC = () => {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState('/images/summer.webp');
  const [imageVisible, setImageVisible] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  
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
        <DynamicGlow />
        <SecondaryGlow />
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
        
        <IntegratedContainer>
          <TabsContainer>
            <Tab 
              $active={activeTab === 0} 
              onClick={() => setActiveTab(0)}
            >
              <TabIcon><FaUserAlt /></TabIcon>
              {t('about.biography.title')}
            </Tab>
            <Tab 
              $active={activeTab === 1} 
              onClick={() => setActiveTab(1)}
            >
              <TabIcon><FaRoad /></TabIcon>
              {t('about.journey.title')}
            </Tab>
            <Tab 
              $active={activeTab === 2} 
              onClick={() => setActiveTab(2)}
            >
              <TabIcon><FaLightbulb /></TabIcon>
              {t('about.reflection.title')}
            </Tab>
          </TabsContainer>
          
          {activeTab === 0 && (
            <ContentPanel
              key="biography"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ContentTitle>{t('about.biography.title')}</ContentTitle>
              <ContentText>
                {t('about.biography.content1')} <Highlight>思考与创造</Highlight> 是我的激情所在。
              </ContentText>
              <AccentBox>
                <AccentBoxText>
                  "好奇心是最强大的驱动力，它引领我们探索未知的领域，发现新的可能性。"
                </AccentBoxText>
              </AccentBox>
              <ContentText>
                {t('about.biography.content2')}
              </ContentText>
            </ContentPanel>
          )}
          
          {activeTab === 1 && (
            <ContentPanel
              key="journey"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ContentTitle>{t('about.journey.title')}</ContentTitle>
              <ContentText>
                {t('about.journey.content1')} 每一次<Highlight>挑战</Highlight>都是一次成长的机会。
              </ContentText>
              <AccentBox>
                <AccentBoxText>
                  "在多样化的经历中找到共同点，在跨领域的交叉处发现创新的种子。"
                </AccentBoxText>
              </AccentBox>
              <ContentText>
                {t('about.journey.content2')}
              </ContentText>
            </ContentPanel>
          )}
          
          {activeTab === 2 && (
            <ContentPanel
              key="reflection"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ContentTitle>{t('about.reflection.title')}</ContentTitle>
              <ContentText>
                {t('about.reflection.content1')} 我相信<Highlight>失败</Highlight>是通往成功的必经之路。
              </ContentText>
              <AccentBox>
                <AccentBoxText>
                  "回望过去的挫折，它们不过是成长道路上的垫脚石，引领我走向更广阔的未来。"
                </AccentBoxText>
              </AccentBox>
              <ContentText>
                {t('about.reflection.content2')}
              </ContentText>
            </ContentPanel>
          )}
        </IntegratedContainer>
      </Container>
    </Section>
  );
};

export default AuthorSection; 