import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaUserCog, FaChartLine } from 'react-icons/fa';

interface Project {
  id: number;
  icon: React.ReactNode;
  titleKey: string;
  periodKey: string;
  descriptionKey: string;
  skills: string[];
}

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => `${theme.background}F5`};
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProjectIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => `${theme.primary}15`};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  
  @media (min-width: 768px) {
    width: 120px;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const ProjectPeriod = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Skill = styled.span`
  background-color: ${({ theme }) => `${theme.primary}15`};
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const projects: Project[] = [
    {
      id: 1,
      icon: <FaCode />,
      titleKey: 'about.projects.web.title',
      periodKey: 'about.projects.web.period',
      descriptionKey: 'about.projects.web.description',
      skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 2,
      icon: <FaDatabase />,
      titleKey: 'about.projects.data.title',
      periodKey: 'about.projects.data.period',
      descriptionKey: 'about.projects.data.description',
      skills: ['Python', 'PostgreSQL', 'Data Analysis', 'ETL', 'Machine Learning']
    },
    {
      id: 3,
      icon: <FaUserCog />,
      titleKey: 'about.projects.product.title',
      periodKey: 'about.projects.product.period',
      descriptionKey: 'about.projects.product.description',
      skills: ['Product Management', 'Agile', 'Scrum', 'User Research', 'Roadmapping']
    },
    {
      id: 4,
      icon: <FaChartLine />,
      titleKey: 'about.projects.strategy.title',
      periodKey: 'about.projects.strategy.period',
      descriptionKey: 'about.projects.strategy.description',
      skills: ['Strategic Planning', 'Market Analysis', 'Stakeholder Management', 'KPI Definition']
    }
  ];
  
  return (
    <Section>
      <Container>
        <SectionTitle>{t('about.projectsTitle')}</SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              <ProjectContent>
                <ProjectTitle>{t(project.titleKey)}</ProjectTitle>
                <ProjectPeriod>{t(project.periodKey)}</ProjectPeriod>
                <ProjectDescription>{t(project.descriptionKey)}</ProjectDescription>
                <SkillsContainer>
                  {project.skills.map((skill, skillIndex) => (
                    <Skill key={skillIndex}>{skill}</Skill>
                  ))}
                </SkillsContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default ProjectsSection; 