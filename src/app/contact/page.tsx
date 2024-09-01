import Link from 'next/link';
import { TbHandClick } from 'react-icons/tb';

const page = () => {
  return (
    <main className='h-screen overflow-hidden bg-neutral-100 dark:bg-[#191919]'>
      <div
        data-aos='zoom-out'
        className='flex h-full flex-col items-center gap-4 pt-40'
      >
        <h1 className='text-center text-4xl font-bold text-picton-blue-900 dark:text-neutral-100'>
          For any questions please mail us:
        </h1>
        <span className='relative'>
          <Link
            passHref={true}
            href='mailto:imtushar454@gmail.com'
            className='bg-gradient-to-t from-picton-pink-600 to-picton-blue-600 bg-clip-text text-center text-lg font-black text-transparent xs:text-2xl'
          >
            imtushar454@gmail.com
          </Link>
          <TbHandClick className='absolute -right-12 top-2 text-6xl text-neutral-900 dark:text-neutral-100' />
        </span>
      </div>
    </main>
  );
};

export default page;
