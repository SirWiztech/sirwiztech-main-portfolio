import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <section id="about" className="container-portfolio section-pad">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-20">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutMeText />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="justify-self-center md:justify-self-end"
        >
          <AboutMeImage />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeMain;
