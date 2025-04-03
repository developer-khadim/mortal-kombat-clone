const KombatPack = () => {
    return (
      <section className="bg-black py-20 relative text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl uppercase mb-2">JUSTICE. THEIR WAY.</h3>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-10">KOMBAT PACK</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Introducing your roster for the Mortal Kombat 1 Kombat Pack fighters.
            </p>
            <div className="flex flex-wrap justify-center mt-8 text-xl font-bold">
              <span className="px-3 py-1">TAKEDA</span>
              <span className="px-3 py-1">•</span>
              <span className="px-3 py-1">QUAN CHI</span>
              <span className="px-3 py-1">•</span>
              <span className="px-3 py-1">ERMAC</span>
              <span className="px-3 py-1">•</span>
              <span className="px-3 py-1">PEACEMAKER</span>
              <span className="px-3 py-1">•</span>
              <span className="px-3 py-1">HOMELANDER</span>
              <span className="px-3 py-1">•</span>
              <span className="px-3 py-1">OMNI-MAN</span>
            </div>
          </div>
  
          <div className="flex justify-center">
            <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white/10 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
  
        {/* Fire border effect at the top */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
          <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-black to-transparent" />
        </div>
      </section>
    );
  };
  
  export default KombatPack;