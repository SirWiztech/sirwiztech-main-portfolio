import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-16"
    >
      <HeroGradient />
      <div className="container-portfolio relative grid items-center gap-12 md:grid-cols-2">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
