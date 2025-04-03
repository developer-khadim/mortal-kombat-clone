import React from "react";

const ItsInOurBlood = () => {
  return (
    <section className="relative py-20 bg-gray-200 overflow-hidden">
      {/* Light textured background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300 mix-blend-overlay"></div>
      
      {/* Main content */}
      <div className="container relative mx-auto px-4 flex items-center justify-between z-10">
        {/* Text and logo section */}
        <div className="w-full text-center flex flex-col items-center mb-8">
          {/* MK Dragon Logo */}
          <img 
            src="https://cdn-mk1.mortalkombat.com/home/sigil.webp" 
            alt="Mortal Kombat Logo" 
            className="w-32 h-32 mb-6"
            style={{transform: "translate(0px, 0px)", opacity: 1}}
          />
          
          <h2 className="text-4xl md:text-6xl text-blue-900 font-bold mb-6 uppercase tracking-wider">
            IT'S IN OUR BLOOD
          </h2>
          
          <div className="max-w-xl">
            <p className="text-blue-800 text-lg mb-4">
              Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang.
            </p>
            <p className="text-blue-800">
              Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting
              system, game modes, and fatalities!
            </p>
          </div>
        </div>

        {/* Character image */}
        <div className="w-full flex justify-center mt-8">
          <img
            src="https://cdn-mk1.mortalkombat.com/home/liu-kang-wfire.webp" 
            alt="Liu Kang with fire powers"
            className="h-96 max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ItsInOurBlood;