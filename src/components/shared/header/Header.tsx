import Container from '../Container';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='border-b-2 border-picton-pink-400 bg-white dark:border-neutral-100 dark:bg-[#191919]'>
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
