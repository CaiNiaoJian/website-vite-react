import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPencilAlt, FaCode, FaLightbulb } from 'react-icons/fa';

interface Update {
  id: number;
  icon: React.ReactNode;
  titleKey: string;
  dateKey: string;
  contentKey: string;
}

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => `${theme.accent}10`};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      ${({ theme }) => `${theme.accent}05`} 0%, 
      transparent 70%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 3rem auto 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => `${theme.primary}30`};
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isRight?: boolean }>`
  display: flex;
  justify-content: ${props => props.isRight ? 'flex-start' : 'flex-end'};
  padding-bottom: 3rem;
  width: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 45px;
  }
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineContent = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  max-width: 45%;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 24px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.cardBackground};
    transform: rotate(45deg);
  }
`;

const TimelineContentLeft = styled(TimelineContent)`
  &:before {
    right: -10px;
  }
  
  @media (max-width: 768px) {
    &:before {
      left: -10px;
    }
  }
`;

const TimelineContentRight = styled(TimelineContent)`
  &:before {
    left: -10px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  box-shadow: 0 0 0 4px ${({ theme }) => `${theme.primary}30`};
  z-index: 10;
  
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const UpdateTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const UpdateDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const UpdateContent = styled.p`
  line-height: 1.7;
`;

const timelineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const UpdatesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const updates: Update[] = [
    {
      id: 1,
      icon: <FaCode />,
      titleKey: 'about.updates.launch.title',
      dateKey: 'about.updates.launch.date',
      contentKey: 'about.updates.launch.content'
    },
    {
      id: 2,
      icon: <FaPencilAlt />,
      titleKey: 'about.updates.design.title',
      dateKey: 'about.updates.design.date',
      contentKey: 'about.updates.design.content'
    },
    {
      id: 3,
      icon: <FaCalendarAlt />,
      titleKey: 'about.updates.content.title',
      dateKey: 'about.updates.content.date',
      contentKey: 'about.updates.content.content'
    },
    {
      id: 4,
      icon: <FaLightbulb />,
      titleKey: 'about.updates.future.title',
      dateKey: 'about.updates.future.date',
      contentKey: 'about.updates.future.content'
    }
  ];
  
  return (
    <Section>
      <Container>
        <SectionTitle>{t('about.updatesTitle')}</SectionTitle>
        
        <Timeline>
          {updates.map((update, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem 
                key={update.id}
                isRight={isEven}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <TimelineDot>
                  {update.icon}
                </TimelineDot>
                {isEven ? (
                  <TimelineContentRight>
                    <UpdateTitle>{t(update.titleKey)}</UpdateTitle>
                    <UpdateDate>{t(update.dateKey)}</UpdateDate>
                    <UpdateContent>{t(update.contentKey)}</UpdateContent>
                  </TimelineContentRight>
                ) : (
                  <TimelineContentLeft>
                    <UpdateTitle>{t(update.titleKey)}</UpdateTitle>
                    <UpdateDate>{t(update.dateKey)}</UpdateDate>
                    <UpdateContent>{t(update.contentKey)}</UpdateContent>
                  </TimelineContentLeft>
                )}
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Section>
  );
};

export default UpdatesSection; 