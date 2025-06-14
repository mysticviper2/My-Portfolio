const navLinks = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Projects Delivered" },
    { value: 2, suffix: "+", label: "AI-Enhanced Tools Integrated" },
    { value: 100, suffix: "%", label: "Curiosity for Clean Code & Creative Solutions" },
  ];
  
  const myProjects = [
    {
      title: 'TravelPhobia - AI Travel Planner',
      desc: 'TravelPhobia is a next-gen AI travel planning assistant powered by Google’s Gemini GenAI. Harnessing the capabilities of GenAI, the platform delivers highly personalized itineraries, dynamic route optimization, and instant travel insights—empowering users to effortlessly design memorable journeys with smart, adaptive guidance.',
      subdesc:
        'Developed as a SaaS platform using React Router, Tailwind CSS, and Google Gemini, TravelPhobia ensures high performance, scalability, and an exceptional user experience for today’s travelers.',
      href: 'https://github.com/ArvindTitiyal/AI-Travel-Agent',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
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
      ],
    },
    // {
    //   title: ' Healthcare Platform ',
    //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    //   subdesc:
    //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    //   texture: '/textures/project/project2.mp4',
    //   logo: '/assets/project-logo2.png',
    //   logoStyle: {
    //     backgroundColor: '#13202F',
    //     border: '0.2px solid #17293E',
    //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
    //   },
    //   spotlight: '/assets/spotlight2.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    {
      title: 'CarePulse - Healthcare Platform ',
      desc: 'Developed a robust healthcare management platform using React and TypeScript to streamline patient registration, appointment scheduling, and medical record handling, with a strong focus on usability, responsiveness, and automation.',
      subdesc:
        'With a focus on efficiency, CarePulse Used React Context API for state management, Tailwind CSS for responsive design, and integrated Twilio for SMS-based appointment reminders.',
      href: 'https://github.com/ArvindTitiyal/Healthcare-Platform',
      logo: '/assets/project-logo3.png',
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
      ],
    },
    {
      title: 'More Porojects Coming Soon!',
      desc: 'Stay tuned for more exciting projects that showcase my skills and creativity. I am constantly working on new ideas and innovations to bring to life.',
      subdesc:
        'Check back soon to see the latest additions to my portfolio, where I push the boundaries of technology and design.',
      href: 'https://github.com/ArvindTitiyal',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
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
          name: 'Next.js',
          path: '/assets/Next.png',
        },
        {
          id: 5,
          name: 'GenAI',
          path: '/assets/AI.png',
        },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];

  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Writing clean, scalable code with pixel-perfect precision — every component matters.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
    {
      imgPath: "/images/ai.png",
      title: "GenAI Ready",
      desc: "Exploring LLMs, agents, and workflow automation to build smarter, context-aware features.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "JavaScript",
      imgPath: "/images/logos/JavaScript.png",
    },
    {
      name: "TypeScript",
      imgPath: "/images/logos/TypeScript.png",
    },
    {
      name: "Python",
      imgPath: "/images/logos/Python.png",
    },
    {
      name: "C#",
      imgPath: "/images/logos/CSharp.png",
    },
    {
      name: "C",
      imgPath: "/images/logos/C.png",
    },
    {
      name: "C++",
      imgPath: "/images/logos/CPP.png",
    },
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Redux",
      imgPath: "/images/logos/Redux.png",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Docker",
      imgPath: "/images/logos/Docker.png",
    },
    {
      name: "Git",
      imgPath: "/images/logos/Git.png",
    },
    {
      name: "GitHub",
      imgPath: "/images/logos/GitHub.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "HTML",
      imgPath: "/images/logos/HTML5.png",
    },
    {
      name: "CSS",
      imgPath: "/images/logos/CSS3.png",
    },
    {
      name: "Tailwind CSS",
      imgPath: "/images/logos/Tailwind CSS.png",
    },
    {
      name: ".NET",
      imgPath: "/images/logos/NET core.png",
    },
    {
      name: "Next.js",
      imgPath: "/images/logos/Next.png",
    },
    {
      name: "Visual Studio",
      imgPath: "/images/logos/VSCode.png",
    },
    {
      name: "Vite",
      imgPath: "/images/logos/Vite.png",
    },

  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/siemens.png",
      logoPath: "/images/siemensLogo.png",
      title: "Software Developer Engineer",
      date: "March 2022 - Present",
      responsibilities: [
        "Developed and maintained the PCS-NEO project, a web-based Distributed Control System (DCS) using C# and React.",
        "Led the implementation of a critical safety feature, enhancing application reliability and compliance with industry standards.",
        "Debugged and resolved high-priority bugs, ensuring seamless user experience and meeting project deadlines.",
        "Optimized web applications for maximum speed and scalability by 30%.",
        "Collaborated with cross-functional teams to implement TDD, Agile methodologies.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Laxmi Narayan Behera",
      mentions: "SDE@SIEMENS",
      review:
        "Honestly, Arvind is one of the most dependable devs I've worked with. Their ability to integrate frontend requirements without messing up APIs or logic is insane. Code reviews with them were always a breeze!",
      imgPath: "/images/LN.png",
    },
    {
      name: "Justin Josheph",
      mentions: "Staff AI Engineer@Analog Device",
      review:
        "Loved teaming up with Arvind! They were super quick to pick up GenAI concepts and actually applied them in real-world frontend and backend flows. Their ability to blend AI with clean UI design made a huge difference in our project’s innovation. Definitely someone who’s future-ready",
      imgPath: "/images/Justin.png",
    },
    {
      name: "Srinidhi",
      mentions: "UI/UX Developer@SIEMENS",
      review:
        "I loved collaborating with Arvind! They really respected design decisions and always found smart ways to implement UI with pixel-perfect precision. Super chill and very easy to brainstorm with too!",
      imgPath: "/images/Sri.png",
    },
    {
      name: "Arun",
      mentions: "AI Engineer@SIEMENS",
      review:
        "Arvind just gets it. Whether it's React magic or pushing for better performance, they always brought great ideas to the table. Plus, they genuinely care about code quality and user experience.",
      imgPath: "/images/Arun.png",
    },
    {
      name: "Gunjan",
      mentions: "Senior Frontend Developer@BottomLine | Ex-Frontend@SIEMENS",
      review:
        "Honestly, Arvind is the kind of frontend dev you want on your team. Clean code, scalable components, and always thinking about the bigger system. Also, suggesting AI-driven user experiences, they brought serious value. Super collaborative and always learning new stuff!",
      imgPath: "/images/Gunjan.png",
    },
    {
      name: "Ritika",
      mentions: "DevOps Engineer@SIEMENS",
      review:
        "Working with Arvind has been an absolute game-changer. Their backend understanding and clear communication made our deployments smoother and more efficient. Super reliable, and always thinking two steps ahead!",
      imgPath: "/images/Ritika.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/ig_dexi_op",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/profile.php?id=100010132185499",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      url: "https://x.com/xD_DexTerOP",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/arvind-titiyal-12a116165/",
      imgPath: "/images/linkedin.png",
    },
    {
      name: "leetcode",
      url: "https://leetcode.com/u/DexTer0P/",
      imgPath: "/images/leetcodee.png",
    },
  ];
  
  export {
    words,
    abilities,
    myProjects,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };