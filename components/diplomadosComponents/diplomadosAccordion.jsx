import React from "react";
import Image from "next/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"));

const Curso = ({ curso }) => {
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

  // Función para generar el enlace a WhatsApp con un mensaje dinámico basado en el curso
  const generarEnlaceWhatsapp = (cursoTitulo) => {
    const mensaje = `Hola, buenos días. Estoy interesado en obtener información sobre el curso de "${cursoTitulo}".`;
    const url = `https://wa.me/51921818181?text=${encodeURIComponent(mensaje)}`;
    return url;
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-8">
      <div className="w-full md:w-1/3 relative">
        <Suspense fallback={<DashboardSkeleton />}>
          <Image
            src={curso.imagen}
            alt="Curso"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </Suspense>
      </div>
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

          <Accordion defaultExpandedKeys={["1"]} bordered shadow>
            <AccordionItem
              key="3"
              title={
                <h3 className="text-lg font-medium text-gray-900">
                  Módulos del diplomado
                </h3>
              }
            >
              <ul className="list-disc pl-5 text-gray-700">
                {curso.modulos.map((modulo, moduloIndex) => (
                  <li key={moduloIndex}>
                    <span className="font-bold">
                      MÓDULO {toRoman(moduloIndex + 1)}:{" "}
                    </span>
                    {modulo}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col space-y-2 mt-6">
          {/* Enlace dinámico a WhatsApp */}
          <a
            href={generarEnlaceWhatsapp(curso.titulo)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center bg-[#25D366] text-white hover:bg-[#25D344] rounded-lg py-2 px-4 w-full">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M436.535 74.406C388.635 26.449 324.933.028 257.063 0 117.222 0 3.407 113.807 3.352 253.692c-.019 44.716 11.664 88.362 33.866 126.838L1.225 512l134.496-35.281c37.057 20.213 78.78 30.866 121.242 30.881h.105c139.827 0 253.652-113.818 253.708-253.706.026-67.791-26.34-131.534-74.241-179.488zM257.066 464.752h-.086c-37.839-.014-74.952-10.181-107.328-29.394l-7.7-4.57-79.812 20.937 21.303-77.816-5.014-7.979c-21.109-33.574-32.258-72.378-32.241-112.223C46.234 137.441 140.833 42.85 257.15 42.85c56.324.019 109.27 21.983 149.084 61.842 39.813 39.858 61.726 92.84 61.705 149.185-.048 116.276-94.645 210.875-210.873 210.875zm115.668-157.933c-6.339-3.173-37.506-18.507-43.318-20.625-5.81-2.115-10.037-3.172-14.263 3.172-4.225 6.346-16.374 20.626-20.073 24.857-3.697 4.229-7.395 4.761-13.734 1.586-6.34-3.173-26.766-9.866-50.979-31.465-18.846-16.81-31.568-37.569-35.266-43.916-3.698-6.346-.394-9.776 2.779-12.937 2.852-2.841 6.34-7.405 9.509-11.106 3.17-3.701 4.226-6.347 6.339-10.575 2.113-4.232 1.057-7.934-.528-11.106-1.585-3.173-14.263-34.377-19.545-47.071-5.146-12.359-10.372-10.686-14.263-10.882-3.693-.184-7.924-.223-12.15-.223s-11.094 1.586-16.905 7.932c-5.811 6.347-22.187 21.684-22.187 52.885 0 31.204 22.715 61.348 25.885 65.579 3.169 4.232 44.701 68.262 108.294 95.722 15.124 6.532 26.933 10.432 36.139 13.353 15.186 4.826 29.006 4.145 39.929 2.512 12.18-1.819 37.506-15.334 42.789-30.142 5.281-14.811 5.281-27.503 3.697-30.146-1.583-2.643-5.81-4.23-12.149-7.404z" />
              </svg>
              Más información
            </button>
          </a>

          <a href="/plan-de-estudios.pdf" target="_blank">
            <button className="flex items-center justify-center bg-primaryblue text-white hover:bg-[#0060dd] rounded-lg py-2 px-4 w-full">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 17h-2v-6h2v6zm1-8.128V7h-2v3.872h2z" />
              </svg>
              Plan de estudios
            </button>
          </a>

          <Link href="/certificados">
            <button className="flex items-center justify-center bg-[#FFD700] text-white hover:bg-[#FFC107] rounded-lg py-2 px-4 w-full">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M256 32C119.031 32 8 143.031 8 280s111.031 248 248 248 248-111.031 248-248S392.969 32 256 32zM256 496c-119.312 0-216-96.688-216-216S136.688 64 256 64s216 96.688 216 216-96.688 216-216 216zm-84.189-256.965c-10.051 0-19.476 8.425-19.476 18.475v84.96c0 10.051 8.425 18.475 18.475 18.475h5.913c10.051 0 18.475-8.425 18.475-18.475v-84.96c0-10.051-8.425-18.475-18.475-18.475h-5.913zM355.24 184.12c-11.043 0-20.019 8.995-20.019 20.019v20.966c0 11.043 8.995 20.019 20.019 20.019 11.043 0 20.019-8.995 20.019-20.019v-20.966c0-11.043-8.995-20.019-20.019-20.019zm-122.8 0c-11.043 0-20.019 8.995-20.019 20.019v20.966c0 11.043 8.995 20.019 20.019 20.019 11.043 0 20.019-8.995 20.019-20.019v-20.966c0-11.043-8.995-20.019-20.019-20.019z" />
              </svg>
              Nuestra certificación
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Curso;
