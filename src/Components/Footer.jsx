const Footer = () => {
    return (
      <footer className="bg-mk-navy text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-6 space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Ad Choices
            </a>
          </div>
  
          <div className="text-center text-gray-500 text-xs">
            <p className="mb-4">
              MORTAL KOMBAT 1 Software © 2024 Warner Bros. Entertainment Inc. Developed by NetherRealm Studios.
              Unreal Engine, copyright 1998-2024 Epic Games, Inc. Unreal, Unreal Technology and the Powered by
              Unreal Technology logo are trademarks or registered trademarks of Epic Games, Inc.
            </p>
            <p>
              NETHERREALM STUDIOS LOGO, MORTAL KOMBAT, THE DRAGON LOGO, and all related characters and
              elements are trademarks of and © 2024 Warner Bros. Entertainment Inc.
            </p>
            <p className="mt-4">
              WARNER BROS. GAMES LOGO, WARNER BROS. INTERACTIVE LOGO, WB SHIELD: ™ & © Warner Bros. Entertainment Inc. (s24)
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;