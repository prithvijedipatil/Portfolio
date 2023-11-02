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
    title: "ReactJS",
    icon: web,
  },
  {
    title: "HTML,CSS,Javascript",
    icon: mobile,
  },
  {
    title: "TailWind,Styled Component & Framer",
    icon: backend,
  },
  {
    title: "Next JS, Three JS",
    icon: creator,
  },
];

const technologies = [
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: nodejs,
  },
  {
    name: "Figma",
    icon: shopify,
  },
  
 
  
  
];

const experience = [
  {
    title: "InstaCast - Podcast Platform",
    company_name: "AccioJob",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Airbnb",
    company_name: "AccioJob",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Developed user-centric web applications with a focus on real-time data integration, interactive mapping, and dynamic search functionalities.",
      " It highlights my proficiency in using modern web development tools to provide users with an immersive and efficient travel accommodation search experience.",
      "Leveraged the Next.js framework to build a responsive and high-performance web application that provides a seamless user experience.",
,     "Employed Tailwind CSS to create a clean and beautiful UI with minimal design, ensuring a visually appealing and intuitive user interface.",
     "Integrated Rapid API to provide real-time accommodation data, enabling dynamic search and interactive map navigation for an improved user experience."
     
    ],
  },
  {
    title: "UI UX Research & Design",
    company_name: "Design Boat",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "A personalised fitness App. Design and prototyping using Figma",
      "Detailed approach with Defining the problem, Researching the competitors and solutions, Analysis of customers, Planning the features, Design approach ",
      "protyping and finally testing the app to sudo launching",
    ],
  },
  {
    title: "Youtube Clone",
    company_name: "AccioJob",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Handled working with external APIs, data retrieval and manipulation, and created user-friendly web applications, all while replicating the functionality of a popular platform like YouTube.",
      "Leveraged the YouTube Google API to access and display video content, demonstrating competence in API integration and data retrieval",
      "Implemented video playback and search functionalities, allowing users to browse and view content similar to the real YouTube platform.",

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
    name: "Airbnb Clone",
    description:
      "Web-based platform that allows users to search for Airbnbs",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "TailWind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/prithvijedipatil/AirbnbClone",
  },
  {
    name: "Podcast Platform",
    description:
      "Web Application that allows users to stream and upload podcast",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/prithvijedipatil/PodCast",
  },
  {
    name: "Youtube Clone",
    description:
      "Web application to search for all the videos and comments from Youtube",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/prithvijedipatil/YouTubeClone",
  },
];

export { services, technologies, experience, testimonials,projects };
