import newforgeThumb from '@/assets/newforgeThumb.webp';
import pulsepointThumb from '@/assets/pulsepointThumb.webp';
import sparrowThumb from '@/assets/sparrow.webp';
export type ProjectData = {
  thumb: any;
  title: string;
  description: string;
  techstack: string[];
  links: {
    live: string;
    frontend: string;
    backend: string;
  };
};
const projectsDatabase: ProjectData[] = [
  {
    thumb: sparrowThumb,
    title: 'Sparrow MFT',
    description:
      'Sparrow is a web and mobile financial application designed to facilitate transactions between users, managed by roles such as admin, agent, and customer. The application uses MongoDB for user authentication and data storage, JWT for user authorization, React and Tailwind for frontend development, and Node.js with Express and Mongoose for the backend. The application ensures a responsive design to provide a seamless experience across all devices.',
    techstack: [
      'React',
      ' Tailwind',
      ' Tanstack Query',
      ' Node.js',
      ' Express',
      ' Mongoose',
      ' MongoDB',
      ' JWT',
    ],
    links: {
      live: 'https://sparrower.netlify.app/home',
      frontend: 'https://github.com/tushar-454/sparrow',
      backend: 'https://github.com/tushar-454/sparrow-backend',
    },
  },
  {
    thumb: pulsepointThumb,
    title: 'Pulse Point',
    description:
      'The Doctor Portal Web App is a comprehensive solution that aims to streamline the healthcare experience for patients by providing an easy-to-use platform to find, learn about, and schedule appointments with doctors. This web application also allows users to create and manage their profiles, submit reviews for doctors, and access other relevant features to enhance their healthcare journey.',
    techstack: [
      'NextJS',
      ' Tailwind',
      ' Node.js',
      ' Express',
      ' Mongoose',
      ' MongoDB',
      ' JWT',
      ' AOS',
    ],
    links: {
      live: 'https://pulse-points.vercel.app/',
      frontend: 'https://github.com/tushar-454/pulse-point-frontend',
      backend: 'https://github.com/tushar-454/pulse-point-backend',
    },
  },
  {
    thumb: newforgeThumb,
    title: 'News sharing Hub',
    description:
      'This project is a full-stack newspaper or Articles sharing platform. Users can read, write, update, and delete articles. Admins can manage users, articles, Dashboard, Publication and statistics.',
    techstack: [
      'ReactJS',
      ' Tailwind',
      ' Node.js',
      ' Express',
      ' Mongoose',
      ' MongoDB',
      ' JWT',
    ],
    links: {
      live: 'https://news-forge-hub.web.app/',
      frontend: 'https://github.com/tushar-454/news-forge-hub-front-end',
      backend: 'https://github.com/tushar-454/news-forge-hub-backend',
    },
  },
];

export default projectsDatabase;
