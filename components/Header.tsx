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
      <div className="max-w-6xl mx-auto px-4 flex justify-end items-center h-full">
        {/* Header content can go here later */}
      </div>
    </header>
  );
}
