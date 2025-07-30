export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-red-500">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-black px-8 py-4 shadow-lg">
        <h1 className="text-3xl font-bold">This should be centered</h1>
      </div>
    </section>
  );
}
