import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm text-white shadow-lg px-8 md:px-16 py-10 flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] text-center">
          NORTH CHATTANOOGA DEVELOPMENT
        </h1>
        <p className="text-lg md:text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] text-center">
          For Sale, 15 Potential Building Sites, Exceptional Location on Tremont St
        </p>

        {/* Properties dropdown in bottom-right */}
        <div className="absolute bottom-6 right-6 group">
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
              "504 E Manning St",
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
      </motion.div>
    </section>
  );
}
