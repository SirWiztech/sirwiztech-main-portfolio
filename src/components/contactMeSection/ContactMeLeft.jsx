import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
