'use client';
import Link from 'next/link';
import { FC, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import SocialLinks from '../SocialLinks';

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className='flex items-center justify-center gap-10'>
      <nav
        className={`absolute left-0 top-[82px] w-full origin-top scale-y-0 transition-all md:static md:w-auto md:scale-y-100 ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'}`}
      >
        <ul className='flex flex-col gap-5 bg-gray-100 p-4 md:flex-row md:gap-10 md:bg-transparent md:p-0'>
          <li>
            <Link
              href='/'
              className='font-medium text-gray-500 transition-all hover:text-black'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='font-medium text-gray-500 transition-all hover:text-black'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/tech-stack'
              className='font-medium text-gray-500 transition-all hover:text-black'
            >
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='font-medium text-gray-500 transition-all hover:text-black'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='font-medium text-gray-500 transition-all hover:text-black'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center justify-center gap-2'>
        <MdArrowDropDown
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`block text-5xl text-gray-400 transition-all md:hidden ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
        />

        <SocialLinks />
      </div>
    </div>
  );
};

export default Nav;
