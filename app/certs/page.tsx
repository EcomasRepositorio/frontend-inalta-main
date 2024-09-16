"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const SearchCode = dynamic(() => import("@/components/certificate/SearchCode"));
const SearchDNI = dynamic(() => import("@/components/certificate/SearchDNI"));
const SearchName = dynamic(() => import("@/components/certificate/SearchName"));

interface Props {
  // Define cualquier accesorio si es necesario
}

const TestingPage: React.FC<Props> = () => {
  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <section
      className="bg-fixed"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: "url(/image/fondocert.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px", // Asegura que la sección sea lo suficientemente alta
      }}
    >
      <div className="py-12 mx-auto max-w-screen-lg px-4">
      <div className="bg-black dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 mb-12">
          {/* Ajustes en el contenedor de logos */}
          <div className="flex flex-col items-center">
  <div className="mb-6 grid grid-cols-2 gap-6 justify-center items-center mx-auto">
    <div className="flex justify-center items-center">
      <Image
        src="/image/inaltlogcert.png"
        alt="Logo Inalta"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
    <div className="flex justify-center items-center">
      <Image
        src="/image/ESCUELA DE POSGRADO DE LA UNP.png"
        alt="UNP"
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  </div>
</div>
          {/* Título y pestañas */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primaryblue dark:text-blue-100 mb-6 md:text-4xl">
              Verifica tu certificado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Verifica la autenticidad de tu certificado ingresando tu DNI,
              nombres o código de certificación proporcionado al obtenerlo. Nos
              aseguramos de proteger tu privacidad y la confidencialidad de tus
              datos.
            </p>

            <Tabs
              aria-label="Options"
              color="primary"
              classNames={{
                tabList:
                  "w-full dark:bg-gray-900 bg-gray-100 border-b border-gray-300",
                cursor: "bg-primaryblue",
                tab: "py-2 px-4 rounded-t-lg",
                tabContent:
                  "group-data-[selected=true]:text-white dark:text-white",
              }}
            >
              <Tab key="dni" title="Buscar por DNI">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900">
                    <SearchDNI onSearchDNI={handleSearch} />
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="name" title="Buscar por Código">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900">
                    <SearchCode onSearchCode={handleSearch} />
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="code" title="Buscar por nombres">
                <Card>
                  <CardBody className="bg-gray-100 dark:bg-gray-900">
                    <SearchName onSearchName={handleSearch} />
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
