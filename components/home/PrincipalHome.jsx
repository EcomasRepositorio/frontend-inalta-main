"use client";
import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

// Variables de datos (sin anotaciones de tipos)
const images = ["/image/image1pres.webp", "/image/image2.webp"];
const texts = [
  "Con nuestros programas especializados, adquiere las habilidades que te llevarán más lejos",
  "Con nuestros programas de especialización, desarrolla las competencias que el mundo necesita",
];

const tittles = [
  {
    tittle1: "Aprende y crece, estés donde estés",
    color1: "bg-gradient-to-b from-blue-500 to-green-500",
  },
  {
    tittle2: "Formando líderes que transforman el mañana",
    color3: "text-from-dark",
  },
];

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61565984064270", icon: FaFacebookF },
  { href: "https://www.instagram.com/corporacion.inalta", icon: FaInstagram },
  { href: "https://www.tiktok.com/@promas.corp", icon: FaTiktok },
  { href: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados", icon: FaWhatsapp },
  { href: "https://www.youtube.com/@Corporacion.Promas", icon: FaYoutube },
];

const buttons = [
  { text: "Contacto", link: "#contacto" },
  { text: "Informes", link: "#contacto" },
];

// Componente memoizado para los íconos de redes sociales
const SocialLinks = memo(() => (
  <div className="text-gray-100 lg:text-2xl text-xl inline-flex lg:gap-6 gap-4">
    {socialLinks.map(({ href, icon: Icon }, idx) => (
      <Link
        key={idx}
        href={href}
        target="_blank"
        className="p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl"
      >
        <Icon />
      </Link>
    ))}
  </div>
));

// Componente principal usando `.jsx` sin anotaciones de tipo
function PrincipalHome() {
  const [index, setIndex] = useState(0); // Eliminé la anotación de tipo

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="z-0 block md:flex bg-gradient-to-b from-blue-400 to-white">
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col md:flex-row max-w-screen-xl mx-auto items-center justify-between w-full px-4 md:px-12"
        style={{ minHeight: "600px" }}
      >
        {/* Sección de Imagen */}
        <div className="lg:text-3xl text-black mb-10 w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-[300px] md:h-[600px] flex items-center justify-center">
            <Image
              src={images[index]}
              alt="slider-image"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
              priority={index === 0} // Priorizar solo la primera imagen del slider
              className="object-contain md:object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Sección de texto e iconos */}
        <div className="mb-10 lg:mb-0 p-4 md:mt-0 w-full md:w-1/2">
          <div className="py-1 lg:text-left text-center px-1 flex justify-center md:justify-start">
            <SocialLinks />
          </div>

          {/* Títulos con ajuste de tamaño */}
          <div className="lg:leading-tight leading-tight min-h-[120px] md:min-h-[160px] flex items-center justify-center">
            {tittles[index] && (
              <h1
                className={`mt-6 lg:text-[40px] text-[24px] font-extrabold bg-clip-text min-w-[320px] ${tittles[index][`color${Object.keys(tittles[index])[0].slice(-1)}`]}`}
              >
                {Object.values(tittles[index])[0]}
              </h1>
            )}
          </div>

          {/* Texto adicional */}
          <p className="lg:text-2xl text-md text-black mb-8">{texts[index]}</p>

          {/* Botón de acción */}
          <div className="w-full flex justify-center md:justify-start mt-6">
            <a
              href={buttons[index].link}
              className="inline-block text-center py-2 px-8 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              {buttons[index].text}
            </a>
          </div>

          {/* Botones de navegación */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 md:absolute md:mt-6 md:ml-52 bottom-4">
            <button
              onClick={prevSlide}
              className="py-2 px-4 text-blue-400 rounded-lg border border-blue-400"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="py-2 px-4 text-blue-400 rounded-lg border border-blue-400"
            >
              {">"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(PrincipalHome);
