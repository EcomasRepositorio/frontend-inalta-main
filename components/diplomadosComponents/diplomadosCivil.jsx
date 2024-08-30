"use client";
import Curso from "./diplomadosAccordion";

const DiploCivil = () => {
  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      area: "INGENIERÍA CIVIL",
      titulo: "Ingeniería de Puentes",
      imagen: "/image/ingpuentes.jpg",
      fechaInicio: "11/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Bachilleres, Gerentes y administradores de proyectos y jefes de área. Ingenieros civiles, ingenieros estructurales, arquitectos residentes y supervisores de obras. Profesionales del sector público y privado relacionados con proyectos viales.",
      modulos: [
        "Diseño de puentes, pontones",
        "Estudios de Hidrología e hidráulica en puentes",
        "Estudios geológicos y geotécnicos en puentes",
        "Diseño y modelamiento de puentes con SAP 2000",
        "Diseño y modelamiento de puentes con CSI Bridge",
        "Modelamiento y análisis estructural de puentes",
        "Diseño sísmico en puentes AASHTO-LRFD",
        "Mantenimiento y conservación de puentes",
        "Inspección, evaluación de puentes bajo la metodología SCAP",
      ],
    },
    /*  {
      area: 'INGENIERÍA CIVIL',
      titulo: 'Modelamiento BIM',
      imagen: '/image/bim_model.jpg',
      fechaInicio: '22/06/2024',
      modalidad: 'Virtual',
      duracion: '4 meses',
      horas: '420 horas academicas (26 creditos)',
      descripcion: 'Este diplomado está dirigido a Ingenieros y arquitectos que se encuentran trabajando en diseño y construcción de estructuras de edificaciones, gerentes de proyectos, ingenieros revisores de proyectos estructurales y profesores de universidades que deseen desarrollar o renovar las técnicas y herramientas involucradas en el diseño estructural.',
      modulos: [
        'Modelado de arquitectura',
        'Modelamiento de instalaciones sanitarias',
        'Modelamiento de instalaciones eléctricas',
    'Creación de planos y documentación BIM',
        'Lean construcción y BIM',
    'Gestión de proyectos con Metodología BIM',
        'Modelado de estructuras BIM',
        'Modelamiento de estructuras metálicas BIM',

      ]
    },*/
    {
      area: "INGENIERÍA CIVIL",
      titulo: "Asistente Técnico en Obras",
      imagen: "/image/tecobras.jpg",
      fechaInicio: "22/09/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Bachilleres, titulados y profesionales de las carreras de ingeniería civil, industriales, sanitarios, arquitectos y ramas afines.",
      modulos: [
        "Cuaderno de obra físico y digital",
        "Costos y Presupuestos con S10",
        "Valorización de obras",
        "Liquidación de obras",
        "Formulación y planificación de proyectos con MS Project",
        "Análisis y diseño de instituciones educativas",
        "Seguridad, salud ocupacional y medio ambiente en obras públicas",
        "Expediente técnico en obras",
        "Régimen laboral en construcción civil",
        "Planificación y programación de obras",
        "Control de obras",
        "Metrados en edificaciones",
      ],
    },
    {
      area: "INGENIERÍA CIVIL",
      titulo: "Ingeniería Vial",
      imagen: "/image/vialdiplo.jpg",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Bachilleres, Gerentes y administradores de proyectos de la construcción y jefes de área. Ingenieros civiles, topógrafos, arquitectos residentes y supervisores de obras. Profesionales del sector público y privado relacionados con proyectos viales. ",
      modulos: [
        "Estructuras en carreteras - puentes",
        "Metrados, costos y presupuesto - cronograma en obras viales",
        "Arqueología en proyectos viales",
        "Estudio ambientales en proyectos viales",
        "Diseño, construcción y mantenimiento de túneles",
        "Tráfico y carga en proyectos viales.",
        "Topografía, diseño geométrico, señalización y seguridad vial",
        "Geología - Geotecnia en obras viales",
        "Mecánica de suelos en carretera",
        "Suelos y pavimentos en proyectos viales",
        "Hidrología e hidráulica",
        "Integración de proyectos de infraestructura vial",
      ],
    },
    {
      area: "INGENIERÍA CIVIL",
      titulo: "Residencia y supervisón de obras",
      imagen: "/image/residencia.jpg",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Gerente de proyectos relacionados a construcción, supervisor de obras, consultores en servicios de ingeniería, ingenieros, arquitectos, topógrafos, bachilleres de la especialidad de ingeniería civil, y/o especialistas afines. Profesionales del sector público y privado relacionados con proyectos de obras civiles.  ",
      modulos: [
        "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
        "Recepción - liquidación de obras y medios de solución de controversia",
        "Expediente técnico como herramienta para la ejecución y supervisión de obra",
        "Valorización y liquidación de obras administración directa",
        "Plan de gestión de seguridad y salud en obra",
        "Contratación y ejecución de obras",
        "Preliminares para inicio de obra",
        "Metrados y valorizaciones de obra",
        "Planeamiento y programación de obras",
        "Informes de obra",
        "Control técnico y calidad en obras",
      ],
    },
  ];

  return (
    <div>
      {cursosData.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}
    </div>
  );
};

export default DiploCivil;

/*
<div class="p-5 flex flex-col bg-white">
  <div class="text-white text-center text-4xl lg:text-4xl xl:text-6xl mb-10 lg:mt-10 font-extrabold p-2"
       style="background-image:linear-gradient(to right, #0079bb, #00dbb8);-webkit-background-clip:text;background-clip:text;color:transparent">
    DIPLOMADOS EN INGENIERÍA VIAL
  </div>
  
  <div class="mb-20 lg:mb-16">
    <div id="ambientaly">
      <div class="md:px-20 flex flex-col sm:flex-row justify-center mb-8">
        <div class="sm:w-96 lg:w-96 sm:mb-0">
          <img alt="icon" fetchpriority="high" width="800" height="800" decoding="async" class="bg-cover rounded-3xl"
               style="color:transparent"
               src="/_next/image?url=%2Fimg%2Fgraduates%2FASISTENTET%C3%89CNICOENOBRAS.png&w=1920&q=75">
        </div>
        <div class="sm:w-1/2 md:px-20 sm:px-5 lg:mt-16"></div>
      </div>

      <div class="text-testBlue font-extrabold lg:text-4xl text-2xl mb-4">ASISTENTE TÉCNICO EN OBRAS</div>
      <div class="mb-4">
        <p class="text-sm font-semibold text-gray-600 italic">
          "Diplomado dirigido a bachilleres, titulados y profesionales de las carreras de ingeniería civil, industriales, sanitarios, arquitectos y ramas afines."
        </p>
      </div>

      <div class="grid lg:grid-cols-2 grid-cols-1 text-testBlue text-sm mb-4">
        <div class="flex items-center mb-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg"
               height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11.575-4.75a.825.825 0 1 0-1.65 0v5.5c0 .296.159.57.416.716l3.5 2a.825.825 0 0 0 .818-1.432l-3.084-1.763Z"></path>
          </svg>
          <p class="font-bold ml-1">Inicio 18 de Mayo</p>
        </div>
        <div class="flex items-center mb-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg"
               height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke-width="2"
                  d="M3,18 L21,18 L21,5 L21,5 C21,4.44771525 20.5522847,4 20,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,18 Z M2,20 L22,20 C23,20 23,19 23,19 L1,19 C1,19 1,20 2,20 Z"></path>
          </svg>
          <p class="font-bold ml-1">Modalidad Online via Zoom</p>
        </div>
        <div class="flex items-center mb-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg"
               height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
          </svg>
          <p class="font-bold ml-1">4 meses</p>
        </div>
        <div class="flex items-center mb-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="text-lg"
               height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M246,128a54,54,0,1,0-92,38.32V224a6,6,0,0,0,8.68,5.37L192,214.71l29.32,14.66A6,6,0,0,0,224,230a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,224V166.32A53.83,53.83,0,0,0,246,128Zm-96,0a42,42,0,1,1,42,42A42,42,0,0,1,150,128Zm68,86.29-23.32-11.66a6,6,0,0,0-5.36,0L166,214.29v-39a53.87,53.87,0,0,0,52,0Z"></path>
          </svg>
          <p class="font-bold ml-1">420 horas académicas (<span class="credits">26 créditos</span>)</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2">
        <div class="w-full">
          <a class="border-2 border-testBlue flex items-center justify-center text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
             target="_blank" href="https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados">
            <div class="items-center text-xs uppercase inline-flex">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-green-500 text-lg"
                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18.1-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.3-8.6-44.4-27.4-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.4-11.3 2.5-2.5 5.5-6.5 8.2-9.7 2.7-3.2 3.6-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.3-4.5-10.9-9-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.7 6.9s-19.3 18.9-19.3 46.2 19.8 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.5 83.8 13.2 5.7 23.5 9.1 31.6 11.7 13.3 4.2 25.4 3.6 35 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-12.8 4.6-23.7 3.2-26.4-1.4-2.8-5.1-4.4-10.6-7.2z"></path>
              </svg>
              <span class="ml-1">Más Información</span>
            </div>
          </a>
        </div>

        <div class="w-full">
          <a class="bg-testBlue text-white font-bold rounded-xl p-2 hover:scale-105 duration-300 flex items-center justify-center uppercase text-xs"
             target="_blank"
             href="https://api.whatsapp.com/send?phone=51921814045&text=Hola,%20deseo%20inscribirme%20en%20el%20diplomado%20de%20Asistente%20Técnico%20en%20Obras">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-lg"
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M511.6 64c247.1 0 448 200.8 448 448s-200.8 448-448 448c-79.6 0-155.8-20.7-223.2-60l-9.6-5.7-164 43.7c-19.1 5.1-38.6-13.3-31.5-32.1l54.8-149-6.1-10C54.7 704.5 64 634 64 511.6 64 264.5 264.4 64 511.6 64z m-69.8 268c-15.6 0-34.4 5.2-51.1 26.1-16.9 21-63.7 62.3-63.7 152.5 0 90.1 65.3 177.5 74.4 189.6 9.2 12.2 128.6 204.6 319.2 266 190.6 61.5 196.7 40.9 231.5 40.9s119.8-72.4 125.3-142.1c5.4-69.6 5.4-129.2-26.6-151.7-32.1-22.4-87.7-50.5-103.8-55.8-16.2-5.3-36.4-8-58.6 12.1-22.2 20.1-84.3 82.4-103.5 96.2-19.2 13.8-35.2 20.1-65.6 3.1-30.3-16.9-127.2-47.3-242.3-157.5-89.1-86.4-134-161.7-149.5-189.6-15.5-27.9-1.5-41.3 11.7-54.6 13.3-13.3 29.7-29.7 45.7-49.7 16-19.9 10.7-37.8 5.3-52.9-5.5-15.1-50-125-68.7-160-18.7-35.1-37.5-37.1-51.2-37.5z"></path>
            </svg>
            <span class="ml-1">Inscribirme Ahora</span>
          </a>
        </div>

        <div class="w-full">
          <a class="bg-testBlue text-white font-bold rounded-xl p-2 hover:scale-105 duration-300 flex items-center justify-center uppercase text-xs"
             target="_blank"
             href="https://webinarsdesaludmental.com">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg"
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2v3c0 .55.45 1 1 1 .2 0 .39-.06.55-.17L12.83 16H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></path>
            </svg>
            <span class="ml-1">Más Cursos</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
*/