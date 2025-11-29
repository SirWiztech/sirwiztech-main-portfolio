import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Scorezone Webapp",
    year: "Nov2025",
    align: "left",
    image: "/images/scorezone.png", // <-- Add leading slash
    link: "https://scorezone.kesug.com/ ",
  },
  {
    name: "Wifa Wears E-commerce",
    year: "Oct2025",
    align: "right",
    image: "/images/wifa-wears.png", // <-- Add leading slash
    link: "https://wifa-wears-pending.netlify.app/",
  },
  {
    name: "Freelancing Website",
    year: "Oct2025",
    align: "left",
    image: "/images/circle of devs.png", // <-- Add leading slash
    link: "https://circleofdevelopers.great-site.net/",
  },
  {
    name: "B-Transfer Fintech App",
    year: "Sept2025",
    align: "right",
    image: "/images/btransfer.png", // <-- Add leading slash
    link: "https://b-transfer-hold.netlify.app/",
  },
  {
    name: "Bank App",
    year: "Mar 2025",
    align: "left",
    image: "/images/BANK.png", // <-- Add leading slash
    link: "https://nova.karamelscript.com.ng/",
  },
  {
    name: "Quizify App",
    year: "Jan2025",
    align: "right",
    image: "/images/quizify.png", // <-- Add leading slash
    link: "https://quizzify2025.netlify.app/",
  },
  {
    name: "Gift Card App",
    year: "May2024",
    align: "left",
    image: "/images/giftcard.png", // <-- Add leading slash
    link: "https://webtechs.com.ng/bitbounty/",
  },
  {
    name: "Ethereal landing Page",
    year: "Jan2024",
    align: "right",
    image: "/images/ethereal.png", // <-- Add leading slash
    link: "https://ethereal-book-slot.netlify.app/",
  },
  {
    name: "Investment App",
    year: "March2023",
    align: "left",
    image: "/images/investment.png", // <-- Add leading slash
    link: "https://rankhyip.webblog.top/",
  },
  {
    name: "Web3 App",
    year: "Aug2023",
    align: "right",
    image: "/images/web3.png", // <-- Add leading slash
    link: "https://bitweb.karamelscript.com.ng/",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} // <-- This is the added line
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;  