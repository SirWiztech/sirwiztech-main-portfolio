import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section id="contact" className="container-portfolio section-pad">
      <div className="mb-12 text-center">
        <span className="eyebrow">Let’s Connect</span>
        <h2 className="section-title mt-3">Contact Me</h2>
      </div>
      <div className="card-portfolio relative grid gap-12 overflow-hidden p-8 md:p-12 lg:grid-cols-2">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
};

export default ContactMeMain;
