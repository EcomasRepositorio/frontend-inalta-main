import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const DiplomadosNav = dynamic(
  () => import("@/components/diplomadosComponents/diplomadosNav")
);
const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"));

export default function Main() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mb-12">
      
      <div className="mb-8">
        <h2 className="mb-4 mt-8 text-center text-2xl font-bold text-primaryblue dark:text-white md:mb-6 lg:text-4xl">
          Nuestros Diplomados
        </h2>
        <p className="mx-auto text-center dark:text-white md:text-xl">
          Explora Nuestra Trayectoria Educativa: Descubre Nuestros Programas de
          Formación
        </p>
      </div>
      <div>
        <Suspense fallback={<DashboardSkeleton />}>
          <DiplomadosNav />
        </Suspense>
      </div>
      <div>
        <div className="overflow-hidden py-8 sm:py-8 md:pl-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-12">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-primaryblue dark:text-white sm:text-4xl">
                    BENEFICIOS
                  </p>
                  <ul className="mt-4 text-gray-700 dark:text-white">
                    <li className="">
                      <span className="font-semibold">Especialización:</span>{" "}
                      Los diplomados brindan conocimientos detallados en un área
                      específica para convertirse en experto en ese campo.
                    </li>
                    <li className="">
                      <span className="font-semibold">Actualización:</span>{" "}
                      Proporcionan información actualizada sobre las últimas
                      tendencias y tecnologías en un área, manteniéndote
                      relevante en el mercado laboral.
                    </li>
                    <li className="">
                      <span className="font-semibold">
                        Crecimiento profesional:
                      </span>{" "}
                      Al adquirir nuevas habilidades, puedes mejorar tu
                      desempeño laboral y acceder a nuevas oportunidades
                      profesionales.
                    </li>
                    <li className="">
                      <span className="font-semibold">Flexibilidad:</span> Los
                      horarios flexibles de los diplomados te permiten estudiar
                      mientras trabajas u otros compromisos.
                    </li>
                    <li className="">
                      <span className="font-semibold">Certificación:</span> Al
                      completar un diplomado, recibes un certificado que valida
                      tus habilidades y conocimientos en el área, mejorando tu
                      credibilidad y empleabilidad.
                    </li>
                    <li className="">
                      <span className="font-semibold">Red de contactos:</span>{" "}
                      Ofrecen la oportunidad de conectar con profesionales en el
                      campo, lo que puede resultar en colaboraciones futuras u
                      oportunidades laborales.
                    </li>
                    <li className="">
                      <span className="font-semibold">Valor agregado:</span> Un
                      diplomado enriquece tu currículum vitae al agregar una
                      certificación reconocida y habilidades específicas,
                      destacándote en el mercado laboral.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/image/beneficios.jpg"
                  alt="Imagen banner"
                  width={500}
                  height={500}
                  className="object-fill rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-max md:-ml-4 lg:-ml-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*<div class="realtive pt-20 lg:pt-40 pb-20 lg:pb-40">
  <div class="absolute top-0 w-full object-cover">
    <video class="w-full h-full object-cover" autoPlay 1oop>
    <source src="/video_ambiental.webm" type="video/webm">
    <video/>
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
  </div>
  <div class="realative mx-auto max-w-screen-x1 p-2 text-white">
    <h1 class="font-extrabold text-4xl lg:text-6xl mt-10">Nuestros diplomados</h1>
    <p class="font-semibold text-lg mt-2">¡Te ofrecemos un servicio de calidad para segurar el exito de tu profesión!</p>
    <button class="border px-4 py-1 mt-4 rounded-xl font-semibold">Contacto</button>
  </div>
</div>
$ git commit -m "/diplomadosAccordion-diplomadosNav-Footer-ContactForm-Index-package"*/
