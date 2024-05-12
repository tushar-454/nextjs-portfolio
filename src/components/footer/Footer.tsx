import Container from '../shared/Container';
import SocialLinks from '../shared/SocialLinks';
import Logo from '../shared/header/Logo';

const Footer = () => {
  return (
    <footer className='border-t-2 bg-neutral-100 dark:bg-[#191919]'>
      <Container>
        <div className='flex flex-col items-center justify-between py-5 sm:flex-row'>
          <Logo />
          <div className='flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-20'>
            <div className='flex flex-col items-center gap-1 xs:flex-row xs:gap-10'>
              <a href='tel:01863573951' className='text-east-bay-500'>
                +8801863573951
              </a>
              <a
                href='mailto:imtushar454@gmail.com'
                className='text-east-bay-500'
              >
                imtushar454@gmail.com
              </a>
            </div>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
