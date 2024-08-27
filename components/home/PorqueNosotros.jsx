import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { UsersIcon, BookOpenIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/solid';

const PorqueNosotros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  const handleScroll = () => {
    const element = document.getElementById("porque-nosotros");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const features = [
    { name: '+1500', description: 'Alumnos beneficiados', icon: UsersIcon },
    { name: '+50', description: 'Diplomados disponibles', icon: AcademicCapIcon },
    { name: '+600', description: 'Cursos disponibles', icon: BookOpenIcon },
    { name: '+1000', description: 'Cursos impartidas', icon: StarIcon },
  ];

  return (
<div id="porque-nosotros" className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-primaryblue dark:text-white text-4xl font-extrabold mb-4"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            ¿Por qué elegir Inalta?
          </motion.h2>
          <motion.p
            className="text-gray-400 dark:text-white text-lg sm:text-xl mx-auto max-w-3xl"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            En Inalta, nos especializamos en potenciar las habilidades profesionales de nuestros estudiantes a 
            través de una oferta educativa diversificada. Con programas enfocados en áreas como la tecnología, 
            el liderazgo y la gestión, te brindamos las herramientas necesarias para avanzar en tu carrera y 
            alcanzar tus metas.
          </motion.p>
        </div>
        <div className="flex justify-around flex-wrap gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-600"
              variants={statsVariants}
            >
              <feature.icon className="h-16 w-16 text-primaryblue dark:text-white mb-4 mx-auto" aria-hidden="true" />
              <dt className="text-3xl font-extrabold text-gray-800 dark:text-white">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-600 dark:text-gray-300">{feature.description}</dd>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PorqueNosotros;
