import React from 'react';
import { Title } from './Title';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const AboutLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export { AboutLayout };
