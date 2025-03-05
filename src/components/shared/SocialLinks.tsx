import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <span className='flex items-center gap-2'>
      <Link
        passHref={true}
        target='_blank'
        href='https://github.com/tushar-454'
      >
        <FaGithub className='text-2xl text-gray-500 transition-all hover:text-black dark:text-neutral-100' />
      </Link>
      <Link
        passHref={true}
        target='_blank'
        href='https://www.linkedin.com/in/tushar454/'
      >
        <FaLinkedin className='text-2xl text-gray-500 transition-all hover:text-black dark:text-neutral-100' />
      </Link>
      <Link
        passHref={true}
        target='_blank'
        href='https://www.youtube.com/@snow-script'
      >
        <FaYoutube className='text-2xl text-gray-500 transition-all hover:text-black dark:text-neutral-100' />
      </Link>
    </span>
  );
};

export { SocialLinks };
