import foodDeliveryThumb from '@/assets/foodDeliveryThumb.webp';
import homeMakeCakeThumb from '@/assets/homeMadeCakeThumb.webp';
import medicineStoreThumb from '@/assets/medicineStoreThumb.webp';
import newforgeThumb from '@/assets/newforgeThumb.webp';
import pulsepointThumb from '@/assets/pulsepointThumb.webp';
import sparrowThumb from '@/assets/sparrow.webp';
import storeitThumb from '@/assets/storeitThumb.webp';

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
export const projectsDatabase: ProjectData[] = [
  {
    thumb: storeitThumb,
    title: 'StoreIt',
    description:
      'StoreIt is a full-stack NextJS project with TypeScript, Tailwind CSS, React-Redux, Redux Toolkit, RTK Query, and Appwrite for backend. It clone for Google Drive. Users can upload files, share files with others, and manage their files. The project also includes user authentication, file management.',
    techstack: [
      'NextJS',
      ' TypeScript',
      ' Tailwind',
      ' React-Redux',
      ' Redux Toolkit',
      ' RTK Query',
      ' Appwrite',
    ],
    links: {
      live: 'https://mystore-two-swart.vercel.app',
      frontend: 'https://github.com/tushar-454/mystore',
      backend: 'https://github.com/tushar-454/mystore',
    },
  },
  {
    thumb: foodDeliveryThumb,
    title: 'Food Delivery App',
    description:
      'This project is a full-stack food delivery application that allows users to browse foods, view menus, add items to their cart, and place orders. Users can also view their order history, costs, and cancel orders. Admins have a dedicated dashboard to oversee site-wide operations, manage users, products, and orders. This project incorporates user authentication, product management, order tracking, and an admin panel for seamless administration.',
    techstack: [
      'React',
      ' TypeScript',
      ' Tailwind',
      ' React-Redux',
      ' Redux Toolkit',
      ' SSL Commerz Payment Gateway',
      ' Node.js',
      ' Express',
      ' Mongoose',
      ' MongoDB',
      ' JWT',
    ],
    links: {
      live: 'https://food-delivery-frontend-wine.vercel.app/',
      frontend: 'https://github.com/tushar-454/food-delivery-frontend',
      backend: 'https://github.com/tushar-454/food-delivery-backend',
    },
  },
  {
    thumb: homeMakeCakeThumb,
    title: 'Mini Store',
    description:
      'Build a comprehensive e-commerce web application where users can browse products, add items to their cart, create wishlists, and manage their profiles. Users can view their order history, costs, and cancel orders. Admins have a dedicated dashboard to oversee site-wide operations, manage users, products, and orders. This project incorporates user authentication, product management, order tracking, and an admin panel for seamless administration.',
    techstack: [
      'React',
      ' TypeScript',
      ' Tailwind',
      ' Tanstack Query',
      ' Node.js',
      ' Express',
      ' Mongoose',
      ' MongoDB',
      ' JWT',
    ],
    links: {
      live: 'https://mini-store-eight.vercel.app/',
      frontend: 'https://github.com/tushar-454/ecommerce-ms',
      backend: 'https://github.com/tushar-454/ecommerce-ms-backend',
    },
  },
  {
    thumb: medicineStoreThumb,
    title: 'Online Medicine Store',
    description:
      'The Medicine E-Commerce project aims to provide a convenient platform for users to purchase medicines online. It allows users to browse through a wide range of medicines, add them to their cart, and complete the purchase securely. The frontend is responsible for providing an intuitive user interface that enables users to interact with the platform seamlessly.',
    techstack: [
      'NextJS',
      ' Tailwind',
      ' Redux Toolkit',
      ' Redux Persist',
      ' Node.js',
      ' Node Mailer',
      ' Express',
      ' Mongoose',
      ' MongoDB',
      ' JWT',
    ],
    links: {
      live: 'https://healthifyrx.vercel.app/',
      frontend: 'https://github.com/tushar-454/medicine-e-commerce-frontend',
      backend: 'https://github.com/tushar-454/medicine-e-commerce-backend',
    },
  },
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
