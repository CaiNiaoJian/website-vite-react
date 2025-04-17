import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// 文章类型定义
interface Post {
  id: number;
  title: string;
  publishDate: string;
  updateDate: string | null;
  summary: string;
  url: string;
}

// 示例数据（未来可以从API获取）
const samplePosts: Post[] = [
  {
    id: 1,
    title: '开始我的博客之旅',
    publishDate: '2023-11-10',
    updateDate: null,
    summary: '在这篇文章中，我将分享我开始写博客的初衷，以及我希望通过写作给读者和自己带来的价值。',
    url: '#'
  },
  {
    id: 2,
    title: '思考的艺术：如何培养批判性思维',
    publishDate: '2023-11-15',
    updateDate: '2023-11-20',
    summary: '批判性思维是现代世界中最重要的能力之一。本文探讨如何通过日常练习培养这一能力。',
    url: '#'
  },
  {
    id: 3,
    title: '数字简约主义：在信息过载时代找到平衡',
    publishDate: '2023-11-25',
    updateDate: null,
    summary: '我们每天接收的信息量正在呈指数级增长。这篇文章讨论如何在不断连接的世界中保持专注和平静。',
    url: '#'
  }
];

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostCard = styled(motion.article)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 2rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.shadow};
  }
`;

const PostTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const PostMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const PostDate = styled.span`
  display: flex;
  align-items: center;
`;

const PostSummary = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: white;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const LatestPosts: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Section>
      <Container>
        <SectionTitle>{t('home.latestArticles')}</SectionTitle>
        <PostList>
          {samplePosts.map((post, index) => (
            <PostCard 
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={index}
            >
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <PostDate>{t('home.publishedOn')}: {post.publishDate}</PostDate>
                {post.updateDate && (
                  <PostDate>{t('home.updatedOn')}: {post.updateDate}</PostDate>
                )}
              </PostMeta>
              <PostSummary>{post.summary}</PostSummary>
              <ReadMoreButton href={post.url}>{t('home.readMore')}</ReadMoreButton>
            </PostCard>
          ))}
        </PostList>
      </Container>
    </Section>
  );
};

export default LatestPosts; 