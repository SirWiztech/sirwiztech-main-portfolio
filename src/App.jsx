import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import MainButtonDocument from "./components/curriculumvitae/MainButtonDocument";
import OtherSkillsMain from "./components/otherskills/otherskillsmain";
import GitHubMain from "./components/githubSection/GitHubMain";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink font-body text-white">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-cyan px-4 py-2 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <NavbarMain />
      <main id="main">
        <HeroMain />
        <SubHeroMain />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <OtherSkillsMain />
        <ExperienceMain />
        <ProjectsMain />
        <GitHubMain />
        <MainButtonDocument />
        <ContactMeMain />
      </main>
      <FooterMain />
    </div>
  );
}

export default App;
