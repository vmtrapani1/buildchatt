import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
        {/* <img src="/logo.png" alt="BuildChatt" className={`transition-all ${scrolled ? 'h-10' : 'h-12'}`} /> */}
           {/* <div className="text-white hidden sm:block">Call: (423) 227-2924</div> */}
      </div>
    </header>
  );
}
