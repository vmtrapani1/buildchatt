import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glass Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full bg-white/10 backdrop-blur-md text-white px-6 md:px-12 py-4 shadow-md"
      >
        <div className="relative flex items-center justify-center w-full min-h-[64px]">
          {/* Centered Headline */}
          <h1 className="text-5xl md:text-4xl font-bold tracking-wide drop-shadow text-center w-full">
            North Chattanooga Development
          </h1>


          {/* Right-aligned Dropdown */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
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
        </div>
      </motion.div>
      
      {/* Below-the-hero content */}
  <section className="bg-white text-black px-6 md:px-12 py-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Property Details
      </h2>
      <p className="text-lg leading-relaxed">
        This rare parcel offers up to 15 buildable lots on 1.6 continuous acres near the heart of Chattanooga. Zoned for residential development with utilities nearby and walkable access to key locations.
      </p>
    </div>
  </section>
    </section>
  );
}
