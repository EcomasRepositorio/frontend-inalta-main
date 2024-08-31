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
      
              
    </div>
  );
}
/*
<div class="realtive pt-20 lg:pt-40 pb-20 lg:pb-40">
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
*/


/*
git commit -m "/diplomadosAccordion-diplomadosNav-Footer-ContactForm-Index-package-page"
*/
