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
        <div className="relative group">
          <button className="flex items-center gap-1 text-white font-medium hover:text-gray-300 transition">
            Properties
            <svg
              className="w-4 h-4 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <ul className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg min-w-[180px] z-50">
            {[
              "327 Tremont St",
              "331 Tremont St",
              "335 Tremont St",
              "401 Tremont St",
              "501 Tremont St",
              "518 E Manning St",
              "516 E Manning St",
              "504 E Manning St"
            ].map((address) => (
              <li
                key={address}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
              >
                {address}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
