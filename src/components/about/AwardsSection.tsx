import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

interface Award {
  id: number;
  icon: React.ReactNode;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  color: string;
}

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
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

const AwardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const AwardCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AwardHeader = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`;

const AwardContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AwardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  text-align: center;
`;

const AwardDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
`;

const AwardDescription = styled.p`
  line-height: 1.7;
  text-align: center;
  flex-grow: 1;
`;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: 'spring',
      stiffness: 100
    }
  })
};

const AwardsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const awards: Award[] = [
    {
      id: 1,
      icon: <FaTrophy />,
      titleKey: 'about.awards.innovation.title',
      dateKey: 'about.awards.innovation.date',
      descriptionKey: 'about.awards.innovation.description',
      color: '#FFD700' // Gold color
    },
    {
      id: 2,
      icon: <FaMedal />,
      titleKey: 'about.awards.excellence.title',
      dateKey: 'about.awards.excellence.date',
      descriptionKey: 'about.awards.excellence.description',
      color: '#C0C0C0' // Silver color
    },
    {
      id: 3,
      icon: <FaAward />,
      titleKey: 'about.awards.leadership.title',
      dateKey: 'about.awards.leadership.date',
      descriptionKey: 'about.awards.leadership.description',
      color: '#0f4c81' // Deep blue color
    },
    {
      id: 4,
      icon: <FaCertificate />,
      titleKey: 'about.awards.achievement.title',
      dateKey: 'about.awards.achievement.date',
      descriptionKey: 'about.awards.achievement.description',
      color: '#800020' // Burgundy color
    }
  ];
  
  return (
    <Section>
      <Container>
        <SectionTitle>{t('about.awardsTitle')}</SectionTitle>
        
        <AwardsContainer>
          {awards.map((award, index) => (
            <AwardCard
              key={award.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <AwardHeader color={award.color}>
                {award.icon}
              </AwardHeader>
              <AwardContent>
                <AwardTitle>{t(award.titleKey)}</AwardTitle>
                <AwardDate>{t(award.dateKey)}</AwardDate>
                <AwardDescription>{t(award.descriptionKey)}</AwardDescription>
              </AwardContent>
            </AwardCard>
          ))}
        </AwardsContainer>
      </Container>
    </Section>
  );
};

export default AwardsSection; 