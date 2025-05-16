import { motion } from "framer-motion";

function ModalSuccess({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8 rounded-xl shadow-xl w-96 text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Message envoyé ! ✅</h3>
        <p className="text-sm mb-6">Merci de m’avoir contacté. Je vous répondrai dès que possible.</p>
        <button
          onClick={onClose}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Fermer
        </button>
      </motion.div>
    </motion.div>
  );
}

export default ModalSuccess;
