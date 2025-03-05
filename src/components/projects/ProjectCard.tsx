import githubIco from '@/assets/githubico.svg';
import liveIco from '@/assets/live.svg';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    thumb: string;
    title: string;
    description: string;
    techstack: string[];
    links: {
      live: string;
      frontend: string;
      backend: string;
    };
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { description, links, techstack, thumb, title } = project;
  return (
    <div
      data-aos='zoom-in'
      data-aos-duration='1000'
      className='flex flex-col rounded-2xl rounded-br-2xl bg-neutral-50 shadow-xl dark:bg-neutral-800'
    >
      <Image
        src={thumb}
        width={1080}
        height={720}
        alt={title}
        className='rounded-t-2xl shadow'
      />
      <div className='flex h-full flex-col p-5'>
        <h1 className='text-2xl font-medium text-neutral-600 dark:text-neutral-100'>
          {title}
        </h1>
        <p className='mt-2 flex-grow text-lg font-light text-neutral-600 dark:text-neutral-100'>
          {description.slice(0, 200)} . . .
        </p>
        <p className='my-4 text-neutral-600 dark:text-neutral-200'>
          Tech stack:{' '}
          <span className='font-light italic'>{techstack.toString()}</span>
        </p>
        <div className='flex items-center justify-between'>
          <Link
            passHref={true}
            href={links.frontend}
            target='_blank'
            className='flex items-center justify-center gap-1 font-medium text-neutral-600 underline underline-offset-2 dark:text-neutral-300'
          >
            <Image
              src={githubIco}
              className='invert-0 dark:invert'
              alt='github icon'
            />{' '}
            Frontend
          </Link>
          <Link
            passHref={true}
            href={links.live}
            target='_blank'
            className='group relative cursor-pointer'
          >
            <Image
              src={liveIco}
              className='invert-0 dark:invert'
              alt='live link icon'
            />
            <p
              id='tooltrip'
              className='invisible absolute -top-6 left-2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black px-2 py-1 text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100'
            >
              Click for Live Preview
            </p>
          </Link>

          <Link
            passHref={true}
            href={links.backend}
            target='_blank'
            className='flex items-center justify-center gap-1 font-medium text-neutral-600 underline underline-offset-2 dark:text-neutral-300'
          >
            <Image
              src={githubIco}
              className='invert-0 dark:invert'
              alt='github icon'
            />{' '}
            Backend
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
