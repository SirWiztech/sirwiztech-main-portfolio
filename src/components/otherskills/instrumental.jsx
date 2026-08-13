import pianoGuitarImage from "../../assets/music-skills.jpg";

const InstrumentShowcase = () => {
  return (
    <section className="container-portfolio section-pad border-t border-white/10">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="section-title">
            My Musical Instruments <span className="text-cyan">🎹</span>
          </h2>
          <p className="mt-4 text-xl text-lightGrey">
            The tools of my creativity, bridging the classical and modern
            soundscapes.
          </p>

          <h3 className="mt-10 font-special text-2xl font-bold text-orange">
            My Core Instruments
          </h3>

          <ul className="mt-6 space-y-6">
            <li className="flex items-start gap-4 rounded-xl border border-white/10 bg-surface p-5 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-darkCyan font-special text-xl font-bold text-black">
                P
              </span>
              <div>
                <p className="text-xl font-semibold text-white">Piano 🎹</p>
                <p className="mt-1 text-lightGrey">
                  The foundation of my musical expression, from classical
                  compositions to modern chord voicings.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 rounded-xl border border-white/10 bg-surface p-5 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-darkOrange font-special text-xl font-bold text-black">
                G
              </span>
              <div>
                <p className="text-xl font-semibold text-white">Guitar 🎸</p>
                <p className="mt-1 text-lightGrey">
                  My go-to for rhythm and melody, offering versatility in
                  acoustic fingerpicking and electric lead lines.
                </p>
              </div>
            </li>
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan to-darkCyan px-6 py-3 font-bold text-black transition-all duration-300 hover:shadow-glowCyan"
          >
            Hear My Music
          </a>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-orange/10 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-cardHover transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={pianoGuitarImage}
                alt="A photo of a piano and a guitar"
                loading="lazy"
                width={640}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrumentShowcase;
