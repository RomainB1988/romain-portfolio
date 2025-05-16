import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-24 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          À propos de moi
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
          Passionné par le développement web, je me suis formé avec rigueur et créativité au sein du Wagon et de l'école 42.
          Mon objectif est de concevoir des interfaces modernes, performantes et accessibles.
          Chaque ligne de code que j’écris est pensée pour l’utilisateur, la clarté et la maintenabilité.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
