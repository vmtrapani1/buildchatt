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
          North Chattanooga Development
        </h1>
        <p className="text-lg md:text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          15 potential building sites, 1.6 continuous acres, exceptional location
        </p>
      </motion.div>
    </section>
  );
}
