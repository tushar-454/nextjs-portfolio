import techSkills, { TechSkill } from '@/Data/techSkills';
import TeckSkillBar from './TeckSkillBar';

const TechSkills = () => {
  return (
    <div className='space-y-5 py-20'>
      {techSkills.map((skill: TechSkill, index: number) => (
        <TeckSkillBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export default TechSkills;
