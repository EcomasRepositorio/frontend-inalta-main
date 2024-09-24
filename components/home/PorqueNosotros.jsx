"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic"; // Importar dinámicamente el componente Globe
import {
  UserIcon,
  AcademicCapIcon,
  BookOpenIcon,
  StarIcon,
} from "@heroicons/react/solid"; // Iconos

// Carga dinámica del componente Globe (sin SSR)
const Globe = dynamic(() => import("../globe/Globe"), { ssr: false });

const PrincipalHome = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center min-h-screen px-8 bg-gradient-to-b from-white via-blue-200 to-white animate-bgMove">
      {/* Contenedor del Globo (Izquierda) */}
      <motion.div
        className="w-full md:max-w-[600px] text-left mt-4 md:mt-0 ml-1 z-10" // Añadido z-index para asegurar que esté encima
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="globe-container">
          <Globe />
        </div>
      </motion.div>

      {/* Contenedor del Texto (Derecha) */}
      <motion.div
        className="w-full md:w-1/1 text-left mt-4 md:mt-0 ml-1 z-10" 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="mb-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className=" text-black text-3xl sm:text-4x1 font-extrabold uppercase mb-8"
          >
            ¿Por qué elegir Inalta?
          </motion.h1>
          <p className="text-xl md:text-2xl">
            Conquista el conocimiento sin fronteras. En Inalta, te conectamos con
            el mundo a través de cursos especializados que te llevarán al
            siguiente nivel.
          </p>
        </div>

        {/* Métricas con estilo de cuadro y efecto hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 z-10">
  {/* Tarjeta 1 */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
  >
    {/* Ajustamos el tamaño del ícono a un cuadrado más pequeño */}
    <UserIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
    <h2 className="text-xl md:text-3xl font-bold">+1500</h2>
    <p>Alumnos beneficiados</p>
  </motion.div>

  {/* Tarjeta 2 */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
  >
    <AcademicCapIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
    <h2 className="text-xl md:text-3xl font-bold">+50</h2>
    <p>Diplomados disponibles</p>
  </motion.div>

  {/* Tarjeta 3 */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
  >
    <BookOpenIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
    <h2 className="text-xl md:text-3xl font-bold">+400</h2>
    <p>Cursos disponibles</p>
  </motion.div>

  {/* Tarjeta 4 */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
  >
    <StarIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
    <h2 className="text-xl md:text-3xl font-bold">+1000</h2>
    <p>Cursos impartidos</p>
  </motion.div>
</div>

      </motion.div>
    </section>
  );
};

export default PrincipalHome;
