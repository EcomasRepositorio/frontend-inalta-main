"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import DiploCivil from "./diplomadosCivil";
import DiploAmbiental from "./diplomadosAmbient";
import DiploAlimentarias from "./diplomadosAlimentarias";
import DiploAgronoma from "./diplomadosAgronoma";
import DiploDerecho from "./diplomadosDerecho";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Llama a la función una vez al montar el componente para establecer el estado inicial

    window.addEventListener("resize", handleResize); // Agrega un event listener para detectar cambios en el tamaño de la ventana

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col">
        <Tabs
          disabledKeys={["anothers"]}
          color="primary"
          aria-label="Options"
          className="w-full md:max-w-max"
          placement={isMobile ? "top" : "start"}
          classNames={{
            tabList: "w-full dark:bg-blackblue2 bg-blue-white",
            cursor: "bg-blue-500",
            tab: "border-none", // Eliminar borde de las pestañas
            tabContent: "group-data-[selected=true]:text-white dark:text-white",
          }}
        >
          <Tab key="civil" title="Ing. Civil" className="text-primaryblue">
            <Card className="border-none shadow-none">
              <CardBody className="bg-transparent border-none">
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="ambient" title="Ing. Ambiental">
            <Card className="border-none shadow-none">
              <CardBody className="dark:bg-blackblue2 bg-white border-none">
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="agrono" title="Ing. Agrónoma">
            <Card className="border-none shadow-none">
              <CardBody className="dark:bg-blackblue2 bg-white border-none">
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="alimentaria" title="Ingeniería en alimentos">
            <Card className="border-none shadow-none">
              <CardBody className="dark:bg-blackblue2 bg-white border-none">
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="derecho" title="Derecho">
            <Card className="border-none shadow-none">
              <CardBody className="dark:bg-blackblue2 bg-white border-none">
                <DiploDerecho />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
