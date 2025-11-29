import React from 'react';
import BarberHairstyling from '../../assets/barber_image.png';

// You would need to import your images here:
// import cut1 from 'path/to/image1.jpg';
// import cut2 from 'path/to/image2.jpg';
// import cut3 from 'path/to/image3.jpg';

/**
 * Component showcasing services for a Barber and Hairstylist, 
 * now including a Portfolio Gallery section.
 */
const BarberHairstylingSection = () => {
  return (
    // Outer Container: Light background, generous padding, and a subtle separator.
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      
      {/* Centered Content Wrapper */}
      <div className="max-w-7xl mx-auto">
        
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
            ✂️ Expert Cuts & Styling
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            As a skilled **barber and hairstylist**, I offer precision techniques for all hair types and desired looks—from classic fades to modern, sophisticated styling.
          </p>
        </div>

        {/* --- SERVICE CARDS SECTION --- */}
        <div className="flex justify-center gap-8 flex-wrap mb-16">
          
          {/* 1. Barber Services Card */}
          <div className="flex-1 min-w-[280px] max-w-sm p-8 bg-brown rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2">
              The Barber's Craft
            </h3>
            <ul className="space-y-4 text-left text-gray-700">
              <li>
                <span className="text-red-500 font-semibold mr-2">✄</span> 
                **Precision Fades & Tapers:** Clean, sharp edges and seamless blends.
              </li>
              <li>
                <span className="text-red-500 font-semibold mr-2">🧔</span> 
                **Classic Hot Towel Shaves:** Traditional shaving experience for ultimate smoothness.
              </li>
              <li>
                <span className="text-red-500 font-semibold mr-2">📏</span> 
                **Line-ups & Edge-ups:** Defining facial hair and hairline with perfect geometry.
              </li>
            </ul>
          </div>
          
          {/* 2. Hairstyling Services Card */}
          <div className="flex-1 min-w-[280px] max-w-sm p-8 bg-brown rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2">
              Creative Hairstyling
            </h3>
            <ul className="space-y-4 text-left text-gray-700">
              <li>
                <span className="text-red-500 font-semibold mr-2">💨</span> 
                **Modern Blowouts & Texture:** Creating volume, movement, and lasting style.
              </li>
              <li>
                <span className="text-red-500 font-semibold mr-2">🎨</span> 
                **Color Consultation & Application:** Custom colors, highlights, and gray blending.
              </li>
              <li>
                <span className="text-red-500 font-semibold mr-2">👰</span> 
                **Event & Bridal Styling:** Sophisticated updos and formal styles for special occasions.
              </li>
            </ul>
          </div>
          
        </div>

        {/* --- PORTFOLIO GALLERY SECTION --- */}
        <div className="pt-12 border-t border-gray-300">
          
           

{/* --- PORTFOLIO GALLERY SECTION (Single Image Focus) --- */}
<div className="pt-12 border-t border-gray-300">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Signature Work 🏆
    </h2>
    
    {/* Single Image Container: 
        max-w-4xl limits the image size (approx 80% of the outer wrapper).
        mx-auto centers the image.
        w-full ensures it scales down correctly on mobile.
    */}
    <div className="max-w-4xl mx-auto w-full rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500">
        
        {/* The Image - Replace 'barberImage' with your actual imported variable name */}
        <img 
            src={BarberHairstyling} 
            alt="Professional barber at work showcasing signature style" 
            className="object-cover w-full h-auto" 
        />
    </div>

    <p className="text-center mt-6 text-xl font-semibold text-gray-700">
        Precision, quality, and style in every cut.
    </p>

</div>

            <p className="text-center mt-6 text-gray-600">
                See more examples on my social media channels!
            </p>

        </div>
        
        {/* Call-to-Action / Booking Button */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 transform hover:scale-105"
          >
            Book Your Appointment Now
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default BarberHairstylingSection;