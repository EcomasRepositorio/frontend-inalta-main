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

  const studentsCount = useCounter(1500, isVisible); // Contador para Alumnos beneficiados
  const diplomasCount = useCounter(50, isVisible); // Contador para Diplomados disponibles
  const coursesCount = useCounter(400, isVisible); // Contador para Cursos disponibles
  const impartedCoursesCount = useCounter(1000, isVisible); // Contador para Cursos impartidos

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row justify-between items-center min-h-screen px-8 bg-gradient-to-b from-white via-blue-200 to-white animate-bgMove"
    >
      {/* Contenedor del Globo (Izquierda) */}
      <motion.div
        className="w-full md:max-w-[600px] text-left mt-4 md:mt-0 ml-1 z-10"
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
        className="w-full md:w-1/1 text-left mt-4 md:mt-0 ml-1 z-10 max-w-screen-lg mx-auto px-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="mb-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-black text-3xl sm:text-4xl font-extrabold uppercase mb-8"
          >
            ¿Por qué elegir Inalta?
          </motion.h1>
          <p className="text-xl md:text-2xl">
          Elige Inalta para impulsar tu futuro. Con nuestros cursos especializados, 
          abrimos las puertas a un mundo de conocimientos que te 
          llevará más allá de tus límites.

          </p>
        </div>

        {/* Métricas con estilo de cuadro y efecto hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 z-10 max-w-screen-lg mx-auto px-4">
          {/* Tarjetas (contenedor) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Aparecer desde la izquierda en pantallas pequeñas
            md={{ opacity: 0, y: 100 }} // En pantallas grandes, desde abajo
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            <UserIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl md:text-3xl font-bold">+{studentsCount}</h2>
            <p>Alumnos beneficiados</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }} // Aparecer desde la derecha en pantallas pequeñas
            md={{ opacity: 0, y: 100 }} // En pantallas grandes, desde abajo
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            <AcademicCapIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl md:text-3xl font-bold">+{diplomasCount}</h2>
            <p>Diplomados disponibles</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }} // Aparecer desde la izquierda en pantallas pequeñas
            md={{ opacity: 0, y: 100 }} // En pantallas grandes, desde abajo
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            <BookOpenIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl md:text-3xl font-bold">+{coursesCount}</h2>
            <p>Cursos disponibles</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }} // Aparecer desde la derecha en pantallas pequeñas
            md={{ opacity: 0, y: 100 }} // En pantallas grandes, desde abajo
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto"
          >
            <StarIcon className="w-10 h-10 mx-auto mb-2 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl md:text-3xl font-bold">
              +{impartedCoursesCount}
            </h2>
            <p>Cursos impartidos</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PrincipalHome;
