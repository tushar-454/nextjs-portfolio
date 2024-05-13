import { TechSkill } from '@/Data/techSkills';

interface TeckSkillBarProps {
  skill: TechSkill;
}

const TeckSkillBar: React.FC<TeckSkillBarProps> = ({ skill }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between text-neutral-900 dark:text-neutral-200'>
        <p>{skill.name}</p>
        <p>{skill.percentage}</p>
      </div>
      <div className='relative h-3 w-full rounded-full border shadow-inner'>
        <span
          style={{ width: skill.percentage }}
          className='block h-full cursor-pointer rounded-full bg-emerald-500'
        ></span>
      </div>
    </div>
  );
};

export default TeckSkillBar;
