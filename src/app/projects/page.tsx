import projectsDatabase, { ProjectData } from '@/Data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import Container from '@/components/shared/Container';
import PageHead from '@/components/shared/PageHead';

const page = () => {
  return (
    <main className='bg-neutral-100 dark:bg-[#191919]'>
      <Container>
        <PageHead title='Projects' description='Things I’ve built so far' />
        <div className='grid grid-cols-1 gap-3 py-20 sm:grid-cols-2 lg:grid-cols-3'>
          {projectsDatabase?.map((project: ProjectData, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default page;
