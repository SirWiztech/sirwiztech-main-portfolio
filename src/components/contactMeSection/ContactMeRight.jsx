import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 overflow-hidden">
      <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
        <div className="absolute -inset-4 -z-10 rounded-full bg-orange/10 blur-2xl" />
        <img
          src="/images/email-image.png"
          alt="Email illustration"
          loading="lazy"
          width={300}
          height={220}
          className="h-auto w-full"
        />
      </div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;