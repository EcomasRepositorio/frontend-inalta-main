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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col">
        <Tabs
          disabledKeys={["anothers"]}
          color="secondary" // Cambia el color del Tab
          aria-label="Options"
          className="w-full md:max-w-max"
          placement={isMobile ? "top" : "start"}
          classNames={{
            tabList: "w-full dark:bg-darkgray bg-lightgray",
            tab: "py-3 text-lg", // Ajusta el padding y el tamaño del texto
            tabContent: "group-data-[selected=true]:text-white dark:text-light",
          }}
        >
          <Tab key="civil" title="Ingeniería Civil">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="dark:bg-darkblue bg-lightblue">
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="ambient" title="Ingeniería Ambiental">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="dark:bg-darkblue bg-lightblue">
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="agrono" title="Ingeniería Agrónoma">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="dark:bg-darkblue bg-lightblue">
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="alimentaria" title="Ingeniería en Alimentos">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="dark:bg-darkblue bg-lightblue">
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="derecho" title="Derecho">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="dark:bg-darkblue bg-lightblue">
                <DiploDerecho />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="anothers" title="Otras Profesiones">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="dark:bg-darkblue bg-lightblue">
                {/* Contenido para otras profesiones */}
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
