import Container from '../shared/Container';
import SectionHead from '../shared/SectionHead';
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section className='my-40'>
      <Container>
        <div>
          <SectionHead
            title='Projects'
            description='Things I’ve built so far'
          />
        </div>
        <ProjectCards />
      </Container>
    </section>
  );
};

export default Projects;
