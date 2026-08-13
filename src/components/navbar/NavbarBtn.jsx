import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <Link
      spy={true}
      smooth={true}
      duration={500}
      offset={-110}
      to="contact"
      className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan to-darkCyan px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:shadow-glowCyan"
    >
      Hire Me
      <LuArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
    </Link>
  );
};

export default NavbarBtn;
