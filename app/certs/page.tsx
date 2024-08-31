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
    <section className="bg-fixed" style={{ backgroundAttachment: "fixed", backgroundImage: "url(/image/bg_test7.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="py-12 mx-auto max-w-screen-xl px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primaryblue dark:text-blue-100 mb-6 md:text-4xl">
              Verifica tu certificado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Verifica la autenticidad de tu certificado ingresando tu DNI, nombres o código de certificación proporcionado al obtenerlo. Nos aseguramos de proteger tu privacidad y la confidencialidad de tus datos.
            </p>

            <Tabs aria-label="Options" color="primary" classNames={{ tabList: "w-full dark:bg-gray-900 bg-gray-100 border-b border-gray-300", cursor: "bg-primaryblue", tab: "py-2 px-4 rounded-t-lg", tabContent: "group-data-[selected=true]:text-white dark:text-white" }}>
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

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex justify-center">
              <Image src="/certificate" alt="Certificado CAL" width={150} height={150} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/certificate" alt="Certificado CIP" width={150} height={150} className="hidden dark:block object-contain" />
              <Image src="/image/" alt="Certificado CIP oscuro" width={150} height={150} className="block dark:hidden object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/certificate/" alt="Certificado UNP" width={150} height={150} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/image/" alt="Logo Ecomas" width={150} height={150} className="hidden dark:block object-contain" />
              <Image src="/image/" alt="Logo Ecomas oscuro" width={150} height={150} className="block dark:hidden object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingPage;
