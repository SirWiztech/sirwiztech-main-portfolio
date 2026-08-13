import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";

const SECTIONS = ["home", "about", "skills", "experience", "projects", "contact"];

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();
  const active = useScrollSpy(SECTIONS);

  const closeMenu = () => {
    if (menuOpen) dispatch(toggleMenu());
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <nav
        aria-label="Main navigation"
        className="container-portfolio mt-3 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-ink/80 px-4 py-2 shadow-card backdrop-blur-xl sm:px-5"
      >
        <NavbarLogo />
        <div className="hidden lg:block">
          <NavbarLinks active={active} onNavigate={closeMenu} />
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <NavbarBtn />
          </div>
          <div className="lg:hidden">
            <NavbarToggler />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="container-portfolio mt-2 rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-card backdrop-blur-xl lg:hidden">
          <NavbarLinks active={active} onNavigate={closeMenu} mobile />
        </div>
      )}
    </header>
  );
};

export default NavbarMain;
