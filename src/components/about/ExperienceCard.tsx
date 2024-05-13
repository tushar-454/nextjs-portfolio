import { Experience } from '@/Data/experiences';
import { BiSolidInstitution } from 'react-icons/bi';
import { SlCalender, SlLocationPin } from 'react-icons/sl';

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { position, type, company, location, startDate, endDate, atPresent } =
    experience;
  return (
    <div className='mb-10 w-full space-y-2 border-b pb-5 md:w-[768px]'>
      <div className='flex items-center justify-between gap-10'>
        <h3 className='text-2xl font-medium text-neutral-900 dark:text-neutral-300'>
          {position}
        </h3>
        <p className='whitespace-nowrap rounded-full bg-emerald-300 p-1 px-3 text-xs text-black'>
          {type}
        </p>
      </div>
      <div className='flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-10'>
        <h4 className='flex items-center gap-2 text-lg text-neutral-500'>
          <BiSolidInstitution />
          {company}
        </h4>
        <p className='flex items-center gap-2 text-lg font-light text-neutral-500'>
          <SlLocationPin />
          {location}
        </p>
        <p className='flex items-center gap-1 font-light text-neutral-500'>
          <SlCalender />
          <span>{startDate}</span> --{' '}
          <span>{atPresent ? 'At Present' : endDate}</span>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
