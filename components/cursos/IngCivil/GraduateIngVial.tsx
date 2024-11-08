"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from '@/style/index';

// Ingenieria vial - ingVial
const modulesingVial = [
  { name: "Conceptos básicos y marco normativo. (Introducción)", image: "/image/cursos_gpt/1.webp" },
  { name: "Monitoreo de la calidad del agua.", image: "/image/cursos_gpt/2.webp" },
  { name: "Hidrología e hidráulica", image: "/image/cursos_gpt/3.webp" },
  { name: "Monitoreo de la calidad de aire.", image: "/image/cursos_gpt/4.webp" },
  { name: "Monitoreo de ruido ambiental.", image: "/image/cursos_gpt/5.webp" },
  { name: "Monitoreo de la calidad de suelo.", image: "/image/cursos_gpt/6.webp" },
  { name: "Monitoreo de radiaciones no ionizantes.", image: "/image/cursos_gpt//1.webp" },
  { name: "Monitoreo biológicos.", image: "/image/cursos_gpt//2.webp" },
  { name: "Monitoreo de agentes ocupacionales.", image: "/image/cursos_gpt//3.webp" },
  { name: "Calibración de equipos de monitoreo ambiental.", image: "/image/cursos_gpt/4.webp" },
  { name: "Interpretación de informes de laboratorios.", image: "/image/cursos_gpt/5.webp" },
];

const GraduateingVialCarousel = () => {
  // Function to handle card click and open WhatsApp with a custom message
  const handleCardClick = (moduleName: string) => {
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      `Hola, estoy interesado en el curso "${moduleName}" y me gustaría recibir más información.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white px-6">
      {/* Carrusel solo visible en móviles */}
      <div className="block md:hidden">
        <div className={`${styles.paddings} relative z-10 max-w-[1400px] mx-auto`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides
            autoplay={{ delay: 3000 }}
            grabCursor
            pagination={{ clickable: true }}
          >
            {modulesingVial.map((module, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="relative w-full h-full sm:w-[300px] sm:h-[300px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => handleCardClick(module.name)}
                >
                  <h3 className="sr-only">{module.name}</h3>
                  <Image
                    src={module.image}
                    alt={module.name}
                    width={900}
                    height={900}
                    objectFit="cover"
                    className="rounded-xl"
                    priority={true}
                    unoptimized={true}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Grid de imágenes visible en pantallas medianas y grandes */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {modulesingVial.map((module, idx) => (
          <div
            key={idx}
            className="relative w-full h-[300px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
            onClick={() => handleCardClick(module.name)}
          >
            <h3 className="sr-only">{module.name}</h3>
            <Image
              src={module.image}
              alt={module.name}
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-xl"
              priority={true}
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GraduateingVialCarousel;
