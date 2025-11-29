import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { SiNodedotjs, SiPhp, SiVuedotjs, SiAngular } from "react-icons/si";
import { FaPython, FaWordpress, FaBootstrap } from "react-icons/fa";
import { SiWix, SiFramer, SiWebflow, SiDjango, SiFlask } from "react-icons/si";



const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },

  { skill: "Node.js", icon: SiNodedotjs },
  { skill: "PHP", icon: SiPhp },
  { skill: "Vue.js", icon: SiVuedotjs },
  { skill: "Angular", icon: SiAngular },
  { skill: "Python", icon: FaPython },
  { skill: "Django", icon: SiDjango },
  // { skill: "Flask", icon: SiFlask },
  { skill: "Bootstrap", icon: FaBootstrap },
  { skill: "WordPress", icon: FaWordpress },
  { skill: "Wix", icon: SiWix },
  { skill: "Framer", icon: SiFramer },
  { skill: "Webflow", icon: SiWebflow },


];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
