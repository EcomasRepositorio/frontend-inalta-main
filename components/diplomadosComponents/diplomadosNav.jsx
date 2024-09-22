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
          aria-label="Options"
          className="w-full md:max-w-max"
          placement={isMobile ? "top" : "start"}
          // Aplicando directamente className
          tabListProps={{
            className: "w-full bg-white",
          }}
          tabProps={{
            className: "py-3 text-lg text-black",
          }}
          tabContentProps={{
            className: "group-data-[selected=true]:text-black",
          }}
          indicatorProps={{
            className: "bg-blue-500", // Aplicando la clase Tailwind CSS directamente
          }}
        >
          {/* Ingeniería Civil Tab */}
          <Tab key="civil" title="Ingeniería Civil">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black">
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>

          {/* Ingeniería Ambiental Tab */}
          <Tab key="ambient" title="Ingeniería Ambiental">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black">
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>

          {/* Ingeniería Agrónoma Tab */}
          <Tab key="agrono" title="Ingeniería Agrónoma">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black">
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>

          {/* Ingeniería en Alimentos Tab */}
          <Tab key="alimentaria" title="Ingeniería en Alimentos">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black">
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>

          {/* Derecho Tab */}
          <Tab key="derecho" title="Derecho">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black">
                <DiploDerecho />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
