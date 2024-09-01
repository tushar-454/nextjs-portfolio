import { TechSkill } from '@/Data/techSkills';

interface TeckSkillBarProps {
  skill: TechSkill;
}

const TeckSkillBar: React.FC<TeckSkillBarProps> = ({ skill }) => {
  return (
    <div data-aos='fade-down' className='flex flex-col gap-2'>
      <div className='flex items-center justify-between text-neutral-900 dark:text-neutral-200'>
        <p>{skill.name}</p>
        <p>{skill.percentage}</p>
      </div>
      <div className='relative h-3 w-full overflow-x-hidden rounded-full border shadow-inner'>
        <span
          data-aos='fade-right'
          data-aos-duration='700'
          style={{ width: skill.percentage }}
          className='block h-full cursor-pointer rounded-full bg-emerald-500'
        ></span>
      </div>
    </div>
  );
};

export default TeckSkillBar;
