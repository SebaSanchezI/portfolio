import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pirenariumImg from "@/public/pirenarium.png";
import integraImg from "@/public/integra.png";
import storeChallengeImg from "@/public/store-challenge.png";
import { SectionName } from "@/global/models/shared.type";
import { VerticalTimelineItem } from "@/components/experience";

export const links = [
  {
    name: SectionName.home,
    hash: "#home",
  },
  {
    name: SectionName.about,
    hash: "#about",
  },
  {
    name: SectionName.projects,
    hash: "#projects",
  },
  {
    name: SectionName.skills,
    hash: "#skills",
  },
  {
    name: SectionName.experience,
    hash: "#experience",
  },
  {
    name: SectionName.contact,
    hash: "#contact",
  },
] as const;

export const experiencesData: VerticalTimelineItem[] = [
  {
    title: "Graduated Domingo Guzman Silva Institute",
    location: "Santa Fe, Santa Fe, Argentina.",
    description:
      "I graduated after 3 years of studying. I learned the basics of software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2013",
  },
  {
    title: "Graduated Soy Henry bootcamp",
    location: "Santa Fe, Santa Fe, Argentina.",
    description:
      `I graduated after 5 months of studying.
       I learned the basics of the Web Development, from the Frontend to the Backend.
       I immediately found a job as a front-end developer.`,
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, Florida, USA.",
    description:
      `I've worked as a front-end developer for the last 2 years and half.
      The main technology is React Js but I worked with others like Angular and Vue.
      I work in multidisciplinary teams with agile methodologies.`,
    icon: React.createElement(FaReact),
    date: "2021 - present",
  }
];

export const projectsData = [
  {
    title: "Pirenarium Hotel",
    description:
      `I worked as a Front-end developer on this project. 
      This is a landing page of a hotel in Spain.
      It has Dark mode and Internacionalization (Spanish and English).`,
    tags: ["React", "Typescript", "Material UI"],
    imageUrl: pirenariumImg,
    github: 'https://github.com/SebaSanchezI/pirenarium',
    web: 'https://sebasanchezi.github.io/pirenarium/'
  },
  {
    title: "Integra",
    description:
      `Integra is an app oriented to the health branch.
      Integra App is a project carried out by 8 people within the Soy Henry bootcamp. 
      SCRUM was implemented as agile methodology, with weekly sprint.  
      `,
    tags: ["React", "Redux", "Material UI", "Firebase", "Supabase"],
    imageUrl: integraImg,
    github: 'https://github.com/Ululette/IntegraApp',
    web: 'https://integra-platform.web.app/'
  },
  {
    title: "Store Challenge",
    description:
      `Design and development of a RESTful web application to manage the users of different stores.
      It offers a Login, CRUD, and statistics dynamically.`,
    tags: ["React", "Redux", "Material UI", "Node JS", "Express JS", "Sequelize", "Postgres", "Swagger"],
    imageUrl: storeChallengeImg,
    github: 'https://github.com/SebaSanchezI/StoresChallenge',
    web: ''
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Redux",
  "PostgreSQL",
  "Git",
  "Tailwind",
  "Styled components",
  "Framer Motion",
] as const;
