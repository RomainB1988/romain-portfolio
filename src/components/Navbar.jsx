import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Formations', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow backdrop-blur-lg px-6 md:px-24 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">Romain</div>

      {/* Desktop links */}
      <ul className="hidden md:flex space-x-6 font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-blue-500 transition" onClick={closeMenu}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-xl ml-4 md:ml-8"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile menu icon */}
      <div className="md:hidden ml-4">
        <button onClick={toggleMenu} className="text-2xl" aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md mt-2 py-4 px-6 md:hidden flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium hover:text-blue-500 transition"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
