import { ProjectData, projectsDatabase } from '@/Data/projects';
import { ProjectCard } from './ProjectCard';

const ProjectCards = () => {
  return (
    <div className='my-20 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
      {projectsDatabase
        ?.slice(0, 3)
        ?.map((project: ProjectData, index: number) => (
          <div key={index} data-aos='zoom-in' data-aos-duration='1000'>
            <ProjectCard project={project} />
          </div>
        ))}
    </div>
  );
};

export { ProjectCards };
