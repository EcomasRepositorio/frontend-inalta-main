import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";

// Componente dinámico
const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"));

const Curso = ({ curso }) => {
  // Función para convertir números a números romanos
  function toRoman(num) {
    const romanNumerals = [
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];

    let result = "";

    for (const pair of romanNumerals) {
      while (num >= pair.value) {
        result += pair.numeral;
        num -= pair.value;
      }
    }

    return result;
  }

  // Función para generar el enlace a WhatsApp
  const generarEnlaceWhatsapp = (cursoTitulo, modulo) => {
    const mensaje = `Hola, busco información sobre el módulo "${modulo}" del curso "${cursoTitulo}".`;
    const url = `https://wa.me/51921818181?text=${encodeURIComponent(mensaje)}`;
    return url;
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-8">
      {/* Imagen del curso */}
      <div className="w-full md:w-1/3 relative">
        <Image
          src={curso.imagen}
          alt="Curso"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Contenido del curso */}
      <div className="w-full md:w-2/3 p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
            {curso.area}
          </h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {curso.titulo}
          </h1>
          <p className="text-gray-700 mb-4">{curso.descripcion}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-bold">Fecha de inicio:</p>
              <p>{curso.fechaInicio}</p>
            </div>
            <div>
              <p className="font-bold">Modalidad:</p>
              <p>{curso.modalidad}</p>
            </div>
            <div>
              <p className="font-bold">Duración:</p>
              <p>{curso.duracion}</p>
            </div>
            <div>
              <p className="font-bold">Horas del curso:</p>
              <p>{curso.horas}</p>
            </div>
          </div>

          {/* Acordeón de módulos con estilo personalizado */}
          <Accordion defaultExpandedKeys={["1"]} bordered shadow>
            <AccordionItem
              key="3"
              title={
                <h3 className="text-lg font-medium text-gray-900">
                  Módulos del diplomado
                </h3>
              }
            >
              <ul className="space-y-4">
                {curso.modulos.map((modulo, moduloIndex) => (
                  <li
                    key={moduloIndex}
                    className="flex items-center justify-between border-2 border-blue-400 rounded-lg py-2 px-4 text-gray-800 hover:bg-purple-100 hover:text-purple-800 transition-all duration-300"
                  >
                    <a
                      href={generarEnlaceWhatsapp(curso.titulo, modulo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 w-full"
                    >
                      <FaWhatsapp className="text-green-500 w-5 h-5" />
                      <span className="text-lg font-semibold">
                        MÓDULO {toRoman(moduloIndex + 1)}:
                      </span>
                      <span className="text-md">{modulo}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Botones de acción en vista móvil */}
        <div className="flex flex-col md:flex-col lg:flex-row justify-around items-center gap-4 mt-6">
          {/* Botón de Más Información */}
          <a
            href={generarEnlaceWhatsapp(curso.titulo, "Información general")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 rounded-full py-2 px-6 w-full lg:w-auto"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            MÁS INFORMACIÓN
          </a>

          {/* Botón de Plan de Estudios */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="flex items-center justify-center border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 rounded-full py-2 px-6 w-full lg:w-auto"
          >
            <MdOutlinePictureAsPdf className="w-5 h-5 mr-2" />
            PLAN DE ESTUDIOS
          </a>

          {/* Botón de Certificación */}
          <Link href="/certs" className="w-full lg:w-auto">
            <div className="flex items-center justify-center border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 rounded-full py-2 px-6 w-full lg:w-auto">
              <IoMdSchool className="w-5 h-5 mr-2" />
              CERTIFICACIÓN
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Curso;
