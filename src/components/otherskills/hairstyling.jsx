import BarberHairstyling from "../../assets/barbing-skills.jpg";

const BarberHairstylingSection = () => {
  return (
    <section className="container-portfolio section-pad">
      <div className="text-center">
        <h2 className="section-title">
          Expert Cuts &amp; Styling <span className="text-orange">✂️</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-lightGrey">
          As a skilled barber and hairstylist, I offer precision techniques for
          all hair types and desired looks—from classic fades to modern,
          sophisticated styling.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="card-portfolio p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-cardHover">
          <h3 className="border-b-2 border-orange/60 pb-2 font-special text-2xl font-bold text-orange">
            The Barber’s Craft
          </h3>
          <ul className="mt-6 space-y-4 text-lightGrey">
            <li>
              <span className="mr-2 font-bold text-orange">✄</span>
              <strong className="text-white">Precision Fades &amp; Tapers:</strong>{" "}
              Clean, sharp edges and seamless blends.
            </li>
            <li>
              <span className="mr-2 font-bold text-orange">🧔</span>
              <strong className="text-white">Classic Hot Towel Shaves:</strong>{" "}
              Traditional shaving experience for ultimate smoothness.
            </li>
            <li>
              <span className="mr-2 font-bold text-orange">📏</span>
              <strong className="text-white">Line-ups &amp; Edge-ups:</strong>{" "}
              Defining facial hair and hairline with perfect geometry.
            </li>
          </ul>
        </div>

        <div className="card-portfolio p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-cardHover">
          <h3 className="border-b-2 border-orange/60 pb-2 font-special text-2xl font-bold text-orange">
            Creative Hairstyling
          </h3>
          <ul className="mt-6 space-y-4 text-lightGrey">
            <li>
              <span className="mr-2 font-bold text-orange">💨</span>
              <strong className="text-white">Modern Blowouts &amp; Texture:</strong>{" "}
              Creating volume, movement, and lasting style.
            </li>
            <li>
              <span className="mr-2 font-bold text-orange">🎨</span>
              <strong className="text-white">Color Consultation &amp; Application:</strong>{" "}
              Custom colors, highlights, and gray blending.
            </li>
            <li>
              <span className="mr-2 font-bold text-orange">👰</span>
              <strong className="text-white">Event &amp; Bridal Styling:</strong>{" "}
              Sophisticated updos and formal styles for special occasions.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="font-special text-2xl font-bold">
          My Signature Work <span className="text-orange">🏆</span>
        </h3>
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-cardHover transition-transform duration-500 hover:scale-[1.01]">
          <img
            src={BarberHairstyling}
            alt="Professional barber at work showcasing signature style"
            loading="lazy"
            width={1024}
            height={576}
            className="h-auto w-full object-cover"
          />
        </div>
        <p className="mt-6 text-xl font-semibold text-white">
          Precision, quality, and style in every cut.
        </p>
        <p className="mt-2 text-lightGrey">
          See more examples on my social media channels!
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange to-darkOrange px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:shadow-glowAmber"
        >
          Book Your Appointment Now
        </a>
      </div>
    </section>
  );
};

export default BarberHairstylingSection;
