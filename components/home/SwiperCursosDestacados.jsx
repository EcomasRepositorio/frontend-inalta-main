import React from "react";
import Image from "next/image";
import ScrollAnimation from "./scrollAnimation";

const cursosDestacados = [
  {
    id: 1,
    imageUrl: "/image/solidos.jpg",
    title: "Gestion y manejo de residuos sólidos municipales",
    description:
      "Este curso aborda estrategias y técnicas para gestionar eficazmente los residuos sólidos en entornos urbanos, incluyendo temas como reciclaje, tratamiento de residuos y participación comunitaria.",
  },
  {
    id: 2,
    imageUrl: "/image/aspersor.jpg",
    title: "Sistemas de riego por aspersión",
    description:
      "Curso sobre el diseño y uso eficiente de sistemas de riego por aspersión.",
  },
  {
    id: 3,
    imageUrl: "/image/goteo.jpg",
    title: "Sistemas de riego por goteo",
    description:
      "Curso que explora el diseño y aplicación de sistemas eficientes de riego por goteo en agricultura y jardinería.",
  },
  {
    id: 4,
    imageUrl: "/image/viales.jpg",
    title: "Arqueología en proyectos viales",
    description:
      "Curso sobre la integración de la arqueología en el diseño y desarrollo de proyectos viales.",
  },
  {
    id: 5,
    imageUrl: "/image/obras.jpg",
    title: "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
    description:
      "Curso que aborda la gestión de ampliaciones de plazo, cambios en obra y las penalizaciones asociadas en proyectos de construcción.",
  },
  {
    id: 6,
    imageUrl: "/image/aguaca.jpg",
    title: "Monitoreo de la calidad de agua",
    description:
      "Curso sobre técnicas y métodos para monitorear la calidad del agua en diferentes contextos ambientales y aplicaciones.",
  },
  {
    id: 7,
    imageUrl: "/image/ssoma.jpg",
    title: "Supervisor SSOMA",
    description:
      "Curso que prepara a los supervisores en seguridad, salud ocupacional y medio ambiente (SSOMA) para la gestión efectiva en entornos laborales.",
  },
];

const CursosDestacados = () => {
  return (
    <ScrollAnimation>
      <div className="rounded-lg p-8 md:p-5 flex flex-col items-center">
        <h2 className="text-primaryblue dark:text-f5f5f5 text-4xl font-extrabold mb-1">
          Nuestros Cursos Destacados
        </h2>
      </div>
      <div className="py-5 flex flex-wrap justify-center gap-4">
        {cursosDestacados.map((curso) => (
          <div
            key={curso.id}
            className="dark:bg-blackblue2 dark:ring-0 py-4 rounded-2xl relative p-2 bg-gray-50/60 backdrop-blur-md transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg w-96 max-w-md flex flex-col justify-between"
          >
            <div className="object-cover">
              <div className="p-2 rounded-lg">
                <Image
                  src={curso.imageUrl}
                  alt="Imagen curso"
                  width={400}
                  height={300}
                  className="object-cover h-48 rounded-lg w-full"
                />
              </div>
              <div className="px-8 md:px-4 pt-1 mb-4 pb-2">
                <a className="text-justify font-semibold text-md text-blackblue dark:text-f5f5f5">
                  {curso.title}
                </a>
                <p className="text-justify font-light text-sm">
                  {curso.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollAnimation>
  );
};

export default CursosDestacados;
