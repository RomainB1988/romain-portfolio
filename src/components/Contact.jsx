import { useState } from "react";
import { motion } from "framer-motion";
import ModalSuccess from "./ModalSuccess";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    nickname: "" // honeypot
  });
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Honeypot check
    if (formData.nickname) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mvgalqvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.ok || response.ok) {
        setShowModal(true);
        setFormData({ name: "", email: "", message: "", nickname: "" });
        setStatus(null);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Honeypot */}
        <input
          type="text"
          name="nickname"
          className="hidden"
          autoComplete="off"
          value={formData.nickname}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Envoyer
        </button>

        {status === "error" && (
          <p className="text-red-500 font-medium">Erreur. Veuillez réessayer ❌</p>
        )}
        {status === "loading" && <p className="text-blue-500">Envoi en cours...</p>}
      </motion.form>

      {showModal && <ModalSuccess onClose={() => setShowModal(false)} />}
    </section>
  );
}

export default Contact;
