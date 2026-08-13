import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import ContactSocial from "../contactMeSection/ContactSocial";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  const year = new Date().getFullYear();

  // Auto-fits the giant wordmark to the full viewport width, no matter
  // the screen size or text length — prevents any horizontal overflow.
  const markWrapRef = useRef(null);
  const markTextRef = useRef(null);

  useEffect(() => {
    const wrap = markWrapRef.current;
    const text = markTextRef.current;
    if (!wrap || !text) return;

    const fit = () => {
      text.style.transform = "scaleX(1)";
      const wrapWidth = wrap.clientWidth;
      const textWidth = text.scrollWidth;
      if (textWidth > 0) {
        text.style.transform = `scaleX(${wrapWidth / textWidth})`;
      }
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-4">
      <div className="container-portfolio relative z-10 flex flex-col items-center gap-6 py-10">
        <div className="hidden md:block">
          <ContactSocial />
        </div>
        <ul className="flex flex-wrap justify-center gap-6 text-lightGrey">
          {footerLinks.map((item) => (
            <li key={item.section}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                to={item.section}
                className="cursor-pointer transition-colors hover:text-cyan"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <p className="text-sm text-lightGrey">
          © {year} Wiztech | All Rights Reserved.
        </p>
      </div>

      {/* Oversized bleeding wordmark — cropped top/bottom, fades to black,
          barely visible against the background, edge-to-edge width */}
      <div
        ref={markWrapRef}
        aria-hidden="true"
        className="relative left-1/2 h-[12vw] max-h-[210px] min-h-[70px] w-screen -translate-x-1/2 select-none overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 45%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 45%, transparent 92%)",
        }}
      >
        <span
          ref={markTextRef}
          className="font-special absolute left-0 top-[-18%] inline-block origin-left whitespace-nowrap text-[22vw] font-black leading-[0.78] tracking-tighter"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.015) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          WIZTECH OGARAKU
        </span>
      </div>
    </footer>
  );
};

export default FooterMain;