"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./stylesHome.css";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const PrincipalHome = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://static.vecteezy.com/system/resources/thumbnails/009/831/146/small/banner-web-template-abstract-blue-and-golden-wave-curved-lines-overlapping-layer-design-on-dark-blue-background-luxury-style-vector.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">¡Bienvenidos a Inalta!</h1>
          <p className="mb-5">
            En Inalta, estamos dedicados a ayudarte a alcanzar el éxito en el mundo de la construcción y las soluciones industriales. 
            Te invitamos a unirte a nuestras clases especializadas, diseñadas para proporcionarte el conocimiento y las herramientas 
            necesarias para sobresalir en tu carrera. Ya sea que estés buscando mejorar tus habilidades en la impermeabilización, 
            reparación de concreto, o aprender sobre los sistemas más avanzados en infraestructura, nuestras clases están aquí para apoyarte en cada paso del camino. 
            ¡No pierdas la oportunidad de aprender con los mejores y llevar tus habilidades al siguiente nivel!
          </p>
          {/* Agregar el botón de cambio de tema aquí */}
          
        </div>
      </div>
    </div>
  );
};

export default PrincipalHome;
