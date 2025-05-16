import { FaSchool, FaLaptopCode, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Experience() {
  const timeline = [
    {
      title: "BTS MUC",
      place: "EIMP Paris",
      date: "Juin 2009 - Juin 2012",
      description: "Gestion de la relation client, techniques de vente, négociation, gestion d’équipe et de projet.",
      icon: <FaSchool className="text-xl text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Le Wagon - Développement Web",
      place: "Certification RNCP Niveau 6",
      date: "Fév. 2023 - Juil. 2023",
      description: "Formation fullstack : Ruby on Rails, SQL, JavaScript, projets en équipe, déploiement et API externes.",
      icon: <FaLaptopCode className="text-xl text-white" />,
      color: "bg-indigo-500"
    },
    {
      title: "Piscine 42",
      place: "École 42 - Lyon",
      date: "Septembre 2024",
      description: "Programmation en C, algorithmie, autonomie, gestion de projet en environnement Unix.",
      icon: <FaBrain className="text-xl text-white" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-24 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 border-b-4 border-blue-500 inline-block">
        Formations
      </h2>

      <div className="relative border-l-4 border-blue-300 dark:border-blue-500 pl-6 space-y-16">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className={`absolute -left-7 top-0 rounded-full w-6 h-6 flex items-center justify-center ${item.color} shadow-lg`}>
              {item.icon}
            </span>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-blue-500">{item.place} • {item.date}</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
