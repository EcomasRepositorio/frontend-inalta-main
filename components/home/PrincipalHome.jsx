"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/utils/motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const images = [
  { src: "/image/image1.png" },
  { src: "/image/image2.png" },
];

const texts = [
  "Con nuestros programas especializados, adquiere las habilidades que te llevarán más lejos",
  "Con nuestros programas de especialización, desarrolla las competencias que el mundo necesita",
];

const tittles = [
  { tittle1: "Aprende y crece, estés donde estés", color1: "bg-gradient-to-b from-blue-500 to-green-500" },
  { tittle2: "Formando líderes ", color2: "text-from-black", tittle3: "para construir el futuro que soñamos.", color3: "text-from-dark"},
];

const icons = [
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},
];

const buttons = [
  {text: "Contacto", link: "#contacto"},
  {text:"Informes", link: "#contacto"},
];

const PrincipalHome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === tittles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? tittles.length - 1 : prevIndex - 1
    );
  };

  return (
<div className="z-0 block md:flex bg-gradient-to-b from-blue-400">

    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col md:flex-row max-w-screen-xl mx-auto items-center justify-between w-full">
  
      {/* Sección de imagen */}
      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(1)}
        className="lg:text-3xl text-black mb-10"  
      >
        <Image
          key={index}
          src={images[index].src}
          alt="icons"
          height={800}
          width={800}
          priority={true}
        />
      </motion.div>
        {/* Sección de iconos y texto */}
        <div className="mb-10 lg:mb-0 p-2 md:mt-20">
          {/* Sección de iconos de redes sociales (arriba del texto) */}
          {icons.map((icon, i) => (
            i === index && (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideInFromTop}
              className="py-1 lg:text-left text-center px-1 "
            >
              <h1 className="text-gray-100 lg:text-2xl text-2xl text-center inline-flex lg:gap-6 gap-3">
                <Link key={`link-${i}`} href='https://www.facebook.com/people/Corporaci%C3%B3n-Prom%C3%A1s/61552473052389/' target="_blank"
                  className="border border-gradient-to-r  to-blue-500 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                  {icon.img1}
                </Link>
                <Link key={`link-${i+1}`} href='https://www.instagram.com/corporacion.promas/' target="_blank"
                  className="border border-gradient-to-r  to-blue-500 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                  {icon.img2}
                </Link>
                <Link key={`link-${i+2}`} href='https://www.tiktok.com/@promas.corp' target="_blank"
                  className="border border-gradient-to-r  to-blue-500 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                  {icon.img3}
                </Link>
                <Link key={`link-${i+3}`} href='https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados' target="_blank"
                  className="border border-gradient-to-r  to-blue-500 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                  {icon.img4}
                </Link>
                <Link key={`link-${i+4}`} href='https://www.youtube.com/@Corporacion.Promas' target="_blank" className="border border-gradient-to-r  to-blue-500 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                  {icon.img5}
                </Link>
              </h1>
            </motion.div>
            )
          ))}

          {/* Títulos y textos */}
          {tittles.map((tittle, i) => (
            i === index && (
            <React.Fragment key={`tittles-${i}`}>
              <motion.div
                key={`${i}-1`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(1)}
                className="lg:leading-[3.8em] leading-[2.3em]">
                <h1>
                  <p className={`mt-6 lg:text-[63px] text-[36px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${tittle.color1}`}>
                    {tittle.tittle1}
                  </p>
                </h1>
              </motion.div>
              <motion.div
                key={`${i}-2`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(1)}
                className="lg:leading-[3.8em] leading-[2.3em]">
                <h1>
                  <p className={`mt-6 lg:text-[60px] text-[32px] font-extrabold bg-clip-text text-customPurple ${tittle.color2}`}>
                    {tittle.tittle2}
                  </p>
                </h1>
              </motion.div>
              <motion.div
                key={`${i}-3`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(1)}
                className="lg:leading-[3.8em] leading-[2.3em]">
                <h1>
                  <p className={`lg:text-[55px] text-[35px] font-extrabold bg-clip-text ${tittle.color3}`}>
                    {tittle.tittle3}
                  </p>
                </h1>
              </motion.div>
            </React.Fragment>
          )
          ))}

          {/* Textos adicionales */}
          {texts.map((text, i) => (
            i === index && (
              <motion.p
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(1.5)}
                className="lg:text-3xl text-black mb-10">
                {text}
              </motion.p>
            )
          ))}

          {/* Botones */}
          {buttons.map((button, i) => ( i === index && (
          <motion.a
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideInFromLeft(2)}
            href={button.link}
            className="py-2 lg:text-2xl px-10 font-mono text-center button-primary text-black cursor-pointer rounded-lg">
            {button.text}
          </motion.a>
          )))}
        </div>
      </motion.div>

      {/* Botones de navegación */}
      <div className="flex justify-center">
        <button
          onClick={prevSlide}
          className="py-2 px-4 mr-2 font-mono text-center button-primary text-white cursor-pointer rounded-lg">
          <BiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="py-2 px-4 font-mono text-center button-primary text-white cursor-pointer rounded-lg">
          <BiChevronRight className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default PrincipalHome;
