import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
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
          className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md text-white px-6 md:px-12 py-4 shadow-md"
        >
          <div className="relative flex flex-col md:flex-row items-center w-full min-h-[64px] px-4">
            {/* Headline */}
            <div className="flex-1 text-center">
              <h1 className="text-2xl md:text-6xl font-bold tracking-wide drop-shadow text-white">
                North Chattanooga Development
              </h1>
            </div>

            {/* Dropdown */}
            <div className="relative group mt-0 md:mt-0 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
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

              <ul className="absolute right-0 mt-4 hidden group-hover:block bg-white/10 backdrop-blur-lg text-white rounded shadow-xl min-w-[200px] z-50 py-2">
                {[
                  "327 Placeholder St",
                  "331 Placeholder St",
                  "335 Placeholder St",
                  "401 Placeholder St",
                  "501 Placeholder St",
                  "504 Placeholder St",
                  "516 Placeholder",
                  "518 Placeholder",
                ].map((address) => (
                  <li
                    key={address}
                    className="px-4 py-2 hover:bg-white/20 cursor-pointer whitespace-nowrap"
                  >
                    {address}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* White section BELOW video */}
      <section className="bg-white text-black px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Property Details</h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Now Available for Sale:</strong> Prime 1.6-Acre Land Package in Chattanooga, TN 37405. An exceptional opportunity to acquire a contiguous land package comprised of seven individually deeded properties with 11 lots of record—offering the potential for up to 14 building lots with straightforward zoning adjustments. Additionally, this offering includes one standalone buildable lot. Located near Coolidge Park and the vibrant Frazier Avenue business district, this property presents significant development potential in a sought-after area.
          </p>

          <h3 className="text-xl font-semibold mb-2">The offering includes the following properties:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 mb-10 list-disc pl-5">
            <li>327 Placeholder St</li>
            <li>331 Placeholder St</li>
            <li>335 Placeholder St</li>
            <li>401 Placeholder St</li>
            <li>501 Placeholder St</li>
            <li>504 Placeholder St</li>
            <li>516 Placeholder St</li>
            <li>518 Placeholder St</li>
          </ul>

          <div className="mb-12 px-2 sm:px-4 md:px-0">
            <img
              src="/map.png"
              alt="Map of Property Locations"
              className="w-full max-w-5xl mx-auto h-auto rounded shadow-md"
            />
          </div>

          <h3 className="text-xl font-semibold mb-2">Development Possibilities</h3>
          <p className="text-lg leading-relaxed mb-4">
            This land package offers a builder flexibility in potential development options:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Single Family – 14 Potential Building Sites</li>
            <li>Duplex – 6 Duplexes (12 Potential Units) with 8 Single Family</li>
            <li>Quad – 6 Quadplexes (24 Potential Units) with 8 Single Family</li>
            <li>Townhome – 30 Townhomes with 8 Single Family</li>
            <li>Multi-Family – 37 Apartments with 8 Single Family</li>
          </ul>
        </div>
      </section>
    </>
  );
}
