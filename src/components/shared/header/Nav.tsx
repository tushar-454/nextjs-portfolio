'use client';
import Link from 'next/link';
import { FC, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import Settings from '../Settings';
import SocialLinks from '../SocialLinks';

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className='z-[99999999] flex items-center justify-center gap-10'>
        <nav
          className={`absolute left-0 top-[82px] w-full origin-top scale-y-0 transition-all md:static md:w-auto md:scale-y-100 ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'}`}
        >
          <ul className='flex flex-col gap-5 bg-gray-100 p-4  dark:bg-neutral-800 md:flex-row md:gap-10 md:bg-transparent md:p-0 md:dark:bg-transparent'>
            <li>
              <Link
                href='/'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='font-medium text-gray-500 transition-all hover:text-black dark:text-neutral-100'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='font-medium text-gray-500 transition-all hover:text-black dark:text-neutral-100'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/tech-stack'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='font-medium text-gray-500 transition-all hover:text-black dark:text-neutral-100'
              >
                Tech Stack
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='font-medium text-gray-500 transition-all hover:text-black dark:text-neutral-100'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='font-medium text-gray-500 transition-all hover:text-black dark:text-neutral-100'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className='flex items-center justify-center gap-2'>
          <MdArrowDropDown
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`block text-5xl text-gray-400 transition-all dark:text-neutral-100 md:hidden ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
          />

          <SocialLinks />
        </div>
      </div>
      <Settings />
    </>
  );
};

export default Nav;
