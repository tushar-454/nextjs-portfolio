interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1
      data-aos='fade-down'
      className='mb-8 text-left text-3xl font-bold text-east-bay-900 dark:text-neutral-100'
    >
      {children}
    </h1>
  );
};

export { Title };
