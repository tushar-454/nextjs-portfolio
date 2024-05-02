import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link
        href='/'
        className='bg-gradient-to-l from-picton-blue-400 to-picton-pink-500 bg-clip-text text-4xl font-black text-transparent '
      >
        SNOW
      </Link>
    </div>
  );
};

export default Logo;
