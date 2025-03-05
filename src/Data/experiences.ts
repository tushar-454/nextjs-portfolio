export type Experience = {
  position: string;
  type: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  atPresent: boolean;
};

export const experiences: Experience[] = [
  {
    position: 'Frontend Developer (React)',
    type: 'Internship',
    company: 'MonsterDevs Ltd',
    location: 'Rangpur, Bangladesh',
    startDate: '10-10-2024',
    endDate: 'At Present',
    atPresent: true,
  },
];
