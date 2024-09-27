"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Cursos para las tarjetas
const cursos = [
  {
    imageUrl: '/image/ingcivil.jpg',
    title: 'Ingeniería Civil',
    link: '/diplomados',
  },
  {
    imageUrl: '/image/ingambiental.jpg',
    title: 'Ingeniería Ambiental',
    link: '/diplomados',
  },
  {
    imageUrl: '/image/ingagronomo.jpg',
    title: 'Ingeniería Agronómica',
    link: '/diplomados',
  },
  {
    imageUrl: '/image/ssoma.jpg',
    title: 'SSOMA',
    link: '/diplomados',
  },
  {
    imageUrl: '/image/ingvial.jpg',
    title: 'Ingeniería Vial',
    link: '/diplomados',
  },
  {
    imageUrl: '/image/segali.jpg',
    title: 'Gestión de la calidad e inocuidad alimentaria',
    link: '/diplomados',
  },
];

// Variantes de animación
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CombinedDiplomados = () => {
  return (
    <div className="bg-transparent mx-auto max-w-screen-xl bg-center bg-fixed rounded-lg">
      {/* Contenedor de título y animación */}
      <div className="px-2 py-10 md:py-16 transform rounded-lg mx-auto max-w-screen-xl">
        {/* Animación del título */}
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

      {/* Contenedor de las tarjetas de cursos */}
      <div className="flex justify-center items-center min-h-screen bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cursos.map((curso, index) => (
            <Link href={curso.link} key={index} passHref>
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
                  <Image
                    src={curso.imageUrl}
                    alt={curso.title}
                    width={300}
                    height={500} // Ajustar la altura a 500px
                    className="object-cover rounded-lg h-[400px]" // Definir la altura de la imagen
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-90 text-white text-center py-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold">{curso.title}</h3> {/* Texto más grande */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombinedDiplomados;
