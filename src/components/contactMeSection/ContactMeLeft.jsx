import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-6 sm:gap-8 overflow-hidden">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;