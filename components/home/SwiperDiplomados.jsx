import React from "react";
import ScrollAnimation from "./scrollAnimation";
import Image from "next/image";
import Link from "next/link";

const NuestrosDiplomados = () => {
  const cursosDestacados = [
    {
      imageUrl: "/image/diplo_tecnifi.jpg",
      title: "Sistemas de Riego Tecnificado",
      description:
        "Adquiere conocimientos para mejorar la eficiencia de los sistemas de riego con tecnologías avanzadas. ",
    },
    {
      imageUrl: "/image/diplo_municipal.jpg",
      title: "Gestión Ambiental Municipal y Regional",
      description:
        "Aprende a gestionar proyectos ambientales a nivel municipal y regional.",
    },
    {
      imageUrl: "/image/diplo_ssoma.jpg",
      title: "SSOMA",
      description:
        "Gestión de seguridad y salud ocupacional, asegurando un entorno laboral seguro y saludable.",
    },
    {
      imageUrl: "/image/diplo_alim.jpg",
      title: "Gestión de la calidad e inocuidad alimentaria",
      description:
        "Desarrolla habilidades para asegurar la calidad e inocuidad en los procesos alimentarios.",
    },
    {
      imageUrl: "/image/bim_model.jpg",
      title: "Modelamiento BIM",
      description:
        "Técnicas avanzadas en la gestión y modelamiento de la información de construcción con BIM.",
    },
    {
      imageUrl: "/image/vialdiplo.jpg",
      title: "Ingeniería Vial",
      description: "Estudia la planificación y gestión de proyectos de infraestructura vial.",
    },
  ];

  return (
    <ScrollAnimation>
      <div className="bg-transparent py-6 ">
        <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl " >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cursosDestacados.map((curso, index) => (
              <div
                key={index}
                className="w-full shadow-lg rounded-lg bg-primaryBlue text-white flex flex-col justify-between"
              >
                {/* Imagen en la parte superior */}
                <div className="rounded-t-lg overflow-hidden">
                  <Image
                    src={curso.imageUrl}
                    alt={curso.title}
                    width={900}
                    height={100}
                    className="object-cover w-full h-48"
                  />
                </div>

                {/* Contenido del curso */}
                <div className="px-6 py-4">
                  <span className="text-sm font-bold uppercase text-white">Diplomados</span>
                  <h3 className="font-bold text-2xl text-white mb-2">{curso.title}</h3>
                  <p className="text-sm text-white mb-4">{curso.description}</p>
                </div>

                {/* Botón en la parte inferior */}
                <div className="px-6 pb-6">
                  <Link href="/diplomados" passHref>
                    <div className="bg-transparent border border-white text-white font-semibold text-center py-2 rounded-lg hover:bg-white hover:text-purple-700 transition-colors duration-300 cursor-pointer">
                      Ver Diplomado
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
