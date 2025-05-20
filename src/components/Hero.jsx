import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="py-32 px-6 md:px-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Texte à gauche */}
        <div className="text-center md:text-left md:flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bonjour, je suis Romain 👋
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Développeur full-stack passionné par la création d'applications modernes,
            fonctionnelles et accessibles.
          </p>
          <a href="#about">
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
              À propos de moi
            </button>
          </a>
        </div>

        {/* Photo à droite avec halo dégradé animé */}
        <motion.div
          className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center animate-pulse-slow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Halo dégradé */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-2xl z-0"></div>

          {/* Image */}
          <img
            src="/photo-romain.jpg"
            alt="Photo de Romain Buisine"
            className="relative w-full h-full rounded-full object-cover shadow-xl z-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
