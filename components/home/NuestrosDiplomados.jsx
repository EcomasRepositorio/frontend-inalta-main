"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Lista de cursos con datos de ejemplo
const cursos = [
  { imageUrl: '/image/ingcivil.jpg', title: 'Ingeniería Civil', link: '/diplomados' },
  { imageUrl: '/image/ingambiental.jpg', title: 'Ingeniería Ambiental', link: '/diplomados' },
  { imageUrl: '/image/ingagronomo.webp', title: 'Ingeniería Agronómica', link: '/diplomados' },
  { imageUrl: '/image/ssoma.webp', title: 'SSOMA', link: '/diplomados' },
  { imageUrl: '/image/ingvial.jpg', title: 'Ingeniería Vial', link: '/diplomados' },
  { imageUrl: '/image/segali.webp', title: 'Gestión de la calidad e inocuidad alimentaria', link: '/diplomados' },
];

const CombinedDiplomados = () => {
  return (
    <div className="bg-gray-100 mx-auto py-16 px-4 lg:px-8">
      {/* Título del componente */}
      <h2 className="text-center text-3xl font-bold uppercase mb-10">Nuestros Diplomados</h2>

      {/* Contenedor de la cuadrícula */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto">
        {cursos.map((curso, index) => (
          <Link href={curso.link} key={index} passHref>
            {/* Contenedor de las tarjetas con diseño adaptativo */}
            <div className="relative group cursor-pointer rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 bg-white">
              {/* Contenedor de la imagen con las nuevas propiedades de Next.js */}
              <div className="w-full h-64 relative">
                <Image
                  src={curso.imageUrl}
                  alt={curso.title}
                  fill
                  style={{ objectFit: "cover" }} // Nuevo estilo para ajustar la imagen
                  priority={index < 2} // Se priorizan las dos primeras imágenes
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw" // Ajustar según el tamaño de la pantalla
                  className="rounded-t-lg"
                />
              </div>
              
              {/* Título de la tarjeta con adaptaciones según pantalla */}
              <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-blue-600 md:bg-opacity-0 md:text-white md:text-center md:opacity-0 md:group-hover:bg-opacity-80 md:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl md:text-xl font-semibold py-2 md:py-3 bg-blue-600 text-white bg-opacity-90 md:bg-opacity-0">
                  {curso.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CombinedDiplomados;
