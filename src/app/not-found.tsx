import notfound from '@/assets/not-found.gif';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex h-screen items-center justify-center dark:bg-black'>
      <Image
        src={notfound}
        width={1000}
        height={1000}
        alt='not found gif'
        className='dark:invert'
      />
    </div>
  );
};

export default page;
