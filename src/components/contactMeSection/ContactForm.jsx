import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message with form data
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}.%0A%0A${message}`;
    
    // Replace '2348012345678' with your full international phone number without '+' or '00'
    const phoneNumber = "2348108787625"; 
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open the URL in a new window/tab
    window.open(whatsappUrl, "_blank");

    // Clear form fields and show success message
    setEmail("");
    setName("");
    setMessage("");
    setSuccess("Redirecting to WhatsApp...");
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default ContactForm;