import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import PropTypes from "prop-types";
import TechBadge from "./TechBadge";

const SingleProject = ({ name, year, align, image, link, stack }) => {
  const isLeft = align === "left";
  const stackList = stack ? (Array.isArray(stack) ? stack : [stack]) : [];

  return (
    <motion.article
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`grid w-full items-center gap-8 md:grid-cols-2 md:gap-14 ${
        isLeft ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* Image first */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} — view project`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cardHover"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={800}
          height={500}
        />
        <span className="absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-darkCyan text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
          <BsFillArrowUpRightCircleFill className="text-xl" />
        </span>
      </a>

      {/* Text, date, stack, and view button */}
      <div
        className={`flex flex-col ${
          isLeft ? "md:items-start md:text-left" : "md:items-end md:text-right"
        } items-center text-center`}
      >
        <h2 className="font-special text-2xl font-bold text-white md:text-3xl">
          {name}
        </h2>
        <span className="mt-1 inline-block rounded-full border border-orange/40 px-3 py-0.5 text-sm font-semibold text-orange">
          {year}
        </span>
        {stackList.length > 0 && (
          <ul
            className={`mt-4 flex flex-wrap justify-center gap-2 ${
              isLeft ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {stackList.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </ul>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan/50 px-5 py-2 font-bold text-cyan transition-all duration-300 hover:bg-cyan hover:text-black hover:shadow-glowCyan"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
    </motion.article>
  );
};

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  stack: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default SingleProject;
