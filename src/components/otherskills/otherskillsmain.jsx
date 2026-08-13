import BarberHairstylingSection from "./hairstyling";
import InstrumentShowcase from "./instrumental";

const OtherSkillsMain = () => {
  return (
    <div>
      <div className="pt-4 text-center">
        <span className="eyebrow">Beyond Code</span>
        <h2 className="section-title mt-3 text-cyan">Other Skills</h2>
      </div>
      <BarberHairstylingSection />
      <InstrumentShowcase />
    </div>
  );
};

export default OtherSkillsMain;
