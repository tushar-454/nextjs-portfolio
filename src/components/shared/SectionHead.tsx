interface SectionHeadProps {
  title: string;
  description: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='text-east-bay-900 text-4xl font-bold'>{title}</h1>
      <p className='text-xl text-gray-600'>{description}</p>
    </div>
  );
};

export default SectionHead;
