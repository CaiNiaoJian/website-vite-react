import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import AuthorSection from './AuthorSection';
import ProjectsSection from './ProjectsSection';
import AwardsSection from './AwardsSection';
import UpdatesSection from './UpdatesSection';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <Main>
        <AuthorSection />
        <ProjectsSection />
        <AwardsSection />
        <UpdatesSection />
      </Main>
      <Footer />
    </PageContainer>
  );
};

export default AboutPage; 