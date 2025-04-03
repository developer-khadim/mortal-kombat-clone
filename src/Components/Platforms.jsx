const Platforms = () => {
    const platformLogos = [
      {
        name: "Warner Bros",
        src: "https://ext.same-assets.com/3443569425/2406947933.svg",
        alt: "Warner Bros Logo",
        className: "h-10 w-auto"
      },
      {
        name: "PlayStation 5",
        src: "https://ext.same-assets.com/3443569425/3824733450.svg",
        alt: "PlayStation 5 Logo",
        className: "h-8 w-auto"
      },
      {
        name: "Xbox Series X|S",
        src: "https://ext.same-assets.com/3443569425/1878448649.svg",
        alt: "Xbox Series X|S Logo",
        className: "h-7 w-auto"
      },
      {
        name: "Nintendo Switch",
        src: "https://ext.same-assets.com/3443569425/2859344067.svg",
        alt: "Nintendo Switch Logo",
        className: "h-8 w-auto"
      },
      {
        name: "Steam",
        src: "https://ext.same-assets.com/3443569425/1058883791.svg",
        alt: "Steam Logo",
        className: "h-8 w-auto"
      },
      {
        name: "Epic Games",
        src: "https://ext.same-assets.com/3443569425/4060183034.svg",
        alt: "Epic Games Logo",
        className: "h-8 w-auto"
      }
    ];
  
    return (
      <section className="bg-mk-navy py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {platformLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.className}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Platforms;