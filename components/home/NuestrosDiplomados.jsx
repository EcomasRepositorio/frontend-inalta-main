"use client";
import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';


// Lista de cursos con datos de ejemplo
const cursos = [
  { imageUrl: '/image/diplomados/ingeniería CIVIL.png', title: 'Ingeniería Civil', link: '/diplomados' },
  { imageUrl: '/image/diplomados/Ingeniería Ambiental.png', title: 'Ingeniería Ambiental', link: '/diplomados' },
  { imageUrl: '/image/diplomados/Ingeniería Agronoma.png', title: 'Ingeniería Agronómica', link: '/diplomados' },
  { imageUrl: '/image/diplomados/SSOMA.png', title: 'SSOMA', link: '/diplomados' },
  { imageUrl: '/image/diplomados/Ingeniería Vial.png', title: 'Ingeniería Vial', link: '/diplomados' },
  { imageUrl: '/image/diplomados/Gestión de la calidad e inocuidad alimentaria.png', title: 'Gestión de la calidad e inocuidad alimentaria', link: '/diplomados' },
];

// Componente de tarjeta para cada curso
const CourseCard = ({ imageUrl, title, link, isGrid }) => (
  <Link href={link} passHref>
    <div className={`relative group cursor-pointer rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 bg-white ${isGrid ? "h-64" : "h-64 mx-2"}`}>
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={`Curso de ${title}`}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL={imageUrl}
          className="rounded-t-lg"
          loading="lazy" // Lazy loading
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-70 text-white text-center py-2 md:opacity-0 md:group-hover:bg-opacity-80 md:group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      </div>
    </div>
  </Link>
);

const CombinedDiplomados = () => (
  <div className="bg-white mx-auto py-16 px-4 lg:px-8 relative">
    <h2 className="text-center text-3xl font-bold uppercase mb-10">Nuestros Diplomados</h2>

    {/* Carrusel para Móviles */}
    <div className="block md:hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        autoplay={{ delay: 3000 }}
        grabCursor
        pagination={{ clickable: true }}
      >
        {cursos.map((curso, index) => (
          <SwiperSlide key={index}>
            <CourseCard imageUrl={curso.imageUrl} title={curso.title} link={curso.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Grilla para Escritorio */}
    <div className="hidden md:grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto">
      {cursos.map((curso, index) => (
        <CourseCard
          key={index}
          imageUrl={curso.imageUrl}
          title={curso.title}
          link={curso.link}
          isGrid={true}
        />
      ))}
    </div>
  </div>
);

export default memo(CombinedDiplomados);
