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

const useCounter = (endValue, isVisible) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
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
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
      className="relative flex flex-col md:flex-row justify-between items-center min-h-screen px-4 md:px-12 bg-gradient-to-b from-white via-blue-200 to-white overflow-hidden"
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

        {/* Tarjetas con el efecto de llenado desde abajo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center bg-white p-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto group"
          >
            <div className="relative z-10">
              <img
                src="/gif/pers2.gif"
                alt="Gif Animado"
                width={50}
                height={50}
                className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-lg md:text-3xl font-bold text-black">
                +{impartedCoursesCount}
              </h2>
              <p className="text-black">Alumnos beneficiados</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center bg-white p-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto group"
          >
            <div className="relative z-10">
              <img
                src="/gif/graduate2.gif"
                alt="Gif Animado"
                width={50}
                height={50}
                className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-lg md:text-3xl font-bold text-black">
                +{diplomasCount}
              </h2>
              <p className="text-black">Diplomados Disponibles</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center bg-white p-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto group"
          >
            <div className="relative z-10">
              <img
                src="/gif/doc1.gif"
                alt="Gif Animado"
                width={50}
                height={50}
                className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-lg md:text-3xl font-bold text-black">
                +{coursesCount}
              </h2>
              <p className="text-black">Cursos Disponibles</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center bg-white p-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full max-w-[350px] mx-auto group"
          >
            <div className="relative z-10">
              <img
                src="/gif/star3.gif"
                alt="Gif Animado"
                width={50}
                height={50}
                className="mx-auto mb-2 transform hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-lg md:text-3xl font-bold text-black">
                +{impartedCoursesCount}
              </h2>
              <p className="text-black">Clases virtuales impartidas</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PrincipalHome;
