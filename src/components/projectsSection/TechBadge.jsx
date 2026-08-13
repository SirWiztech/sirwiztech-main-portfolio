import PropTypes from "prop-types";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiNetlify,
  SiNextdotjs,
  SiMysql,
  SiLaravel,
  SiReact,
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiCss3,
  SiBootstrap,
  SiInertia,
} from "react-icons/si";
import { TbCode } from "react-icons/tb";

const techIcons = {
  php: SiPhp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  html5: SiHtml5,
  tailwindcss: SiTailwindcss,
  netlify: SiNetlify,
  nextjs: SiNextdotjs,
  mysql: SiMysql,
  laravel: SiLaravel,
  laravel13: SiLaravel,
  react: SiReact,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  python: SiPython,
  css: SiCss3,
  css3: SiCss3,
  bootstrap: SiBootstrap,
  inertia: SiInertia,
};

const normalize = (tech) => tech.toLowerCase().replace(/[^a-z0-9]/g, "");

const TechBadge = ({ tech }) => {
  const Icon = techIcons[normalize(tech)] ?? TbCode;

  return (
    <li className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-surface-2 px-2.5 py-1 text-xs text-white/80 transition-colors hover:border-cyan/40 hover:text-white">
      <Icon className="text-sm text-cyan" aria-hidden="true" />
      {tech}
    </li>
  );
};

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default TechBadge;
