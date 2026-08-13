import ProjectsText from "./ProjectsText";
import FeaturedProjects from "./FeaturedProjects";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [

  {
    name: "Xposed casino tools and merch store Web app",
    year: "Aug2026",
    align: "left",
    image: "/images/xposed.png",
    stack: 'PHP',
    link: "https://xposed.wasmer.app/",
  },

  {
    name: "The Catholic Photographer (portfolio/gallery) Website",
    year: "Aug2026",
    align: "right",
    image: "/images/catholic-photographer.png",
    stack: 'PHP',
    link: "https://the-catholic-photographer.wasmer.app/",
  },

  {
    name: "The Cross (Online Store)",
    year: "July2026",
    align: "left",
    image: "/images/the-cross.png",
    stack: 'PHP',
    link: "https://the-cross.wasmer.app/",
  },

  {
    name: "Dennise Clemmer E-commerce Webapp",
    year: "June2026",
    align: "right",
    image: "/images/dennise-clemmer.png",
    stack: 'Javascript',
    link: "https://dennise-clemmer.netlify.app/",
  },
  {
    name: "Kea-housing-and-property estate",
    year: "June2026",
    align: "left",
    image: "/images/kea-hosuing-and-property.png",
    stack: 'Javascript',
    link: "https://kea-housing-and-property.netlify.app/",
  },
  {
    name: "Allure nails",
    year: "May2026",
    align: "right",
    image: "/images/allure-nails.png",
    stack: 'Javascript',
    link: "https://allure-premium-services.netlify.app/",
  },
  {
    name: "Msheavenly E-commerce Webapp",
    year: "April2026",
    align: "left",
    image: "/images/msheavenly.png",
    stack: 'PHP',
    link: "https://msheavenlyco.kesug.com/",
  },
  {
    name: "Allonblack Casino Webapp",
    year: "Feb2026",
    align: "right",
    image: "/images/allonblack.png",
    stack: 'PHP',
    link: "https://allonblack.net/",
  },
  {
    name: "Scorezone Webapp",
    year: "Nov2025",
    align: "left",
    image: "/images/scorezone.png",
    stack: 'PHP',
    link: "https://scorezone.kesug.com/",
  },
  {
    name: "Wifa Wears E-commerce",
    year: "Oct2025",
    align: "right",
    image: "/images/wifa-wears.png",
    stack: 'Javascript',
    link: "https://wifa-wears-pending.netlify.app/",
  },
  {
    name: "Freelancing Website",
    year: "Oct2025",
    align: "left",
    image: "/images/circle of devs.png",
    stack: 'PHP',
    link: "https://circleofdevelopers.great-site.net/",
  },
  {
    name: "B-Transfer Fintech App",
    year: "Sept2025",
    align: "right",
    image: "/images/btransfer.png",
    stack: 'Javascript',
    link: "https://b-transfer-hold.netlify.app/",
  },
  
  {
    name: "Quizify App",
    year: "Mar2025",
    align: "left",
    image: "/images/quizify.png",
    stack: 'Javascript',
    link: "https://quizzify2025.netlify.app/",
  },
  
];

const ProjectsMain = () => {
  return (
    <section id="projects" className="container-portfolio section-pad">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectsText />
      </motion.div>

      <FeaturedProjects />

      <div className="mt-20 flex flex-col gap-16">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              stack={project.stack}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsMain;
