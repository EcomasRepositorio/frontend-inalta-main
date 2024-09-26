"use client";

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
const Logo = React.memo(
  ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => (
    <div className="flex justify-center items-center w-full">
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
  )
);

const TestingPage: React.FC = () => {
  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <section
      className="relative bg-fixed bg-cover bg-center min-h-[400px] w-full"
      style={{ backgroundImage: "url(/image/panorama.jpg)" }}
    >
      {/* Overlay con color semitransparente */}
      <div className="absolute inset-0 bg-blue-600 opacity-50"></div>

      <div className="relative py-12 mx-auto max-w-screen-lg px-4 w-full">
        <div className="backdrop-blur-2xl bg-transparent rounded-lg shadow-lg p-8 md:p-12 mb-12 w-full">
          {/* Contenedor de logos */}
          <div className="flex flex-col items-center">
            <div className="mb-6 grid grid-cols-2 gap-6 justify-center items-center w-full">
              <Logo
                src="/image/inaltcont.png"
                alt="Logo Inalta"
                width={150} // Cambiado para móviles
                height={150} // Cambiado para móviles
              />
              <Logo
                src="/image/ESCUELA DE POSGRADO DE LA UNP.png"
                alt="UNP"
                width={130} // Cambiado para móviles
                height={130} // Cambiado para móviles
              />
            </div>
          </div>

          {/* Título y Pestañas */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 md:text-4xl">
              Verifica tu certificado
            </h2>
            <p className="text-gray-100 text-lg mb-8">
              Verifica la validez de tu certificado introduciendo tu DNI, nombre
              completo o código de certificado. Nos esforzamos en proteger la
              privacidad y el manejo confidencial de tus datos personales.
            </p>

            {/* Pestañas apiladas en móviles y horizontales en pantallas grandes */}
            <Tabs
              aria-label="Opciones de búsqueda"
              color="secondary"
              classNames={{
                tabList: "w-full flex flex-col md:flex-row bg-transparent border border-gray-300/40", // flex-col para móviles y flex-row para pantallas grandes
                cursor: "bg-gray-100/30 text-gray-100",
                tab: "py-2 px-4 rounded-t-lg text-gray-100", 
                tabContent: "group-data-[selected=true]:text-gray-100 text-g-100 ",
              }}
            >
              <Tab key="dni" title="Buscar por DNI">
                <Card>
                  <CardBody className="bg-gray-100 w-full">
                    <Suspense fallback={<p>Cargando...</p>}>
                      <SearchDNI onSearchDNI={handleSearch} />
                    </Suspense>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="code" title="Buscar por Código">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900 w-full">
                    <Suspense fallback={<p>Cargando...</p>}>
                      <SearchCode onSearchCode={handleSearch} />
                    </Suspense>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="name" title="Buscar por Nombres">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900 w-full">
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
