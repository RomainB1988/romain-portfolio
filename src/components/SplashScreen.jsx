import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50"
    >
      <motion.img
        src="/logo-splash.png"
        alt="Logo Romain Buisine"
        className="w-32 h-32 md:w-48 md:h-48 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* BARRE DE CHARGEMENT */}
      <div className="w-48 h-2 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}

export default SplashScreen;
