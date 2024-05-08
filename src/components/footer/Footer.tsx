import Container from '../shared/Container';
import SocialLinks from '../shared/SocialLinks';
import Logo from '../shared/header/Logo';

const Footer = () => {
  return (
    <footer className='border-t-2'>
      <Container>
        <div className='flex items-center justify-between py-5'>
          <Logo />
          <div className='flex items-center justify-center gap-20'>
            <div className='flex gap-10'>
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
