import type { Technology } from "@/lib/types";

export const technologiesIntro = {
  eyebrow: "04 / Stack",
  title: "Technologies we build with.",
  description:
    "Tools we use when they fit the product. A single project will not use every item on this list.",
};

export const technologies: Technology[] = [
  { name: "React", group: "Frontend", brand: "#61DAFB", logo: "/tech/react.svg" },
  { name: "Next.js", group: "Frontend", brand: "#000000", logo: "/tech/nextjs.svg" },
  { name: "JavaScript", group: "Languages", brand: "#F7DF1E", logo: "/tech/javascript.svg" },
  { name: "TypeScript", group: "Languages", brand: "#3178C6", logo: "/tech/typescript.svg" },
  { name: "Python", group: "Languages", brand: "#3776AB", logo: "/tech/python.svg" },
  { name: "Node.js", group: "Backend", brand: "#339933", logo: "/tech/nodejs.svg" },
  { name: "Django", group: "Backend", brand: "#092E20", logo: "/tech/django.svg" },
  { name: "FastAPI", group: "Backend", brand: "#009688", logo: "/tech/fastapi.svg" },
  { name: "REST APIs", group: "Backend", brand: "#2B1A10", logo: "/tech/rest.svg" },
  { name: "MongoDB", group: "Data", brand: "#47A248", logo: "/tech/mongodb.svg" },
  { name: "PostgreSQL", group: "Data", brand: "#336791", logo: "/tech/postgresql.svg" },
  { name: "MySQL", group: "Data", brand: "#4479A1", logo: "/tech/mysql.svg" },
  { name: "AWS", group: "Infrastructure", brand: "#FF9900", logo: "/tech/aws.svg" },
  { name: "Docker", group: "Infrastructure", brand: "#2496ED", logo: "/tech/docker.svg" },
  { name: "Git", group: "Infrastructure", brand: "#F05032", logo: "/tech/git.svg" },
];
