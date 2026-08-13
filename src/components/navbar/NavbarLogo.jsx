import fullLogo from "../../assets/my-logo.png";

const NavbarLogo = () => {
  return (
    <a
      href="#home"
      className="inline-flex shrink-0"
      aria-label="Wiztech logo — back to top"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <img
        src={fullLogo}
        alt="Wiztech logo"
        className="h-10 w-auto md:h-12"
      />
    </a>
  );
};

export default NavbarLogo;
