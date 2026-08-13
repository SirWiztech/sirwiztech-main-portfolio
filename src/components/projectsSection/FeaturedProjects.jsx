import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FiExternalLink } from "react-icons/fi";
import { LuConstruction } from "react-icons/lu";
import wiztechCutzImage from "../../assets/barber_image-800.png";
import TechBadge from "./TechBadge";

const featuredProjects = [
  {
    name: "Speedly Enterprise",
    role: "Founder & CEO",
    description:
      "Ride-hailing and booking platform for Onitsha, Anambra State. Built with React/TypeScript + Inertia.js, Laravel 13 + FastAPI, PostgreSQL, Korapay/BudPay payment integration, OpenStreetMap/Leaflet mapping, and a Groq-powered AI chatbot.",
    stack: [
      "React",
      "TypeScript",
      "Inertia.js",
      "Laravel 13",
      "FastAPI",
      "PostgreSQL",
      "Korapay",
      "Leaflet",
      "Groq AI",
    ],
    status: "In Development",
    link: "https://speedly-react-laravel-1.onrender.com",
    gradient: "from-cyan via-darkCyan to-ink",
    image: "/images/speedly (2).png",
  },
  {
    name: "Wiztech-Cutz",
    role: "Artisan Booking Platform",
    description:
      "A platform that connects customers with barbers and artisans — booking, scheduling, and discovery for grooming services, built for real-world use.",
    stack: ["Html", "TailwindCSS","Javascript", "Netlify"],
    status: "Live",
    link: "https://wiztech-cutz.netlify.app",
    gradient: "from-orange via-darkOrange to-ink",
    image: wiztechCutzImage,
  },
  {
    name: "MZYS Membership System",
    role: "Youth Organization Platform",
    description:
      "A Next.js/Tailwind platform digitizing a youth organization's membership management, finances, events, and directory — turning manual records into a modern member experience.",
    stack: ["Next.js", "Typescript", "TailwindCSS", "MySQL"],
    status: "In Development",
    link: "https://mzys-onitsha.pxxlspace.cv",
    gradient: "from-cyan via-darkCyan to-ink",
    image: "/images/mzys-onitsha.png",
  },
  {
    name: "Kortix Digital",
    role: "Agency & Mentorship Platform",
    description:
      "A digital agency and mentorship platform offering cohort-based courses in web development, app development, UI/UX, cybersecurity, and more.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    status: "In Development",
    link: "https://kortix-digital.onrender.com",
    gradient: "from-orange via-darkOrange to-ink",
    image: "/images/kortix-digital.png",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="mt-16">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8 flex items-center gap-3"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-cyan/60 to-transparent" />
        <h3 className="font-special text-xl font-bold uppercase tracking-widest2 text-cyan">
          Featured Builds
        </h3>
        <span className="h-px flex-1 bg-gradient-to-l from-orange/60 to-transparent" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <motion.article
            key={project.name}
            variants={fadeIn("up", 0.1 * i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="card-portfolio group flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-cardHover"
          >
            <div
              className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <img
                src={project.image}
                alt={`${project.name} — project preview`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span
                className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur-sm ${
                  project.status === "Live"
                    ? "bg-emerald-500/25 text-emerald-300"
                    : "bg-amber-500/25 text-amber-300"
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">
                {project.role}
              </p>
              <h4 className="mt-1 font-special text-2xl font-bold text-white">
                {project.name}
              </h4>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-lightGrey">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </ul>
              <div className="mt-5">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-darkCyan px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:shadow-glowCyan"
                  >
                    Visit Project <FiExternalLink />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-lightGrey">
                    <LuConstruction /> Launching soon
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
