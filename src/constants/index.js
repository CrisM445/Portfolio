export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Justin',
      position: 'Team Member',
      img: 'assets/review1.png',
      review:
      'Working with Crismery was amazing because she made sure language was never a barrier for me. Since my first language is Spanish, there were times when I didn’t fully understand certain instructions in English. Crismery, who speaks Spanish, would always take the time to translate and explain things to me clearly. Her effort made it so much easier for me to contribute to the project confidently.',
    },
    {
      id: 2,
      name: 'Carmen',
      position: 'Team Member',
      img: 'assets/review2.png',
      review:
        'Crismery was always incredibly helpful and made sure to let me know that if I ever needed help with my part of the project, she’d be there. She also went out of her way to check in and make sure I was doing okay with my tasks. Her support and encouragement created a great working environment and made the project run so much smoother.',
    },
    {
      id: 3,
      name: 'Ana',
      position: 'Team Member',
      img: 'assets/review3.png',
      review:
        'Crismery went above and beyond to help me when I was stuck on a bug in my code, even though it was my section of the project. I texted her half an hour before her class, and she still took the time to respond and guide me through the solution. Her willingness to step in, even when it wasn’t convenient, made a huge impact and showed how much of a team player she is.',
    },
    {
      id: 4,
      name: 'Liam',
      position: 'Team Member',
      img: 'assets/review4.png',
      review:
        'Crismery was a huge motivator for me throughout the project. When I was struggling to complete my part or felt overwhelmed, she always pushed me to keep going and made things easier by answering my questions and helping me when I was confused. Thanks to her, the project felt much more manageable, and I had a great experience working on it.',
    },
  ];
  
  export const myProjects = [

    {
      title: 'DocuShare',
      desc: 'DocuShare is a real-time collaborative document editing platform designed to enhance productivity for teams and organizations. It allows multiple users to edit documents simultaneously, with live presence indicators and collaborative cursors ensuring a seamless editing experience.',
      subdesc:
        'The platform incorporates Clerk for secure user authentication and role-based access control, onboarding over 100 users with streamlined registration and document permissions. It utilizes Node.js for efficient backend operations, handling document creation, storage, and management. Built with Next.js, Liveblocks, and Tailwind CSS, DocuShare delivers a responsive and intuitive interface optimized for real-time collaboration.',
      href: 'https://youtu.be/XnuFx6v8XuM',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
        {
            id: 5,
            name: 'XML',
            path: '/assets/xml.png',
          },
          {
            id: 6,
            name: 'Java',
            path: '/assets/java.png',
          },
          {
            id: 7,
            name: 'Android',
            path: '/assets/android.png',
          },
      ],
    },

    {
      title: 'HealthCare Scheduling System',
      desc: 'HealthCare Scheduling System is a robust healthcare management platform designed to simplify essential clinic workflows. It streamlines operations such as patient registration, appointment scheduling, and administrative tools, enhancing efficiency for both providers and patients.',
      subdesc:
        'The system integrates real-time error monitoring with Sentry to minimize troubleshooting time, leverages Tailwind CSS for responsive UI across devices, and employs Appwrite and Node.js for a secure backend, ensuring seamless data handling. By combining advanced technologies like Next.js, React, and Zod, it delivers a reliable and user-friendly experience tailored for healthcare professionals.',
      href: 'https://youtu.be/IZ-Te2tWPNY',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
        {
            id: 5,
            name: 'XML',
            path: '/assets/xml.png',
          },
          {
            id: 6,
            name: 'Java',
            path: '/assets/java.png',
          },
          {
            id: 7,
            name: 'Android',
            path: '/assets/android.png',
          },
      ],
    },
    
    {
      title: 'Workout App',
      desc: 'Workout App is a fitness tracking Android application designed to enhance user engagement and promote healthier lifestyles. The app includes features like user authentication, personalized workout routines, instructional videos, and location-based gym or park searches, resulting in a 40% increase in user engagement.',
      subdesc:
        'It integrates Firebase for real-time data synchronization and Google Maps API for dynamic location services, improving data retrieval efficiency by 10%. Built with Java, the app follows Material Design principles to provide an intuitive and responsive user experience, leveraging RecyclerView and ConstraintLayout for seamless navigation. Interactive features such as workout tracking and personalized exercise plans contributed to a 25% improvement in user retention.',
      href: 'https://youtu.be/1Vw8aDF3dwA',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
        {
            id: 5,
            name: 'XML',
            path: '/assets/xml.png',
          },
          {
            id: 6,
            name: 'Java',
            path: '/assets/java.png',
          },
          {
            id: 7,
            name: 'Android',
            path: '/assets/android.png',
          },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Full Stack Development',
      pos: '',
      duration: '',
      title: "I specialize in designing and developing full stack solutions that combine efficient back-end systems with intuitive user interfaces. My experience spans creating robust applications using frameworks like React.js, Next.js, and Node.js, while ensuring seamless database integration. I take pride in delivering systems optimized for scalability and performance, leveraging modern tools to create solutions tailored to user needs. Whether it's debugging complex workflows or implementing responsive designs, I bring precision and reliability to every project.",
      icon: '/assets/fullStack.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Android Development',
      pos: '',
      duration: '',
      title: "I have a passion for building Android applications that focus on delivering user-centric experiences. With a strong foundation in Java and Android Studio, I’ve developed apps that integrate real-time features, dynamic UI components, and API-driven functionality. I excel at designing apps that are not only functional but also visually engaging, adhering to Material Design principles. From prototyping to deployment, I ensure my apps are optimized for performance and usability, providing seamless and impactful user interactions.",
      icon: '/assets/android.png',
      animation: 'clapping',
    },
    {
        id: 3,
        name: 'Leadership and Technical Mentorship',
        pos: '',
        duration: '',
        title: "I thrive in team environments where collaboration and support drive success. Beyond technical contributions, I actively mentor and motivate teammates to overcome challenges and achieve shared goals. I believe in fostering a positive environment by sharing knowledge, addressing concerns, and ensuring clarity in complex technical tasks. My ability to adapt to team dynamics and provide hands-on support makes me a reliable and effective contributor to any project.",
        icon: '/assets/leadership.png',
        animation: 'salute',
      },
  ];