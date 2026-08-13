import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      onClick={() => dispatch(toggleMenu())}
      className="rounded-full border border-white/15 p-2.5 text-xl text-white transition-colors hover:border-cyan hover:text-cyan"
    >
      {menuOpen ? <FiX /> : <GiHamburgerMenu />}
    </button>
  );
};

export default NavbarToggler;
