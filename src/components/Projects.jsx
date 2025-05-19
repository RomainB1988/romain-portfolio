import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Airbnb Clone",
      description: "Clone du célèbre site Airbnb réalisé avec Ruby on Rails.",
      link: "https://github.com/RomainB1988/airbnb-clone",
      image: "/images/airbnb-clone1.PNG",
      demo: "https://romainb1988.github.io/airbnb-clone/",
    },
    {
      title: "To-Do List Avancée",
      description:
        "Application de tâches avec calendrier, carte interactive et stats.",
      link: "https://github.com/RomainB1988/todo-list-advanced",
      image: "/images/todo-list-advanced.PNG",
      demo: "https://romainb1988.github.io/todo-list-advanced/",
    },
    {
      title: "Ancien Portfolio",
      description:
        "Ce site que vous visitez actuellement, codé en React & Tailwind.",
      link: "https://github.com/RomainB1988/my-portfolio",
      image: "/images/portfolio1.PNG",
    },
    {
      title: "Dashboard Météo",
      description: "Tableau interactif pour consulter la météo et les prévisions.",
      link: "https://github.com/RomainB1988/dashboard-meteo",
      image: "/images/dashboard-meteo.PNG",
      demo: "https://romainb1988.github.io/dashboard-meteo/",
    },
    {
      title: "Glass Collect",
      description:
        "Application web pour localiser les points de collecte et recycler le verre facilement.",
      link: "https://github.com/catherine-guyot/glass_collect",
      image: "/images/Glasscollect.PNG",
    },
    {
      title: "Random Quote Generator",
      description:
        "Application web simple pour générer des citations aléatoires avec un design épuré.",
      link: "https://github.com/RomainB1988/random-quote-generator",
      image: "/images/randomquotegenerator.PNG",
      demo: "https://romainb1988.github.io/random-quote-generator/",
    },
    {
      title: "Galerie d'images",
      description:
        "Galerie interactive avec recherche, favoris, et navigation fluide.",
      link: "https://github.com/RomainB1988/galerie-images",
      image: "/images/galerie-images-thumbnail.PNG",
      demo: "https://romainb1988.github.io/galerie-images/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-8 md:px-24 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block">
        Mes projets
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.03,
              y: -6,
              boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Voir en ligne
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
