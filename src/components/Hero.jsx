function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m <span className="text-blue-500">Romain Buisine</span></h1>
        <h2 className="text-2xl md:text-3xl font-medium">Full-Stack Developer</h2>
        <a href="#about">
  <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
    À propos de moi
  </button>
</a>

      </div>

      <div className="flex-1 mt-12 md:mt-0 flex justify-center">
        <div className="w-64 h-64 bg-gray-300 rounded-full"></div> {/* à remplacer par ta photo */}
      </div>
    </section>
  );
}

export default Hero;
