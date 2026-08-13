import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import { FaReact, FaLaravel } from "react-icons/fa6";
import { SiMysql, SiPostgresql, SiVuedotjs, SiNextdotjs } from "react-icons/si";

const badgeClass =
  "pointer-events-none absolute z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-surface/90 px-3 py-2 text-sm font-semibold text-white shadow-card backdrop-blur";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative mx-auto flex h-full w-full max-w-[420px] items-center justify-center"
    >
      <PiHexagonThin className="absolute left-1/2 top-1/2 z-0 h-auto w-full max-w-[460px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow text-cyan/40 md:w-[115%]" />

      <div className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-cardHover">
        <img
          src="/images/me.png"
          alt="Wiztech Ogaraku portrait"
          className="max-h-[430px] w-full object-cover"
          loading="eager"
          width={430}
          height={430}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      </div>

      {/* Top-left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className={`${badgeClass} left-1 top-4 md:-left-6`}
      >
        <FaReact className="text-cyan" />
        React
      </motion.div>

      {/* Top-right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className={`${badgeClass} right-1 top-4 md:-right-6`}
      >
        <SiVuedotjs className="text-emerald-300" />
        Vue
      </motion.div>

      {/* Middle-left */}
      <motion.div
        animate={{ x: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className={`${badgeClass} left-1 top-1/2 -translate-y-1/2 md:-left-12`}
      >
        <SiPostgresql className="text-lightCyan" />
        PostgreSQL
      </motion.div>

      {/* Middle-right */}
      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className={`${badgeClass} right-1 top-1/2 -translate-y-1/2 md:-right-12`}
      >
        <SiMysql className="text-lightCyan" />
        MySQL
      </motion.div>

      {/* Bottom-left */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className={`${badgeClass} left-1 bottom-6 md:-left-6`}
      >
        <FaLaravel className="text-orange" />
        Laravel
      </motion.div>

      {/* Bottom-right */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className={`${badgeClass} right-1 bottom-6 md:-right-6`}
      >
        <SiNextdotjs className="text-white" />
        NextJs
      </motion.div>
    </motion.div>
  );
};

export default HeroPic;