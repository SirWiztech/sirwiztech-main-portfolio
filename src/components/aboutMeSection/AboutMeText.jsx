import { Link } from "react-scroll";
import { FaQuoteLeft } from "react-icons/fa6";

const AboutMeText = () => {
  return (
    <div className="flex max-w-xl flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <span className="eyebrow">Who I Am</span>
      <h2 className="section-title mt-3">About Me</h2>
      <p className="mt-6 text-lg leading-relaxed text-lightGrey">
        I’m Ogaraku Ugochukwu (WIZTECH), a full stack developer and ICT instructor with a passion for
        teaching and coding. I specialize in App development and full-stack web
        development, helping students build real-world projects and master
        modern web technologies. I also run a Digital Technology firm called <b>Kortix Digital</b>,
        where I create tutorials and courses to guide aspiring developers in
        their journey toward getting successful careers in tech. Outside of coding, I
        enjoy continuous learning and sharing knowledge to inspire others to
        achieve their goals.
      </p>

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-surface p-4 text-left">
        <FaQuoteLeft className="mt-1 shrink-0 text-cyan" />
        <p className="text-sm leading-relaxed text-lightGrey">
          Founder &amp; CEO of{" "}
          <span className="font-semibold text-white">Speedly Enterprise</span>{" "}
          — building ride-hailing &amp; booking platforms for Onitsha, Anambra
          State, and a Graduate of Computer Information Technology student at
          Johnbosco Institute of Technology (JOBITECH).
        </p>
      </div>

      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
        to="projects"
        className="mt-10 inline-flex self-center items-center gap-2 rounded-full border border-orange/60 px-6 py-3 text-lg font-bold text-orange transition-all duration-300 hover:bg-orange hover:text-black hover:shadow-glowAmber md:self-start"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
