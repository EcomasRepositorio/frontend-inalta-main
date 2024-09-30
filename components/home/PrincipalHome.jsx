"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

// Variables de datos
const images = ["/image/image1.webp", "/image/image2.webp"];
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
    tittle2: "Formando líderes para construir el futuro que soñamos",
    color3: "text-from-dark",
  },
];

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61565984064270", icon: <FaFacebookF /> },
  { href: "https://www.instagram.com/corporacion.inalta", icon: <FaInstagram /> },
  { href: "https://www.tiktok.com/@promas.corp", icon: <FaTiktok /> },
  {
    href: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados",
    icon: <FaWhatsapp />,
  },
  { href: "https://www.youtube.com/@Corporacion.Promas", icon: <FaYoutube /> },
];

const buttons = [
  { text: "Contacto", link: "#contacto" },
  { text: "Informes", link: "#contacto" },
];

const PrincipalHome = () => {
  const [index, setIndex] = useState(0);

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
        className="relative z-10 flex flex-col md:flex-row max-w-screen-xl mx-auto items-center justify-between w-full"
        style={{ minHeight: "800px" }}
      >
        {/* Sección de Imagen */}
        <motion.div className="lg:text-3xl text-black mb-10">
          <Image src={images[index]} alt="slider-image" height={800} width={800} priority />
        </motion.div>

        {/* Sección de texto e iconos */}
        <div className="mb-10 lg:mb-0 p-2 md:mt-20">
          <motion.div className="py-1 lg:text-left text-center px-1 flex justify-center">
            <div className="text-gray-100 lg:text-2xl text-2xl inline-flex lg:gap-6 gap-3">
              {socialLinks.map(({ href, icon }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  className="p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Títulos */}
          {tittles[index] && (
            <>
              {Object.entries(tittles[index])
                .filter(([key]) => key.startsWith("tittle"))
                .map(([key, title], idx) => (
                  <motion.div key={idx} className="lg:leading-tight leading-tight">
                    <h1
                      className={`mt-6 lg:text-[50px] text-[36px] font-extrabold bg-clip-text ${tittles[index][`color${key.slice(-1)}`]}`}
                    >
                      {title}
                    </h1>
                  </motion.div>
                ))}
            </>
          )}

          {/* Texto adicional */}
          <motion.p className="lg:text-3xl text-black mb-10">
            {texts[index]}
          </motion.p>

          {/* Botones de navegación */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button onClick={prevSlide} className="py-2 px-4 mr-2 text-blue-400 rounded-lg border border-blue-400">
              {"<"}
            </button>
            <button onClick={nextSlide} className="py-2 px-4 text-blue-400 rounded-lg border border-blue-400">
              {">"}
            </button>
          </div>

          {/* Botón de acción */}
          <div className="w-full flex justify-center">
            <motion.a
              href={buttons[index].link}
              className="inline-block text-center py-2 px-8 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 mb-36"
            >
              {buttons[index].text}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrincipalHome;
