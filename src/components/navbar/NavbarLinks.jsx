import { Link } from "react-scroll";
import PropTypes from "prop-types";
import {
  LuHouse,
  LuUser,
  LuCode,
  LuBriefcase,
  LuFolderKanban,
  LuMail,
} from "react-icons/lu";

const links = [
  { link: "Home", section: "home", Icon: LuHouse },
  { link: "About", section: "about", Icon: LuUser },
  { link: "Skills", section: "skills", Icon: LuCode },
  { link: "Experience", section: "experience", Icon: LuBriefcase },
  { link: "Projects", section: "projects", Icon: LuFolderKanban },
  { link: "Contact", section: "contact", Icon: LuMail },
];

const NavbarLinks = ({ active, onNavigate, mobile }) => {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-3"
          : "flex items-center gap-1 lg:gap-2"
      }
    >
      {links.map((item) => {
        const { Icon } = item;
        const isActive = active === item.section;
        return (
          <li key={item.section}>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
              to={item.section}
              onClick={onNavigate}
              className={`group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-cyan"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon
                className={`text-base transition-colors duration-300 ${
                  isActive ? "text-cyan" : "text-white/50 group-hover:text-white"
                }`}
              />
              {item.link}
              <span
                className={`ml-1 h-1 w-1 rounded-full bg-cyan transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

NavbarLinks.propTypes = {
  active: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  mobile: PropTypes.bool,
};

export default NavbarLinks;
