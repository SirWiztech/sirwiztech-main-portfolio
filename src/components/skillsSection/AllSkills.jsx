import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaWordpress,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiVuedotjs,
  SiAngular,
  SiDjango,
  SiWix,
  SiFramer,
  SiWebflow,
  SiFastapi,    // Added missing import
  SiLaravel,   // Added missing import
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skillGroups = [
  {
    category: "Frontend",
    description: "Interactive, responsive interfaces",
    skills: [
      { skill: "HTML", icon: FaHtml5 },
      { skill: "CSS", icon: FaCss3Alt },
      { skill: "JavaScript", icon: IoLogoJavascript },
      { skill: "TypeScript", icon: SiTypescript },
      { skill: "React", icon: FaReact },
      { skill: "Next.js", icon: SiNextdotjs },
      { skill: "Vue.js", icon: SiVuedotjs },
      { skill: "Bootstrap", icon: FaBootstrap },
      { skill: "TailwindCSS", icon: RiTailwindCssFill },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Servers, APIs & business logic",
    skills: [
      { skill: "Node.js", icon: SiNodedotjs },
      { skill: "PHP", icon: SiPhp },
      { skill: "Python", icon: FaPython },
      { skill: "FastAPI", icon: SiFastapi },    // Now properly imported
      { skill: "Laravel", icon: SiLaravel },    // Now properly imported
    ],
  },
  {
    category: "CMS & No-Code",
    description: "Content platforms & builders",
    skills: [
      { skill: "WordPress", icon: FaWordpress },
      { skill: "Wix", icon: SiWix },
      { skill: "Framer", icon: SiFramer },
      { skill: "Webflow", icon: SiWebflow },
    ],
  },
];

const AllSkills = () => {
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {skillGroups.map((group, gi) => (
        <motion.div
          key={group.category}
          variants={fadeIn("up", 0.1 * gi)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card-portfolio group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-glowCyan"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <h3 className="font-special text-2xl font-bold text-white">
            {group.category}
          </h3>
          <p className="mt-1 text-sm text-lightGrey">{group.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {group.skills.map(({ skill, icon: Icon }) => (
              <li
                key={skill}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-surface-2 px-3 py-1.5 text-sm font-medium text-white/90 transition-all duration-300 hover:border-cyan/50 hover:text-cyan"
              >
                <Icon className="text-lg text-cyan" />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;