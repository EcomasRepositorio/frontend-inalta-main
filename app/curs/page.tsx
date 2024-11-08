"use client";
import React, { useState } from "react";
import CursoAmbientaly from "@/components/cursos/IngAmbientaly/CursoAmbientaly";
import CursoIrrigation from "@/components/cursos/IngAgronomy/CursoIrrigation";
import CursoSolidWaste from "@/components/cursos/IngAmbientaly/CursoSolidWaste";
import CursoTechnicalIrrigation from "@/components/cursos/IngAgronomy/CursoTechnicalIrrigation";
import GraduateTechnicalAssistant from "@/components/cursos/IngCivil/GraduateTechnicalAssistant";
import GraduateIngVial from "@/components/cursos/IngCivil/GraduateIngVial";
import GraduateIngBridge from "@/components/cursos/IngCivil/GraduateIngBridge";
import GraduateWorksSupervision from "@/components/cursos/IngCivil/GraduateWorksSupervision";
import GraduateFoodQuality from "@/components/cursos/IngAlimentary/GraduateFoodQuality";
import GraduateSsoma from "@/components/cursos/ssoma/GraduateSsoma";
import Whatsapp from "@/components/whatsapp/Index";
import CursoQualityMonitoringAmbientaly from "@/components/cursos/IngAmbientaly/CursoQualityMonitoringAmbientaly";
import CursoManagementAmbientaly from "@/components/cursos/IngAmbientaly/CursoManagementAmbientaly";

const Graduate = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  const sections = [
    { id: "GraduateIngVial", title: "CURSOS EN Ingeniería Vial", content: <GraduateIngVial /> },
    { id: "GraduateWorksSupervision", title: "CURSOS EN RESIDENCIA Y SUPERVISIÓN DE OBRAS", content: <GraduateWorksSupervision /> },
    { id: "GraduateIngBridge", title: "CURSOS EN Ingeniería de Puentes", content: <GraduateIngBridge /> },
    { id: "GraduateTechnicalAssistant", title: "CURSOS EN ASISTENTE TÉCNICO EN OBRAS", content: <GraduateTechnicalAssistant /> },
    { id: "ambiental", title: "CURSOS EN INGENIERÍA AMBIENTAL", content: <CursoAmbientaly /> },
    { id: "agronoma", title: "CURSOS EN INGENIERÍA AGRÓNOMA", content: <CursoIrrigation /> },
    { id: "civil", title: "CURSOS EN INGENIERÍA CIVIL", content: <GraduateTechnicalAssistant /> },
    { id: "alimentaria", title: "CURSOS EN INGENIERÍA ALIMENTARIA", content: <GraduateFoodQuality /> },
    { id: "CursoManagementAmbientaly", title: "CURSOS EN GESTION AMBIENTAL MUNICPAL Y REGIONAL", content: <CursoManagementAmbientaly /> },
    { id: "CursoIrrigation", title: "CURSOS EN RIEGO Y FERTIRRIEGO", content: <CursoIrrigation /> },
    { id: "CursoTechnicalIrrigation", title: "CURSOS EN SISTEMA DE RIEGO TECNIFICADO", content: <CursoTechnicalIrrigation /> },
    { id: "GraduateFoodQuality", title: "CURSOS EN GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA", content: <GraduateFoodQuality /> },
    { id: "GraduateSsoma", title: "CURSOS EN SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE (SSOMA)", content: <GraduateSsoma /> },
  ];

  return (
    <section id="/graduate">
      {/* Encabezado sin video de fondo */}
      <div className="relative pt-20 pb-20 bg-blue-500">
        <div className="relative mx-auto inset-0 flex flex-col justify-center items-center text-center text-gray-800 px-4">
          <h1 className="font-extrabold text-4xl lg:text-6xl mt-10">Nuestros Cursos</h1>
          <p className="mt-4 text-lg md:text-2xl mb-10">
            ¡Brindamos un servicio de excelencia para garantizar el éxito en tu carrera profesional!
          </p>
        </div>
      </div>

      {/* Contenedor del acordeón */}
      <div className="p-4 relative z-10 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500">
        <div className="bg-gradient-to-br rounded-md shadow-md text-black">
          {sections.map((section) => (
            <div key={section.id} className="border-b">
              <button
                className="w-full text-left p-4 bg-transparent focus:outline-none"
                onClick={() => toggleSection(section.id)}
              >
                <span className="font-bold">{section.title}</span>
                <span className="float-right">{activeSection === section.id ? "▲" : "▼"}</span>
              </button>
              {activeSection === section.id && (
                <div className="p-4 bg-white">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Whatsapp />
    </section>
  );
};

export default Graduate;
