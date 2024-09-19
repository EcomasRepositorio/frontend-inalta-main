import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./scrollAnimation";

const NuestrosDiplomados = () => {
  // Variantes para el efecto de desvanecimiento
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <ScrollAnimation>
      <div className="bg-transparent fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed rounded-lg">
        <div className="px-2 py-10 md:py-16 transform rounded-lg mx-auto max-w-screen-xl">
          {/* Animación de desvanecimiento con título en color negro */}
          <motion.h2
            className="text-center text-black text-3xl sm:text-4xl font-extrabold uppercase mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // El efecto ocurre una vez cuando el 50% del elemento está visible
            variants={fadeIn}
          >
            Nuestros Diplomados
          </motion.h2>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default NuestrosDiplomados;
