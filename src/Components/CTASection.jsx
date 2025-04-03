const CTASection = () => {
    return (
      <section className="bg-mk-light-gray py-20 relative">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="relative mb-8">
            <div className="rounded-full overflow-hidden border-4 border-mk-gold w-64 h-64">
              <img
                src="https://ext.same-assets.com/3443569425/907823223.webp"
                alt="Mortal Kombat Logo with Liu Kang"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          <a href="#" className="bg-mk-gold hover:bg-yellow-600 text-white font-bold uppercase py-3 px-12 tracking-wider inline-block transition-colors duration-300">
            Get Now
          </a>
        </div>
  
        {/* Fire border effects */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
          <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-black to-transparent" />
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black to-transparent" />
        </div>
      </section>
    );
  };
  
  export default CTASection;