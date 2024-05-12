interface SectionHeadProps {
  title: string;
  description: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='text-center text-4xl font-bold text-east-bay-900 dark:text-neutral-100'>
        {title}
      </h1>
      <p className='text-center text-xl text-neutral-600 dark:text-neutral-400'>
        {description}
      </p>
    </div>
  );
};

export default SectionHead;
