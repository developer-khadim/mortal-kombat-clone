import React from "react";
import Header from "../Components/Header";

const Landing = () => {
  // --- Configuration: Adjust these values ---
  // Height of the border effect area. This affects how much space the PNG and video take up.
  // Try values like h-16, h-20, h-24, h-28, h-32 (4rem to 8rem)
  const effectHeightClass = "h-24"; // Example: 6rem / 96px

  // How much the effect should overlap the edge (push up/down).
  // Often looks best when it's about half the effect height.
  // 'translate-y-1/2' translates based on the element's own height.
  const overlapTransform = "translate-y-1/2";
  // --- End Configuration ---

  return (
    // Using black background generally works better for screen blend with fire
    <div className="font-robotoCondensed bg-black">

      {/* Hero Section */}
      <section className="h-[70vh] overflow-hidden relative z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-50"
          autoPlay loop muted playsInline
        >
          <source src="https://cdn-mk1.mortalkombat.com/home/hero.mp4" type="video/mp4" />
        </video>
        <Header />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <img
            src="https://ext.same-assets.com/3443569425/2304381514.webp"
            alt="Mortal Kombat 1 - Khaos Reigns" className="max-w-xl w-full mb-8"
          />
          <a
            href="#"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase py-3 px-12 tracking-wider inline-block transition-colors duration-300"
          > Get Now </a>
        </div>
      </section>

      {/* "It's in our blood" section */}
      {/* Relative positioning needed for the absolute borders */}
      {/* Padding top/bottom prevents content hiding under the effect */}
      {/* Lower z-index than the border effects */}
      <section className={`relative bg-gray-200 pt-16 pb-16 md:pt-20 md:pb-20 z-[5]`}>

        {/* Top Fire Border Effect Container */}
        {/* Positioned absolutely at the top edge */}
        {/* Pulled UPWARDS using negative translateY transform */}
        {/* Higher z-index to sit above this section's background */}
        {/* pointer-events-none crucial to allow interaction below */}
        <div
          className={`absolute top-0 left-0 w-full ${effectHeightClass} z-10 pointer-events-none transform -${overlapTransform}`}
        >
          {/* Static Torn Paper Image */}
          {/* Covers the container, provides the jagged edge */}
          <div
            className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat" // Use bg-contain or bg-cover
            style={{
              backgroundImage: "url('https://cdn-mk1.mortalkombat.com/static/fire-border-top.png')",
              // Optional: Use 100% 100% if contain/cover don't work well
              // backgroundSize: '100% 100%',
            }}
          ></div>

          {/* Fire Video Overlay */}
          {/* Covers the container, sits ON TOP of the PNG */}
          {/* mix-blend-screen makes black transparent, showing fire */}
          <video
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
            autoPlay loop muted playsInline
          >
            <source
              src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-[15]">
           {/* Text and logo section */}
           <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mb-8 md:mb-0 md:pr-8">
             <img src="https://cdn-mk1.mortalkombat.com/home/sigil.webp" alt="Mortal Kombat Logo" className="w-32 h-32 mb-6" />
             <h2 className="text-4xl md:text-5xl lg:text-6xl text-blue-900 font-bold mb-6 uppercase tracking-wider"> IT'S IN OUR BLOOD </h2>
             <div className="max-w-xl">
               <p className="text-blue-800 text-lg mb-2"> Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. </p>
               <p className="text-blue-800 text-lg"> Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities! </p>
             </div>
           </div>
           {/* Character image section */}
           <div className="w-full md:w-1/2 flex justify-center md:justify-end">
             <img src="https://cdn-mk1.mortalkombat.com/home/liu-kang-wfire.webp" alt="Liu Kang with fire powers" className="h-auto max-h-[70vh] w-auto max-w-full object-contain" />
           </div>
         </div>

         <div
          className={`absolute bottom-0 left-0 w-full ${effectHeightClass} z-10 pointer-events-none transform ${overlapTransform}`}
        >
          {/* Static Torn Paper Image */}
          <div
            className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat" 
            style={{
              backgroundImage: "url('https://cdn-mk1.mortalkombat.com/static/fire-border-bottom.png')",
              // Optional: Use 100% 100% if needed
              // backgroundSize: '100% 100%',
            }}
          ></div>

          {/* Fire Video Overlay */}
           <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ mixBlendMode: "screen" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
            type="video/mp4"
          />
        </video>
        </div>

      </section>

      {/* Optional: Add another section below to see the bottom fire blend */}
      <section className="relative bg-gray-800 z-0 h-40 pt-16">
          <div className="container mx-auto px-4 text-white relative z-[15]">
              Next Section Content Placeholder
          </div>
      </section>

    </div>
  );
};

export default Landing;