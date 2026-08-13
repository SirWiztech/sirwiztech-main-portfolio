import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="relative">
        <div className="absolute -inset-4 -z-10 rounded-full bg-orange/10 blur-2xl" />
        <img
          src="/images/email-image.png"
          alt="Email illustration"
          loading="lazy"
          width={300}
          height={220}
          className="max-w-[300px]"
        />
      </div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
