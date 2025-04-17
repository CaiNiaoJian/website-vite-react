import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Hero from './Hero';
import LatestPosts from './LatestPosts';
import BlogUpdates from './BlogUpdates';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <Main>
        <Hero />
        <LatestPosts />
        <BlogUpdates />
      </Main>
      <Footer />
    </PageContainer>
  );
};

export default HomePage; 