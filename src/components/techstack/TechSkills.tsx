import { TechSkill, techSkills } from '@/Data/techSkills';
import { TeckSkillBar } from './TeckSkillBar';

const TechSkills = () => {
  return (
    <div className='space-y-5 py-20 pb-32'>
      {techSkills.map((skill: TechSkill, index: number) => (
        <TeckSkillBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export { TechSkills };
