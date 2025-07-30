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

      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-6 text-center text-white shadow-lg max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          North Chattanooga Development
        </h1>
        <p className="text-lg md:text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          15 potential building sites, 1.6 continuous acres, exceptional location
        </p>
      </div>
    </section>
  );
}
