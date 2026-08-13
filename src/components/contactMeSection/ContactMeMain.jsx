import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section id="contact" className="container-portfolio section-pad">
      <div className="mb-12 text-center">
        <span className="eyebrow">Let's Connect</span>
        <h2 className="section-title mt-3">Contact Me</h2>
      </div>
      <div className="card-portfolio relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
        
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <ContactMeLeft />
          <ContactMeRight />
        </div>
      </div>
    </section>
  );
};

export default ContactMeMain;