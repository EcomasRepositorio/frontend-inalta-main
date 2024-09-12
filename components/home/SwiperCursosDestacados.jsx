import React from "react";
import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  const cursosDestacados = [
    {
      imageUrl: "/image/ing1.png",
      title: "Topografía, Diseño Geométrico, Señalización y Seguridad Vial",
      description:
        "Curso integral de topografía, diseño geométrico, señalización y seguridad vial que abarca los fundamentos esenciales para la planificación, diseño y mantenimiento eficiente y seguro de infraestructuras viales.",
    },
    {
      imageUrl: "/image/ing2.png",
      title: "Sistemas de Riego Tecnificado por Goteo",
      description:
        "Curso sobre implementación y gestión de sistemas agrícolas de riego con enfoque en la técnica de goteo.",
    },
    {
      imageUrl: "/image/ing3.png",
      title: "Valorización de Residuos Sólidos",
      description:
        "Explora estrategias sostenibles para gestionar residuos sólidos, promoviendo reciclaje, reutilización y conversión en recursos.",
    },
    {
      imageUrl: "/image/ing4.png",
      title: "Calidad e Inocuidad Alimentaria",
      description:
        "Explora los principios y prácticas esenciales para garantizar la seguridad y calidad de los alimentos desde su producción hasta el consumo.",
    },
    {
      imageUrl: "/image/ing1.png",
      title: "Elaboración de Matriz IPERC - Mapa de Riesgos",
      description:
        "Curso de Elaboración de Matriz IPERC y Mapa de Riesgos: Enfocado en capacitar en la identificación, evaluación y gestión de riesgos laborales.",
    },
    {
      imageUrl: "/image/ing2.png",
      title: "Monitoreo de Agentes Ocupacionales",
      description:
        "Brinda conocimientos especializados en técnicas y estrategias para llevar a cabo el monitoreo efectivo de agentes ocupacionales.",
    },
  ];

  return (
    <section className="bg-transparent py-6">
      <div className="container mx-auto px-4">
        {/* Título con el nuevo estilo */}
        <h2 className="text-center text-black text-3xl sm:text-4xl font-extrabold uppercase mb-8">
          NUESTROS CURSOS
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cursosDestacados.map((curso, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div className="relative">
                <Image
                  src={curso.imageUrl}
                  alt={curso.title}
                  width={180}   
                  height={120}   
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {curso.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {curso.description}
                </p>
              </div>
              {/* Ajuste del contenedor del botón */}
              <div className="p-4 flex justify-center">
                <Link href="/diplomados" passHref>
                  <div className="inline-block py-1 px-1 text-sm font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
                    Más Información
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
