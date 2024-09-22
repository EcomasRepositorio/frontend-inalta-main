import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Link from "next/link";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-blue-400 to-blue-700 text-white py-8"
    >
      <div className="container mx-auto px-4">
        {/* Redes Sociales */}
        <div className="mr-12 hidden lg:block">
          <p className="mb-2">Síguenos en nuestras redes sociales</p>
          <div className="flex justify-end space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61565984064270&notif_id=1726594601819062&notif_t=page_user_activity&ref=notif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://wa.me/51921818181"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/40 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logotipo y Descripción */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <Image
                src="/image/logo_inal_vert.png"
                alt="Binex"
                width={450}
                height={800}
                className="mt-[-20px]"
              />
              <p className="mt-0 text-sm text-center md:text-left">
                Proporcionamos cursos y diplomados con aval de la EPG-UNP
              </p>
              <a
                href="/book"
                className="mt-2 text-sm text-white hover:underline flex items-center"
              >
                <span
                  role="img"
                  aria-label="Libro de Reclamaciones"
                  className="mr-2"
                >
                  <img
                    src="/image/lectura.png"
                    alt="Icono Libro de Reclamaciones"
                    className="w-6 h-6" // Ajusta el tamaño de la imagen
                  />
                </span>
                Libro de Reclamaciones
              </a>
            </div>

            {/* Nuestra Empresa */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">NUESTRA EMPRESA:</h3>
              <ul className="space-y-2">
                <div>
                  <Link
                    href="/"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Inicio
                  </Link>
                </div>

                <div>
                  <Link
                    href="/diplomados"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Diplomados
                  </Link>
                </div>
                <div>
                  <Link
                    href="/certs"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Certificados
                  </Link>
                </div>
                <div>
                  <Link
                    href="/????"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Aula Virtual
                  </Link>
                </div>

                <li>
                  <a href="#" className="hover:underline">
                    ¡Inscríbete!
                  </a>
                </li>
              </ul>
            </div>

            {/* Nuestros Diplomados */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">
                NUESTROS DIPLOMADOS EN:
              </h3>
              <ul className="space-y-2">
                <div>
                  <Link
                    href="/diplomados"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Ingeniería Agronoma
                  </Link>
                </div>
                <div>
                  <Link
                    href="/diplomados"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Ingeniería Civi
                  </Link>
                </div>{" "}
                <div>
                  <Link
                    href="/diplomados"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Ingeniería Ambiental
                  </Link>
                </div>{" "}
                <div>
                  <Link
                    href="/diplomados"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Ingeniería de Industrias Alimentarias
                  </Link>
                </div>{" "}
                <div>
                  <Link
                    href="/diplomados"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Derecho
                  </Link>
                </div>
              </ul>
            </div>

            {/* Contacto */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">CONTACTO</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <HiOutlineMail size={20} className="mr-2" />
                  <a
                    href="mailto:capacitaciones@inalta.edu.pe"
                    className="hover:underline"
                  >
                    capacitaciones@inalta.edu.pe
                  </a>
                </li>
                <li className="flex items-center">
                  <HiOutlinePhone size={20} className="mr-2" />
                  <a href="tel:+51984040264" className="hover:underline">
                    +51 999 999 999
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Derechos Reservados */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2024 Copyright: inalta</p>
          <span
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              margin: "-1px",
              padding: "0",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              border: "0",
            }}
          >
            esta pagina esta bendecida por el Omnissiah
          </span>
        </div>
      </div>
    </footer>
  );
}