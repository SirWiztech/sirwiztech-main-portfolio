import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}.\n\n${message}`;
    const phoneNumber = "2348108787625";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setEmail("");
    setName("");
    setMessage("");
    setSuccess("Redirecting to WhatsApp...");
  };

  return (
    <form onSubmit={handleWhatsAppSubmit} className="flex w-full max-w-full flex-col gap-4 overflow-hidden">
      {success && (
        <p role="status" className="rounded-lg border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm text-cyan break-words">
          {success}
        </p>
      )}
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        aria-label="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-12 w-full min-w-0 max-w-full rounded-xl border border-white/10 bg-surface-2 px-4 text-sm text-white placeholder:text-lightGrey transition-colors focus:border-cyan focus:outline-none sm:text-base"
        style={{ fontSize: "16px" }} // Prevents iOS zoom
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        aria-label="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 w-full min-w-0 max-w-full rounded-xl border border-white/10 bg-surface-2 px-4 text-sm text-white placeholder:text-lightGrey transition-colors focus:border-cyan focus:outline-none sm:text-base"
        style={{ fontSize: "16px" }} // Prevents iOS zoom
      />
      <textarea
        name="message"
        rows="6"
        placeholder="Message"
        required
        aria-label="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full min-w-0 max-w-full rounded-xl border border-white/10 bg-surface-2 p-4 text-sm text-white placeholder:text-lightGrey transition-colors focus:border-cyan focus:outline-none sm:text-base"
        style={{ fontSize: "16px" }} // Prevents iOS zoom
      />
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-darkCyan px-4 py-3 text-sm font-bold text-black transition-all duration-300 hover:shadow-glowCyan sm:px-6 sm:py-3.5 sm:text-lg"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
        Send via WhatsApp
      </button>
    </form>
  );
};

export default ContactForm;