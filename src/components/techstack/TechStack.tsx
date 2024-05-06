import Container from '../shared/Container';
import SectionHead from '../shared/SectionHead';
import TechStackList from './TechStackList';

const TechStack = () => {
  return (
    <section className='my-40'>
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
