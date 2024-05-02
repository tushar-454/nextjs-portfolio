import React, { CSSProperties, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  styles?: CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, styles = {} }) => {
  return (
    <div
      className='mx-auto w-full px-2 lg:w-11/12 xl:w-4/5 2xl:w-3/5'
      style={styles}
    >
      {children}
    </div>
  );
};

export default Container;
