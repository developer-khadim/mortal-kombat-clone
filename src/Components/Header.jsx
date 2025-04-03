import { useState } from 'react';

const Header = () => {
  const [language, setLanguage] = useState('UNITED STATES - ENGLISH');

  const topNavLinks = [
    { href: '#', label: 'Shop Merch' },
    { href: '#', label: 'PC Specs', className: 'text-gray-600 hover:text-yellow-800' },
    { href: '#', label: 'Report a Bug' },
    { href: '#', label: 'Support' },
    { href: '#', label: 'Patch Notes' },
    { href: '#', label: 'Sign In' },
  ];

  const mainNavLinks = [
    { href: '#', label: 'Khaos Reigns' },
    { href: '#', label: 'Game Info' },
    { href: '#', label: 'Roster' },
    { href: '#', label: '#MKKollective' },
    { href: '#', label: 'Media' },
    { href: '#', label: 'Esports' },
    { href: '#', label: 'FAQ' },
  ];

  return (
    <header className="bg-mk-navy w-full z-20">
      {/* Top navigation bar */}
      <div className="container mx-auto px-4 flex justify-between items-center h-14">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-100 hover:text-yellow-400">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,5C25.1,5,5,25.1,5,50s20.1,45,45,45s45-20.1,45-45S74.9,5,50,5z M71.6,71.6c-1.9,1.9-4.4,2.9-7.1,2.9 c-2.7,0-5.2-1-7.1-2.9L50,64.2l-7.4,7.4c-1.9,1.9-4.4,2.9-7.1,2.9c-2.7,0-5.2-1-7.1-2.9c-3.9-3.9-3.9-10.2,0-14.1L43.8,42 L28.4,26.6c-3.9-3.9-3.9-10.2,0-14.1c3.9-3.9,10.2-3.9,14.1,0L50,20l7.4-7.4c3.9-3.9,10.2-3.9,14.1,0c3.9,3.9,3.9,10.2,0,14.1 L56.2,42l15.4,15.4C75.5,61.3,75.5,67.7,71.6,71.6z"/>
            </svg>
          </a>
          <button className="text-white hover:text-yellow-400 flex items-center">
            {language}
          </button>
          {topNavLinks.slice(0, 1).map((link, index) => (
            <a key={index} href={link.href} className="text-gray-300 text-xs uppercase hover:text-yellow-400">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {topNavLinks.slice(1).map((link, index) => (
            <a key={index} href={link.href} className={`text-gray-300 text-xs uppercase hover:text-yellow-400 ${link.className || ''}`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-mk-navy border-t border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-14">
          <div className="hidden md:flex items-center space-x-8">
            {mainNavLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-300 text-sm uppercase hover:text-yellow-400">
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <a href="#" className="bg-yellow-500 text-black px-6 py-2 uppercase text-sm font-bold tracking-wider transition-colors duration-300 hover:bg-yellow-600">
            Get Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;