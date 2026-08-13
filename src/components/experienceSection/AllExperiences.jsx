import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const timeline = [
  {
    type: "Founder",
    role: "Founder & CEO",
    org: "Speedly Enterprise",
    period: "2024 – Present",
    details: [
      "Building Speedly, a ride-hailing & booking platform for Anambra State and the entire southeast region.",
      "Leading product strategy, architecture, and full-stack development.",
      "Integrating payment gateways (Korapay), mapping (Google Maps), and a Gemini AI chatbot.",
    ],
  },
  {
    type: "Work",
    role: "Full-stack Developer",
    org: "Kortix Digital",
    period: "2025 – Present",
    details: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    type: "Work",
    role: "Intern",
    org: "Kodex Africa",
    period: "2026 – Present",
    details: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },

  {
    type: "Education",
    role: "Computer Information Technology",
    org: "JOBITECH — John Bosco Institute of Technology, Obosi",
    period: "2024 - 2026",
    details: [
      "Specializing in software development and Hardware Troubleshooting.",
      "Combining academics with hands-on building of production platforms.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <ol className="relative ml-3 border-l-2 border-white/10 pl-8">
      {timeline.map((item, index) => {
        const isEducation = item.type === "Education";
        const isFounder = item.type === "Founder";
        return (
          <motion.li
            key={`${item.role}-${item.org}`}
            variants={fadeIn("up", 0.1 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pb-12 last:pb-0"
          >
            <span
              className={`absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border text-sm ${
                isFounder
                  ? "border-orange bg-orange/15 text-orange"
                  : isEducation
                  ? "border-cyan bg-cyan/15 text-cyan"
                  : "border-white/20 bg-surface text-cyan"
              }`}
            >
              {isEducation ? <FaGraduationCap /> : <FaBriefcase />}
            </span>

            <article className="card-portfolio p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-cardHover">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-special text-xl font-bold text-white md:text-2xl">
                  {item.role}
                </h3>
                <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-xs font-semibold text-cyan">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 font-semibold text-orange">{item.org}</p>
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-lightGrey">
                {item.details.map((d, i) => (
                  <li key={i} className="leading-relaxed">
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        );
      })}
    </ol>
  );
};

export default AllExperiences;
