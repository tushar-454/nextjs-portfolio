import projectsDatabase, { ProjectData } from '@/Data/projects';
import ProjectCard from './ProjectCard';

const ProjectCards = () => {
  return (
    <div className='my-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
      {projectsDatabase?.map((project: ProjectData, index: number) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
