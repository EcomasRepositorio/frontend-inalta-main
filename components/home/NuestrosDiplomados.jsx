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
        <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl">
          {/* Hacemos que el h2 se desvanezca al aparecer, con las letras individuales */}
          <motion.h2
            className="text-3xl font-extrabold mb-1 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // El efecto solo ocurre una vez cuando el 50% del elemento está en la vista
            variants={fadeIn} // Aplicamos la animación de desvanecimiento
          >
            <span style={{ opacity: 1, transform: 'none' }}>N</span>
            <span style={{ opacity: 1, transform: 'none' }}>U</span>
            <span style={{ opacity: 1, transform: 'none' }}>E</span>
            <span style={{ opacity: 1, transform: 'none' }}>S</span>
            <span style={{ opacity: 1, transform: 'none' }}>T</span>
            <span style={{ opacity: 1, transform: 'none' }}>R</span>
            <span style={{ opacity: 1, transform: 'none' }}>O</span>
            <span style={{ opacity: 1, transform: 'none' }}>S</span>
            <span style={{ opacity: 1, transform: 'none' }}> </span>
            <span style={{ opacity: 1, transform: 'none' }}>D</span>
            <span style={{ opacity: 1, transform: 'none' }}>I</span>
            <span style={{ opacity: 1, transform: 'none' }}>P</span>
            <span style={{ opacity: 1, transform: 'none' }}>L</span>
            <span style={{ opacity: 1, transform: 'none' }}>O</span>
            <span style={{ opacity: 1, transform: 'none' }}>M</span>
            <span style={{ opacity: 1, transform: 'none' }}>A</span>
            <span style={{ opacity: 1, transform: 'none' }}>D</span>
            <span style={{ opacity: 1, transform: 'none' }}>O</span>
            <span style={{ opacity: 1, transform: 'none' }}>S</span>
          </motion.h2>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default NuestrosDiplomados;
