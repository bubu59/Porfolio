import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    crowdfunding_5,
    avaxgods,
    me3,
    one,
    affable2,
    stockpile
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Frontend Engineer",
      company_name: "Me3",
      icon: me3,
      iconBg: "#383E56",
      date: "Dec 2022 - Mar 2023",
      points: [
        "Collaborated with UI/UX designer, product manager, and other developers to create a non-custodial wallet web-application.",
        "Worked with backend team to test and integrate proprietary software with NextJS which reduced wallet onboarding time by more than 30 secs.",
        "Developed main wallet dashboard interface as well as onboarding screens.",
        "Worked with Senior Engineer to develop a chrome extension wallet POC which involved refactoring code for multi-chain wallet generation as well as handling client private-key management"
      ],
    },
    {
      title: "Data-Analyst/Python Developer",
      company_name: "Ocean Network Express",
      icon: one,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Nov 2022",
      points: [
        "Developed, designed and implemented 1 of 4 Forecasting logics to capture seasonal return trends of shipping containers.",
        "Improved forecast accuracy by 5 percent through actively analyzing and tuning forecast parameters.",
        "Carried out weekly forecast analysis to identify critical areas of disruption and provide recommendations for forecast adjustments.",
      ],
    },
    {
      title: "Data Scientist Trainee",
      company_name: "Affable.io",
      icon: affable2,
      iconBg: "#383E56",
      date: "Jan 2021 - Dec 2021",
      points: [
        "Build classification models using various Machine Learning models to identify key metrics in achieving high impact Marketing Campaigns.",
        "Develop algorithms using Natural Language Processing and Deep Learning models to provide clients with real-time feedback on user's sentiment.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Kickstarter_3.0",
      description:
        "Web-based platform that allows users to create, view, and donate to crowdfunding campaigns directly through the Ethereum testnet.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "hardhat",
          color: "orange-text-gradient",
        },
        {
          name: "thirdweb",
          color: "violet-text-gradient",
        },
      ],
      image: crowdfunding_5,
      source_code_link: "https://github.com/bubu59/Kickstarter_3.0.git",
    },
    {
      name: "AVAXGODS",
      description:
        "Web application that enables users to create and join live battles, choose your battleground, and battle other players in real-time on the Avalanche testnet.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name:  "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "hardhat",
          color: "orange-text-gradient",
        },
        {
          name: "openzeppelin",
          color: "violet-text-gradient",
        },
      ],
      image: avaxgods,
      source_code_link: "https://github.com/bubu59/AvaxGods.git",
    },
    {
      name: "Stockpile",
      description:
        "Web application that enables users to create and contribute to fundraisers in real-time on the Solana mainnet.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "anchor-rust",
          color: "green-text-gradient",
        },
        {
          name:  "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "@solana/web3js",
          color: "orange-text-gradient",
        },
      ],
      image: stockpile,
      source_code_link: "https://github.com/StockpileProtocol/stockpile",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };