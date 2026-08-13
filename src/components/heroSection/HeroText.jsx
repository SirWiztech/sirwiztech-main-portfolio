import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { FaRocket } from "react-icons/fa6";

const HeroText = () => {
  const typingSentences = [
    "A Passionate Web Developer and Instructor with 3 years of experience.",
    "Building amazing web applications with modern technologies.",
    "Crafting clean and reusable code for seamless user experiences.",
    "Turning ideas into high-quality, functional websites.",
  ];

  return (
    <div className="flex flex-col items-start gap-6 text-center md:items-start md:text-left">
      <motion.span
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-cyan"
      >
        <FaRocket />
        Founder · Full-Stack Developer · Instructor
      </motion.span>

      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-full break-words font-special text-5xl font-bold leading-[1.05] uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        <span className="text-white">Ogaraku</span>{" "}
        <span className="text-cyan drop-shadow-glowCyan">Ugochukwu</span>
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="min-h-[3.5rem] w-full text-lg font-medium text-white/90 md:max-w-xl md:text-left sm:text-center"
      >
        <ReactTypingEffect
          text={typingSentences}
          speed={70}
          eraseSpeed={35}
          typingDelay={800}
          eraseDelay={1800}
        />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          to="projects"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-darkCyan px-7 py-3 font-bold text-black transition-all duration-300 hover:shadow-glowCyan"
        >
          View Projects
          <LuArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          to="contact"
          className="inline-flex items-center gap-2 rounded-full border border-orange/60 px-7 py-3 font-bold text-orange transition-all duration-300 hover:bg-orange hover:text-black hover:shadow-glowAmber"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroText;
