'use client';

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

// Carga dinámica de los componentes con suspense para optimización del rendimiento
const SearchCode = dynamic(() => import("@/components/certificate/SearchCode"), {
  suspense: true,
});
const SearchDNI = dynamic(() => import("@/components/certificate/SearchDNI"), {
  suspense: true,
});
const SearchName = dynamic(() => import("@/components/certificate/SearchName"), {
  suspense: true,
});

// Componente memoizado para evitar renderizados innecesarios
const Logo = React.memo(({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) => (
  <div className="flex justify-center items-center">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-contain"
      priority
      sizes="(max-width: 768px) 150px, 200px"
    />
  </div>
));

const TestingPage: React.FC = () => {
  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <section className="relative min-h-[400px]">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0" // Cambié z-index a z-0
      >
        <source src="/video/prueba.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>

      <div className="py-12 mx-auto max-w-screen-lg px-4 relative z-10"> {/* Asegúrate que el contenido esté sobre el video con z-10 */}
        <div className="bg-white bg-opacity-40 dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 mb-12">
          {/* Contenedor de logos */}
          <div className="flex flex-col items-center">
            <div className="mb-6 grid grid-cols-2 gap-6 justify-center items-center mx-auto">
              <Logo src="/image/inaltcont.png" alt="Logo Inalta" width={200} height={200} />
              <Logo src="/image/ESCUELA DE POSGRADO DE LA UNP.png" alt="UNP" width={150} height={150} />
            </div>
          </div>

          {/* Título y Pestañas */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primaryblue dark:text-blue-100 mb-6 md:text-4xl">
              Verifica tu certificado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Verifica la autenticidad de tu certificado ingresando tu DNI, nombres o código de certificación proporcionado al obtenerlo. Nos aseguramos de proteger tu privacidad y la confidencialidad de tus datos.
            </p>

            {/* Pestañas */}
            <Tabs
              aria-label="Opciones de búsqueda"
              color="primary"
              classNames={{
                tabList: "w-full dark:bg-gray-900 bg-gray-100 border-b border-gray-300",
                cursor: "bg-primaryblue",
                tab: "py-2 px-4 rounded-t-lg",
                tabContent: "group-data-[selected=true]:text-white dark:text-white",
              }}
            >
              <Tab key="dni" title="Buscar por DNI">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900">
                    <Suspense fallback={<p>Cargando...</p>}>
                      <SearchDNI onSearchDNI={handleSearch} />
                    </Suspense>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="code" title="Buscar por Código">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900">
                    <Suspense fallback={<p>Cargando...</p>}>
                      <SearchCode onSearchCode={handleSearch} />
                    </Suspense>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="name" title="Buscar por Nombres">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900">
                    <Suspense fallback={<p>Cargando...</p>}>
                      <SearchName onSearchName={handleSearch} />
                    </Suspense>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingPage;
