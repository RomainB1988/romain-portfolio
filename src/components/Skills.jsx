import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiPostgresql, SiRubyonrails, SiMapbox, SiSqlite, SiExpress, SiApachespark } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const skillIcons = {
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaJsSquare className="text-yellow-500" />,
  React: <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  Vite: <SiVite className="text-purple-400" />,
  "Ruby on Rails": <SiRubyonrails className="text-red-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-800" />,
  SQLite: <SiSqlite className="text-gray-500" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub className="text-black dark:text-white" />,
  Figma: <FaFigma className="text-pink-500" />,
  Mapbox: <SiMapbox className="text-blue-400" />,
  "Framer Motion": <TbBrandFramerMotion className="text-pink-400" />,
  "API REST": <SiApachespark className="text-orange-400" />,
};

function Skills() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
    Backend: ["Ruby on Rails", "Node.js", "Express", "PostgreSQL", "SQLite"],
    "Outils & Autres": ["Git", "GitHub", "Figma", "Mapbox", "Framer Motion", "API REST"],
  };

  return (
    <section id="skills" className="py-24 px-8 md:px-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block">
        Compétences techniques
      </h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-blue-500">{category}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-100 hover:scale-105 transition-transform"
                >
                  {skillIcons[item]} {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
