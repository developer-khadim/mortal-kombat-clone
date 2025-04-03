import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn-mk1.mortalkombat.com/home/hero.mp4" type="video/mp4" />
      </video>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <img
          src="https://ext.same-assets.com/3443569425/2304381514.webp"
          alt="Mortal Kombat 1 - Khaos Reigns"
          className="max-w-2xl w-full mb-8"
        />

        <a
          href="#"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase py-3 px-12 tracking-wider inline-block transition-colors duration-300"
        >
          Get Now
        </a>
      </div>
    </section>
  );
};

export default Hero;