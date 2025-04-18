import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';

interface Update {
  id: number;
  title: string;
  content: string;
  date: string;
  hasEmoji?: boolean;
}

// 示例数据
const updates: Update[] = [
  {
    id: 1,
    title: '博客正式上线！',
    content: '我的个人博客终于上线了！本站使用了React、TypeScript、Vite和Framer Motion构建，支持深色模式和中英文切换。感谢所有支持我的朋友们！',
    date: '2023-11-28',
    hasEmoji: true
  },
  {
    id: 2,
    title: '新增暗黑模式',
    content: '为了提供更好的阅读体验，现在可以根据个人偏好切换明亮和暗黑模式了。系统会记住您的偏好，下次访问时自动应用。',
    date: '2023-12-05'
  },
  {
    id: 3,
    title: '支持多语言',
    content: '为了服务更广泛的读者，博客现已支持中英文切换。未来可能会增加更多语言支持。',
    date: '2023-12-12'
  }
];

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
      ${({ theme }) => `${theme.accent}05`} 0%, 
      transparent 70%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
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

const UpdatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const UpdateCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
`;

interface UpdateHeaderProps {
  $isOpen: boolean;
}

const UpdateHeader = styled.div<UpdateHeaderProps>`
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${({ $isOpen, theme }) => 
    $isOpen ? `${theme.primary}15` : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.primary}10`};
  }
`;

const UpdateTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UpdateDate = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondaryText};
  opacity: 0.8;
`;

const UpdateContent = styled(motion.div)`
  padding: 0 1.5rem;
  overflow: hidden;
`;

const UpdateText = styled.p`
  padding-bottom: 1.5rem;
  margin: 0;
  line-height: 1.6;
`;

const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const EmojiIcon = styled(MdCelebration)`
  color: #FFD700;
  font-size: 1.4rem;
`;

const variants = {
  open: { 
    height: 'auto', 
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: 'easeOut' 
    } 
  },
  closed: { 
    height: 0, 
    opacity: 0,
    transition: { 
      duration: 0.2, 
      ease: 'easeIn' 
    } 
  }
};

const BlogUpdates: React.FC = () => {
  const { t } = useTranslation();
  const [openUpdate, setOpenUpdate] = useState<number | null>(1); // 默认打开第一条
  
  const toggleUpdate = (id: number) => {
    setOpenUpdate(openUpdate === id ? null : id);
  };
  
  return (
    <Section>
      <Container>
        <SectionTitle>{t('home.blogUpdates')}</SectionTitle>
        <UpdatesList>
          {updates.map(update => (
            <UpdateCard key={update.id}>
              <UpdateHeader 
                $isOpen={openUpdate === update.id}
                onClick={() => toggleUpdate(update.id)}
              >
                <UpdateTitle>
                  {update.hasEmoji && <EmojiIcon />}
                  {update.title}
                </UpdateTitle>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <UpdateDate>{update.date}</UpdateDate>
                  <ToggleIcon>
                    {openUpdate === update.id ? <FaChevronUp /> : <FaChevronDown />}
                  </ToggleIcon>
                </div>
              </UpdateHeader>
              
              <AnimatePresence initial={false}>
                {openUpdate === update.id && (
                  <UpdateContent
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <UpdateText>{update.content}</UpdateText>
                  </UpdateContent>
                )}
              </AnimatePresence>
            </UpdateCard>
          ))}
        </UpdatesList>
      </Container>
    </Section>
  );
};

export default BlogUpdates; 