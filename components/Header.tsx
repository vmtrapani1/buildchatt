import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 h-16' : 'bg-transparent h-16'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
        
  <div className="text-white hidden sm:flex items-center space-x-6">
    <button className="flex items-center gap-1 font-medium hover:text-gray-300 transition">
      Properties
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
</div>
    </header>
  );
}
