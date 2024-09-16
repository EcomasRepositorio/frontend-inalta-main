import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { UsersIcon, BookOpenIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/solid';

const PorqueNosotros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

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
    { name: '+1000', description: 'Cursos impartidos', icon: StarIcon },
  ];

  return (
    <div id="porque-nosotros" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-black text-4xl font-extrabold mb-4"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            ¿Por qué elegir Inalta?
          </motion.h2>
          <motion.p
            className="text-black text-lg sm:text-xl mx-auto max-w-3xl"
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-white shadow-lg rounded-lg p-6 border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300 ease-out"
              variants={statsVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="flex items-center justify-center mb-6">
                {React.createElement(feature.icon, { className: "h-16 w-16 text-black mb-4 mx-auto", "aria-hidden": "true" })}
              </div>
              <dt className="text-3xl font-extrabold text-black">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-600">{feature.description}</dd>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PorqueNosotros;
