import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ReactTypingEffect from 'react-typing-effect';

const HeroText = () => {
  const typingSentences = [
    "A Passionate Web Developer and Instructor with 3 years of experience.",
    "Building amazing web applications with modern technologies.",
    "Crafting clean and reusable code for seamless user experiences.",
    "Turning ideas into high-quality, functional websites."
  ];

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <br></br>
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-white"
      >
        Full -  Stack Developer
      </motion.h2>
      <br></br>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Wiztech <br className="sm:hidden md:block" />
        Ogaraku
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        <ReactTypingEffect
          text={typingSentences}
          speed={100}
          eraseSpeed={50}
          typingDelay={1000}
          eraseDelay={2000}
        />
      </motion.div>
    </div>
  );
};

export default HeroText;