import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center py-1 px-3 rounded-full border-orange border-[0.5px]">
        <NavbarLogo />
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>
        <div>
          <NavbarBtn />
        </div>
        <div className="lg:hidden">
          <NavbarToggler />
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-[120%] left-[50%] -translate-x-[50%] w-full">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;