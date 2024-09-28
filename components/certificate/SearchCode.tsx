import React, { useState, FormEvent } from "react";
import { URL } from "@/components/utils/format/tokenConfig";
import axios from "axios";
import { SearchCodeProps, StudentCode } from "../../interface/interface";
import Modal from "../share/Modal";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";

const SearchName: React.FC<SearchCodeProps> = ({ onSearchCode }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<StudentCode>();
  const [open, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
    setSearchType(event.target.value);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchCode = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }
    try {
      const value = queryValue.trim();
      const apiUrl = `${URL()}/student/code/${value}/type/${searchType}`;
      const res = await axios.get(apiUrl);
      setStudentData(res.data);
      onSearchCode(res.data);
      if (queryValue.trim() !== "") {
        setOpen(true);
      }
    } catch (error) {
      openErrorModal();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const tableRows = [
    {
      imgSrc: "/icons/organizadopor.svg",
      label: "Organizado por:",
      value: studentData?.institute,
    },
    {
      imgSrc: "/icons/otorgado.svg",
      label: "Otorgado a:",
      value: studentData?.name,
    },
    {
      imgSrc: "/icons/nom_evento.svg",
      label: "Nombre del evento:",
      value: studentData?.activityAcademy,
    },
    {
      imgSrc: "/icons/creditos_horas.svg",
      label: "Creditos/Horas:",
      value: studentData?.hour,
    },
    {
      imgSrc: "/icons/fecha_emision.svg",
      label: "Fecha de emisión:",
      value: studentData?.date,
    },
  ];

  return (
    <div className="">
      <form onSubmit={searchCode} className="w-full ">
        <div className="flex items-center  justify-center">
          <div className=" flex-1">
            <input
              type="search"
              id="default-search"
              className=" font-normal text-sm text-gray-900 border-1 border-gray-300 rounded-lg bg-white  focus:border-primaryblue  m-0"
              placeholder={`Buscar por código ${
                searchType === "code" ? "código" : ""
              }`}
              required
              onClick={toggleIsActive}
              onChange={onChange}
              value={queryValue}
            />
          </div>
          <div className=" ml-2 h-full">
            <Button color="primary" type="submit" className="bg-primaryblue">
              Buscar
            </Button>
          </div>
        </div>
      </form>

      {loading && <Spinner />}
      {studentData && (
        <Modal open={open} onClose={() => setOpen(false)}>
          {/* Mostrar solo las dos imágenes deseadas */}
          <div className=" flex justify-center mb-10 gap-0.5  ">
            <Image
              src={"/image/inaltlogcert.webp"}
              alt="Inalta Logo"
              className="lg:w-1/2 md:w-40 w-32  object-contain mt-2"
              width={600}
              height={600}
              priority={true}
            />
            <Image
              src={"/image/ESCUELA DE POSGRADO DE LA UNP.png"}
              alt="Escuela de Posgrado"
              className="md:w-40 lg:w-40 w-32  object-contain mt-2"
              width={400}
              height={400}
              priority={true}
            />
          </div>
          <div className=" max-w-md text-center  rounded-md mx-auto">
            {tableRows.map((row, index) => (
              <div key={index} className="mb-4">
                <div className="inline-flex items-center text-white text-sm p-1 md:w-80 w-72 rounded-lg bg-slate-600 font-semibold">
                  {row.imgSrc && (
                    <Image
                      src={row.imgSrc}
                      alt={row.label}
                      className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1"
                      width={800}
                      height={800}
                    />
                  )}
                  <div className="flex-1 text-center">{row.label}</div>
                </div>

                <div className="flex justify-center text-gray-600 dark:text-white mt-3 mb-5 md:text-sm text-xs md:w-[410px] px-[2px] font-semibold">
                  {row.label === "Organizado por:" ? (
                    <span>
                      {row.value && (
                        <span>
                          {/* Insertar un salto de línea después de un número específico de caracteres */}
                          {row.value.length > 45 ? (
                            <>
                              {row.value.substring(0, 45)}
                              <br />
                              {row.value.substring(45)}
                            </>
                          ) : (
                            <span>{row.value}</span>
                          )}
                        </span>
                      )}
                    </span>
                  ) : (
                    <span>{row.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-500 mb-4">
            Código incorrecto
          </h2>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-100">
            El código que ingresaste no se encuentra en nuestra base de datos.
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchName;
