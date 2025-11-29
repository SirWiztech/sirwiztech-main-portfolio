import React from 'react';
// Assuming this path is correct and points to your image file
import pianoGuitarImage from '../../assets/piano_guitar.png' 

/**
 * Component to display the instruments played by the user.
 * Uses Tailwind CSS for styling with orange, blue, and white/light gray.
 */
const InstrumentShowcase = () => {
  return (
    // Outer container: Using a defined light gray background (bg-gray-100) 
    // to replace the invalid 'bg-brown', keeping the blue border.
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-blue-600">
      
      {/* Centered Content Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-600 sm:text-5xl">
            My Musical Instruments 🎹
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            The tools of my creativity, bridging the classical and modern soundscapes.
          </p>
        </div>

        {/* Layout for Image and Details (Grid on medium screens) */}
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          
          {/* 1. Image Display Section */}
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl transition duration-500 ease-in-out transform hover:scale-[1.02]">
              
              {/* === CORRECTED IMAGE TAG USING IMPORT === */}
              <img 
                src={pianoGuitarImage} 
                alt="A photo of a piano and a guitar" 
                className="object-cover w-full h-full"
              />
              
            </div>
          </div>

          {/* 2. Instrument Details Section */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-orange-600 mb-6">
              My Core Instruments
            </h3>
            
            <ul className="space-y-6">
              
              {/* Instrument 1: Piano */}
              <li className="flex items-start bg-brown p-4 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold">
                    P
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-semibold text-gray-900">
                    Piano 🎹
                  </p>
                  <p className="mt-1 text-gray-600">
                    The foundation of my musical expression, from classical compositions to modern chord voicings.
                  </p>
                </div>
              </li>
              
              {/* Instrument 2: Guitar */}
              <li className="flex items-start bg-brown p-4 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl font-bold">
                    G
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-semibold text-gray-900">
                    Guitar 🎸
                  </p>
                  <p className="mt-1 text-gray-600">
                    My go-to for rhythm and melody, offering versatility in acoustic fingerpicking and electric lead lines.
                  </p>
                </div>
              </li>
              
            </ul>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition duration-150 transform hover:scale-105"
              >
                Hear My Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrumentShowcase;