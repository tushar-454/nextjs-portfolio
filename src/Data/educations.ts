export type Education = {
  position: string;
  type: string;
  institute: string;
  startDate: string;
  endDate: string;
  atPresent: boolean;
};

const educations: Education[] = [
  {
    position: 'Honors Secound Year, Mathematics',
    type: 'Undergraduate',
    institute: 'Dhaka College',
    startDate: '2023-06-01',
    endDate: '',
    atPresent: true,
  },
];

export default educations;
