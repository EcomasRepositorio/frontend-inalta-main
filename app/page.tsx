"use client";
import dynamic from "next/dynamic";
const PrincipalHome = dynamic(() => import("@/components/home/PrincipalHome"));
const PorqueNosotros = dynamic(
  () => import("@/components/home/PorqueNosotros")
);

const SwiperCarrouselDiplomados = dynamic(
  () => import("@/components/home/SwiperDiplomados")
);
const CarouselCursosDestacados = dynamic(
  () => import("@/components/home/SwiperCursosDestacados")
);
const TestimoniosFb = dynamic(() => import("@/components/home/TestimoniosFb"));

const NuestrosDiplomados = dynamic(
  () => import("@/components/home/NuestrosDiplomados")
);
const ContactForm = dynamic(() => import("@/components/home/ContactForm"));
const ScrollToBotButton = dynamic(() => import("@/components/home/bounceDown"));

export default function Main() {
  return (
    <main className="relative z-0">
      {/* Botón para cambiar de tema */}
      {/* Botón para cambiar de tema */}
      <div className="">
        <PrincipalHome />
        
        <NuestrosDiplomados />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-white">
        <div className="rounded-lg mx-auto max-w-screen-xl">
        </div>
        <SwiperCarrouselDiplomados />
        </div>
      <div className="min-h-screen bg-gradient-to-b from-white via-whthe to-white">
        <div className="rounded-lg mx-auto max-w-screen-xl">

        </div>
        <PorqueNosotros />
        <div className="bg-transparent mx-auto max-w-screen-xl">
          {/* Aquí va el contenido */}
        </div>
        <CarouselCursosDestacados />
      </div>
      <div className=" w-full ">
        <TestimoniosFb />
      </div>
    
      <div className=" ">
        <ContactForm />
      </div>

      <div className="">
        <ScrollToBotButton />
      </div>
    </main>
  );
}
