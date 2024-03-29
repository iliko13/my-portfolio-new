import barbieImg from "@/public/barbie.png";
import portfolioImg from "@/public/portfolio-screenshot.png";
import nikeShoes from "@/public/NikeShoes.png";
import carRent from "@/public/carRent.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Nike-Shoes",
    description:
      "I worked as a frontend developer on this project project for a week. ",
    tags: [
      "React",
      "Next",
      "Sanity",
      "Framer-motion",
      "Tailwind",
      "Typescript",
    ],
    imageUrl: nikeShoes,
    link: "https://nike-shoes-app.vercel.app/",
  },
  {
    title: "Car-Rent",
    description:
      "I worked as a frontend developer on this startup project for 2 weeks. Users can give public feedback to companies.",
    tags: ["React", "Next", "Tailwind", "Typescript"],
    imageUrl: carRent,
    link: "https://car-appliaction.vercel.app/",
  },
  {
    title: "Movie-app",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Framer-motion", "Tailwind"],
    imageUrl: barbieImg,
    link: "https://movie-x-app.netlify.app",
  },
  {
    title: "My-portfolio",
    description: "This is my first portfolio. ",
    tags: ["React", "Framer-motions", "Typescript", "Tailwind", "React-hooks"],
    imageUrl: portfolioImg,
    link: "https://iliko-portfolio.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Jest",
  "Testing-library",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
