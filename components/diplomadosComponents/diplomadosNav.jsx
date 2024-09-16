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
          color="secondary" // Changes the color of the selected tab indicator
          aria-label="Options"
          className="w-full md:max-w-max"
          placement={isMobile ? "top" : "start"} // Switches tab placement for mobile
          classNames={{
            tabList: "w-full bg-white", // Tab background in white
            tab: "py-3 text-lg text-black", // Ensures tabs have black text and increased size
            tabContent: "group-data-[selected=true]:text-black", // Ensures selected tab text stays black
          }}
        >
          {/* Ingeniería Civil Tab */}
          <Tab key="civil" title="Ingeniería Civil">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black"> {/* White background and black text */}
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>

          {/* Ingeniería Ambiental Tab */}
          <Tab key="ambient" title="Ingeniería Ambiental">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black"> {/* White background and black text */}
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>

          {/* Ingeniería Agrónoma Tab */}
          <Tab key="agrono" title="Ingeniería Agrónoma">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black"> {/* White background and black text */}
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>

          {/* Ingeniería en Alimentos Tab */}
          <Tab key="alimentaria" title="Ingeniería en Alimentos">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black"> {/* White background and black text */}
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>

          {/* Derecho Tab */}
          <Tab key="derecho" title="Derecho">
            <Card className="shadow-lg border border-gray-200">
              <CardBody className="bg-white text-black"> {/* White background and black text */}
                <DiploDerecho />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
