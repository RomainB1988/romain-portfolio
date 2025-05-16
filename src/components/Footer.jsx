function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-center text-sm py-6 text-gray-600 dark:text-gray-300">
      <p>&copy; {new Date().getFullYear()} Romain Buisine. Tous droits réservés.</p>
      <p>
        <a href="https://www.romainbuisine.fr" className="text-blue-500 hover:underline">www.romainbuisine.fr</a>
      </p>
    </footer>
  );
}

export default Footer;
