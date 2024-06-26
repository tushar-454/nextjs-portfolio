import picture from '@/assets/picture.webp';
import Image from 'next/image';
import Container from '../shared/Container';

const Banner = () => {
  return (
    <section className='bg-neutral-100 dark:bg-[#191919]'>
      <Container>
        <div className='flex flex-col-reverse items-center justify-between gap-5 py-20 md:flex-row'>
          <div className='w-full md:w-2/3'>
            <h1 className='text-4xl font-bold leading-[3rem] text-east-bay-900 xss:text-5xl xss:leading-[4rem] dark:text-neutral-100'>
              Hi 👋, <br /> My name is <br />{' '}
              <span className='bg-gradient-to-l from-picton-blue-500 to-picton-blue-800 bg-clip-text text-transparent'>
                Tushar Imran
              </span>{' '}
              <br /> I build things for web
            </h1>
          </div>
          <div className='mx-auto flex justify-center md:w-1/3'>
            <Image
              src={picture}
              alt='main picture'
              className='w-96 rounded-full border-4 border-picton-pink-500 md:w-auto dark:border-neutral-100'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
