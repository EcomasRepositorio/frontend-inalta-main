"use client";
import dynamic from "next/dynamic";

// Importación de componentes dinámicos
const PrincipalHome = dynamic(() => import("@/components/home/PrincipalHome"));
const PorqueNosotros = dynamic(() => import("@/components/home/PorqueNosotros"));
const CarouselCursosDestacados = dynamic(() => import("@/components/home/SwiperCursosDestacados"));
const TestimoniosFb = dynamic(() => import("@/components/home/TestimoniosFb"));
const NuestrosDiplomados = dynamic(() => import("@/components/home/NuestrosDiplomados"));
const ContactForm = dynamic(() => import("@/components/home/ContactForm"));
const ScrollToBotButton = dynamic(() => import("@/components/home/bounceDown"));

export default function Main() {
  return (
    <main className="relative z-0">
      {/* Primera Sección */}
      <div>
        <PrincipalHome />
      <div className="bg-gradient-to-b from-blue-50 via-white to-white">
      </div>

        <NuestrosDiplomados />
      </div>

      {/* Segunda Sección - SwiperCarrouselDiplomados */}

      {/* Tercera Sección - PorqueNosotros y Cursos Destacados */}
      <div className="bg-gradient-to-b from-white via-white to-white">
        

        <PorqueNosotros />

        
        <CarouselCursosDestacados />
      </div>

      {/* Testimonios */}
      <div className="w-full">
        <TestimoniosFb />
      </div>

      {/* Contact Form */}
      <div>
        <ContactForm />
      </div>

      {/* Scroll to Bottom Button */}
      <div>
        <ScrollToBotButton />
      </div>
    </main>
  );
}
