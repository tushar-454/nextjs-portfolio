interface PageHeadProps {
  title: string;
  description: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col gap-2 py-10'>
      <h1
        data-aos='fade-down'
        className='text-4xl font-bold text-east-bay-900 dark:text-neutral-100'
      >
        {title}
      </h1>
      <p
        data-aos='fade-down'
        data-aos-duration='300'
        className='text-xl text-neutral-600 dark:text-neutral-400'
      >
        {description}
      </p>
    </div>
  );
};

export default PageHead;
