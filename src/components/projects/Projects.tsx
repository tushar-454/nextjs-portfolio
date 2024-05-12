import Container from '../shared/Container';
import SectionHead from '../shared/SectionHead';
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section className='bg-neutral-100 pb-16 pt-40 dark:bg-[#191919]'>
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
