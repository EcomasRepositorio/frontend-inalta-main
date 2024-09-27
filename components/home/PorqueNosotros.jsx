"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  UserIcon,
  AcademicCapIcon,
  BookOpenIcon,
  StarIcon,
} from "@heroicons/react/solid";

// Carga dinámica del componente Globe (sin SSR)
const Globe = dynamic(() => import("../globe/Globe"), { ssr: false });

// Hook para el contador animado usando requestAnimationFrame
const useCounter = (endValue, isVisible) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Solo iniciar el contador si el elemento es visible

    let start = 0;
    const duration = 2000; // Duración de la animación en milisegundos
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setCount(Math.ceil(progress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animateCount);
  }, [endValue, isVisible]);

  return count;
};

const PrincipalHome = () => {
  const sectionRef = useRef(null); // Referencia para observar el contenedor de métricas
  const [isVisible, setIsVisible] = useState(false); // Estado para saber si la sección es visible

  // Hook para observar la visibilidad del contenedor
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Cambia el estado según la visibilidad
      },
      { threshold: 0.5 } // 50% del contenedor debe ser visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const studentsCount = useCounter(1500, isVisible);
  const diplomasCount = useCounter(50, isVisible);
  const coursesCount = useCounter(400, isVisible);
  const impartedCoursesCount = useCounter(1000, isVisible);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row justify-between items-center min-h-screen px-4 md:px-12 bg-gradient-to-b from-blue-50 via-blue-200 to-white overflow-hidden"
    >
      {/* Contenedor del Globo (Izquierda) */}
      <motion.div
        className="w-full md:max-w-[600px] text-left mt-4 md:mt-0 ml-1 z-10 overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="globe-container">
          <Globe />
        </div>
      </motion.div>

      {/* Contenedor del Texto y Métricas (Derecha) */}
      <motion.div
        className="w-full md:w-1/2 text-left mt-4 md:mt-0 ml-1 z-10 max-w-screen-lg mx-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="mb-4 px-2 md:px-0">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-black text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-6 md:mb-8"
          >
            ¿Por qué elegir Inalta?
          </motion.h1>
          <p className="text-lg md:text-2xl leading-relaxed md:leading-normal">
            Elige Inalta para impulsar tu futuro. Con nuestros cursos
            especializados, abrimos las puertas a un mundo de conocimientos que
            te llevará más allá de tus límites.
          </p>
        </div>

        {/* Métricas con estilo de cuadro y efecto hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-2 md:px-0">
          {/* Tarjetas (contenedor) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            {/* Usa una etiqueta img nativa para verificar */}
            <img
              src="/gif/pers.gif"
              alt="Gif Animado"
              width={50}
              height={50}
              className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-lg md:text-3xl font-bold">
              +{impartedCoursesCount}
            </h2>
            <p>Alumnos beneficiados</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            {/* Usa una etiqueta img nativa para verificar */}
            <img
              src="/gif/graduate.gif"
              alt="Gif Animado"
              width={50}
              height={50}
              className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-lg md:text-3xl font-bold">
              +{impartedCoursesCount}
            </h2>
            <p>Diplomados Disponibless</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            {/* Usa una etiqueta img nativa para verificar */}
            <img
              src="/gif/doc.gif"
              alt="Gif Animado"
              width={50}
              height={50}
              className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-lg md:text-3xl font-bold">
              +{impartedCoursesCount}
            </h2>
            <p>Cursos iDisponibless</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            {/* Usa una etiqueta img nativa para verificar */}
            <img
              src="/gif/star2.gif"
              alt="Gif Animado"
              width={50}
              height={50}
              className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-lg md:text-3xl font-bold">
              +{impartedCoursesCount}
            </h2>
            <p>Clases virtuales impartidas</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PrincipalHome;
