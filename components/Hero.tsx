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
      </section>

      {/* ✅ White section BELOW video */}
      <section className="bg-white text-black px-6 md:px-12 py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">Property Details</h2>
    
    <p className="text-lg leading-relaxed mb-6">
      <strong>Now Available for Sale:</strong> Prime 1.6-Acre Land Package in Chattanooga, TN 37405. An exceptional opportunity to acquire a contiguous land package comprised of seven individually deeded properties with 11 lots of record—offering the potential for up to 14 building lots with straightforward zoning adjustments. Additionally, this offering includes one standalone buildable lot. Located near Coolidge Park and the vibrant Frazier Avenue business district, this property presents significant development potential in a sought-after area.
    </p>

    <h3 className="text-xl font-semibold mb-2">The offering includes the following properties:</h3>
<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 mb-10 list-disc pl-5">
  <li>327 Tremont St</li>
  <li>331 Tremont St</li>
  <li>335 Tremont St</li>
  <li>401 Tremont St</li>
  <li>501 Tremont St</li>
  <li>504 E Manning St</li>
  <li>516 E Manning St</li>
  <li>518 E Manning St</li>
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
