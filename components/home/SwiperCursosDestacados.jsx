import React from "react";
import ScrollAnimation from "./scrollAnimation";
import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
import { motion, useAnimation } from "framer-motion";


const NuestrosDiplomados = () => {
  const cursosDestacados = [
    {
      imageUrl: "/image/diplo_tecnifi.jpg",
      title: "Sistemas de Riego Tecnificado",
    },
    {
      imageUrl: "/image/diplo_municipal.jpg",
      title: "Gestión Ambiental Municipal y Regional",
    },
    {
      imageUrl: "/image/diplo_ssoma.jpg",
      title: "SSOMA",
    },
    {
      imageUrl: "/image/diplo_alim.jpg",
      title: "Gestión de la calidad e inocuidad alimentaria",
    },
    {
      imageUrl: "/image/bim_model.jpg",
      title: "Modelamiento BIM",
    },
    {
      imageUrl: "/image/vialdiplo.jpg",
      title: "Ingeniería Vial",
    },
  ];

  return (
    <ScrollAnimation>
      <div className="bg-transparent dark:bg-transparent">
        <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl">
          <h2 className="text-primarywhite dark:text-f6f6f6 text-4xl font-extrabold mb-6 text-center">
            Cursos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cursosDestacados.map((curso, index) => (
              <div
                key={index}
                className="w-full max-w-sm shadow-lg pt-4 hover:opacity-100 rounded-lg bg-[#F5F5F5] dark:bg-[#7a7777]"
              >
                <div className="p-2 rounded-lg">
                <Image
                     src={curso.imageUrl}
                     alt="Imagen banner"
                     width={450}
                     height={300}
                     className="object-cover h-96 rounded-lg w-full"
                  />
                </div>
                <div className="px-4 py-4">
                  <a
                    href="/"
                    className="block font-semibold text-md text-whiteBlue dark:text-f5f5f5 mb-2 hover:text-primaryblue dark:hover:text-primaryblue transition-colors duration-300"
                  >
                    {curso.title}
                  </a>
                  <Link href="/diplomados" passHref>
                    <div className="flex items-center justify-between bg-transparent dark:bg-transparent text-blackblue dark:text-white border-t border-gray-200 
                    dark:border-gray-600 p-2 rounded-b-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                      <span>Más información</span>
                      <span>
                        <GrFormNextLink className="w-6 h-6" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default NuestrosDiplomados;
