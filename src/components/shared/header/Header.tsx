'use client';
import { useEffect } from 'react';
import Container from '../Container';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  let lastScrollTop = 0;
  useEffect(() => {
    const headerElement = document.querySelector('header');
    window.addEventListener('scroll', function () {
      const currentScrollTop = document.documentElement.scrollTop;
      if (currentScrollTop < lastScrollTop && headerElement) {
        headerElement.classList.add('stickyHeader');
      } else if (currentScrollTop > lastScrollTop && headerElement) {
        headerElement.classList.remove('stickyHeader');
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
    return () => window.removeEventListener('scroll', () => {});
  }, []);
  return (
    <header className=' z-[99999999] border-b-2 border-picton-pink-400 bg-white dark:border-neutral-100 dark:bg-[#191919]'>
      <Container>
        <div className='flex items-center justify-between py-5'>
          {/* logo  */}
          <Logo />
          {/* nav */}
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
