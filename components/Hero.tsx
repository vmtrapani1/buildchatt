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
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">North Chattanooga Development</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">15 potential building sites, 1.6 continuous acres</p>
        <a href="#contact" className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">Get More Info</a>
      </div>
    </section>
  );
}
