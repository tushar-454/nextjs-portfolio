import Container from '../shared/Container';
import SectionHead from '../shared/SectionHead';
import TechStackList from './TechStackList';

const TechStack = () => {
  return (
    <section className='bg-neutral-100 pb-16 pt-40 dark:bg-[#191919]'>
      <Container>
        <div>
          <SectionHead
            title='My Tech Stack'
            description='Technologies I’ve been working with recently'
          />
          <TechStackList />
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
