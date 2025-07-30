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
        className="absolute top-24 left-0 w-full bg-white/10 backdrop-blur-sm text-white shadow-lg px-8 md:px-16 py-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          NORTH CHATTANOOGA DEVELOPMENT
        </h1>
        <p className="text-lg md:text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          For Sale, 15 Potential Building Sites, Exceptional Location...
        </p>
      </motion.div>
    </section>

    {/* Add more content below the hero section */}
<section className="bg-white text-black px-6 py-20">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Property Details</h2>
    <p className="text-lg leading-relaxed">
      This rare parcel offers up to 15 buildable lots on 1.6 continuous acres near the heart of Chattanooga. Zoned for residential development with utilities nearby and walkable access to key locations.
    </p>
  </div>
</section>
  );
}
