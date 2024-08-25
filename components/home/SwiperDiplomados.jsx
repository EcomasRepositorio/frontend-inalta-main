import React from "react";
import ScrollAnimation from "./scrollAnimation";
import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

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
    {
      imageUrl: "/image/tecobras.jpg",
      title: "Asistente Técnico en Obras",
    },
    {// esto es para aumentar la captidad de tarjetas 
      imageUrl: "/image/nueva_imagen.jpg", // para la imagen en la tarjetas
      title: "Nuevo Diplomado", // titulo de la tarjeta 
    },
  ];

  return (
    <ScrollAnimation>
      <div className="bg-[url('/image/bg_piura.jpg')] fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed to-transparent rounded-lg">
        <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cursosDestacados.map((curso, index) => (
              <div
                key={index}
                className="w-full shadow-lg pt-2 hover:opacity-90 rounded-lg bg-white dark:bg-blackblue2"
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
                <Link href="/diplomados" passHref legacyBehavior>
                  <div className="mx-2 flex items-center justify-between dark:bg-blackblue dark:text-white dark:border-0 bg-blue-100 border-blue-200 border text-primaryblue rounded-md text-xs font-medium px-4 py-1">
                    <span>Más información</span>
                    <span>
                      <GrFormNextLink className="w-6 h-6" />
                    </span>
                  </div>
                </Link>
                <div className="flex items-center justify-center px-4 pt-1 mb-12 pb-2 min-h-[4rem]">
                  <a
                    href="/"
                    className="font-normal text-center inline-block hover:text-primaryblue transition duration-500 ease-in-out"
                  >
                    {curso.title}
                  </a>
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
