import React from "react";
import Header from "../Components/Header";

const Landing = () => {
  return (
    <div className="font-robotoCondensed ">
      <section className=" h-[70vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 object-cover -z-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn-mk1.mortalkombat.com/home/hero.mp4"
            type="video/mp4"
          />
        </video>
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <img
            src="https://ext.same-assets.com/3443569425/2304381514.webp"
            alt="Mortal Kombat 1 - Khaos Reigns"
            className="max-w-xl w-full mb-8"
          />

          <a
            href="#"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase py-3 px-12 tracking-wider inline-block transition-colors duration-300"
          >
            Get Now
          </a>
        </div>
      </section>
      <div className="w-full">
        <video
          className="w-full object-cover mix-blend-screen"
          src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* //its our blood */}
      <section className="relative  bg-gray-200 overflow-hidden">
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
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            />

            <h2 className="text-4xl md:text-6xl text-blue-900 font-bold mb-6 uppercase tracking-wider">
              IT'S IN OUR BLOOD
            </h2>

            <div className="max-w-xl">
              <p className="text-blue-800 text-lg ">
                Discover a reborn Mortal Kombat Universe created by the Fire God
                Liu Kang.
              </p>
              <p className="text-blue-800">
                Mortal Kombat 1 ushers in a new era of the iconic franchise with
                a new fighting system, game modes, and fatalities!
              </p>
            </div>
          </div>

          {/* Character image */}
          <div className="w-full flex justify-center ">
            <img
              src="https://cdn-mk1.mortalkombat.com/home/liu-kang-wfire.webp"
              alt="Liu Kang with fire powers"
              className="h-[60vh] max-w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
