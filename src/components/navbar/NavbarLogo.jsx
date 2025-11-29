import fullLogo from '../../assets/logo3.png';

const NavbarLogo = () => {
  return (
    <div>
      <img
        src={fullLogo}
        alt="Abdelrahman Qassem Logo"
        // These Tailwind CSS classes make the image responsive.
        // 'h-auto' maintains the aspect ratio.
        // 'w-24' sets a default width (e.g., 96px).
        // 'md:w-32' increases the width on medium screens and up.
        className="max-w-full h-auto w-24 md:w-32"
      />
    </div>
  );
};

export default NavbarLogo;``