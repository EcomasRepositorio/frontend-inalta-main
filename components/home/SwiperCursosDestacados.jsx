"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react"; // Importación de Swiper y SwiperSlide
import "swiper/swiper-bundle.css"; // Estilos de Swiper
import "swiper/css"; // Estilo adicional de Swiper

// Datos de cursos destacados
const cursosDestacados = [
  {
    imageUrl: "/image/CURSOS/Topografía, Diseño Geométrico, Señalización y Seguridad Vial.png",
    title: "Topografía, Diseño Geométrico, Señalización y Seguridad Vial",
    description:
      "Curso integral de topografía, diseño geométrico, señalización y seguridad vial que abarca los fundamentos esenciales para la planificación, diseño y mantenimiento eficiente y seguro de infraestructuras viales.",
  },
  {
    imageUrl: "/image/CURSOS/Sistemas de Riego Tecnificado por Goteo.png",
    title: "Sistemas de Riego Tecnificado por Goteo",
    description:
      "Curso sobre implementación y gestión de sistemas agrícolas de riego con enfoque en la técnica de goteo.",
  },
  {
    imageUrl: "/image/CURSOS/Valorización de Residuos Sólidos.png",
    title: "Valorización de Residuos Sólidos",
    description:
      "Explora estrategias sostenibles para gestionar residuos sólidos, promoviendo reciclaje, reutilización y conversión en recursos.",
  },
  {
    imageUrl: "/image/CURSOS/Calidad e Inocuidad Alimentaria.png",
    title: "Calidad e Inocuidad Alimentaria",
    description:
      "Explora los principios y prácticas esenciales para garantizar la seguridad y calidad de los alimentos desde su producción hasta el consumo.",
  },
  {
    imageUrl: "/image/CURSOS/Elaboración de Matriz IPERC - Mapa de Riesgos.png",
    title: "Elaboración de Matriz IPERC - Mapa de Riesgos",
    description:
      "Curso de Elaboración de Matriz IPERC y Mapa de Riesgos: Enfocado en capacitar en la identificación, evaluación y gestión de riesgos laborales.",
  },
  {
    imageUrl: "/image/CURSOS/Monitoreo de Agentes Ocupacionales.png",
    title: "Monitoreo de Agentes Ocupacionales",
    description:
      "Brinda conocimientos especializados en técnicas y estrategias para llevar a cabo el monitoreo efectivo de agentes ocupacionales.",
  },
];

// Componente para la tarjeta de curso con margen lateral para espacio en el carrusel
const CourseCard = ({ imageUrl, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between min-h-[600px] mx-2">
    <div className="relative w-full h-96 flex items-center justify-center">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="rounded-t-lg object-cover ml-auto"
        placeholder="blur"
        blurDataURL={imageUrl}
      />
    </div>
    <div className="p-4 flex-grow overflow-hidden">
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-xs">{description}</p>
    </div>
    <Link href="/diplomados" passHref>
      <div className="flex justify-center mt-auto mb-2 py-2 px-4 text-xs font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
        Más Información
      </div>
    </Link>
  </div>
);

const Courses = () => (
  <section className="bg-transparent py-6">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-black text-3xl sm:text-4xl font-extrabold uppercase mb-8">
        NUESTROS CURSOS
      </h2>

      {/* Carrusel para Móviles con Swiper */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          touchStartPreventDefault={false}
          className="space-x-4"
        >
          {cursosDestacados.map((curso, index) => (
            <SwiperSlide key={index}>
              <CourseCard
                imageUrl={curso.imageUrl}
                title={curso.title}
                description={curso.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grilla para Escritorio */}
      <div className="hidden md:grid max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cursosDestacados.map((curso, index) => (
          <CourseCard
            key={index}
            imageUrl={curso.imageUrl}
            title={curso.title}
            description={curso.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
