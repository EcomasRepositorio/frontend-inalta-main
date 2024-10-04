import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

// Tipos para los enlaces y menús
type SocialLink = {
  href: string;
  icon: React.ElementType;
};

type MenuLink = {
  href: string;
  label: string;
};

// Definición de los enlaces de redes sociales y menús
const socialLinks: SocialLink[] = [
  { href: "https://www.facebook.com", icon: FaFacebookF },
  { href: "https://www.instagram.com", icon: FaInstagram },
  { href: "https://www.tiktok.com", icon: FaTiktok },
  { href: "https://wa.me/51921818181", icon: FaWhatsapp },
  { href: "https://www.youtube.com", icon: FaYoutube },
];

const menuLinks: MenuLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/diplomados", label: "Diplomados" },
  { href: "/certs", label: "Certificados" },
  { href: "/aula-virtual", label: "Aula Virtual" },
];

const diplomaLinks: string[] = [
  "Ingeniería Agronoma",
  "Ingeniería Civil",
  "Ingeniería Ambiental",
  "Ingeniería de Industrias Alimentarias",
  "Derecho",
];

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-blue-500 text-white py-16 px-6 w-full overflow-visible" // Eliminé `h-[350px]` y ajusté `overflow`
    >
      <div className="container mx-auto w-full h-full overflow-visible">
        {/* Redes Sociales */}
        <div className="flex justify-center lg:justify-between items-center mb-12">
          <p className="text-center lg:text-left">Síguenos en nuestras redes sociales</p>
          <div className="flex justify-center lg:justify-end space-x-4 mt-4 lg:mt-0">
            {socialLinks.map(({ href, icon: Icon }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition duration-200"
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="border-t border-white/40 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logotipo y Descripción */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <Image
                src="/image/logo_inal_vert.png"
                alt="Corporación Inalta"
                width={180}
                height={60}
                priority
                className="mb-4"
              />
              <p className="mt-2 text-sm text-center md:text-left">
                Proporcionamos cursos y diplomados con aval de la EPG-UNP.
              </p>
              <Link href="/book">
                <div className="mt-2 text-sm text-white hover:underline flex items-center">
                  <Image
                    src="/image/reclamos.png"
                    alt="Libro de Reclamaciones"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Libro de Reclamaciones
                </div>
              </Link>
            </div>

            {/* Nuestra Empresa */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">NUESTRA EMPRESA:</h3>
              <ul className="space-y-2">
                {menuLinks.map(({ href, label }, idx) => (
                  <li key={idx}>
                    <Link href={href}>
                      <span className="text-white hover:text-blue-100 transition duration-150">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <span className="hover:underline cursor-pointer">¡Inscríbete!</span>
                </li>
              </ul>
            </div>

            {/* Nuestros Diplomados */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">NUESTROS DIPLOMADOS EN:</h3>
              <ul className="space-y-2">
                {diplomaLinks.map((diploma, idx) => (
                  <li key={idx}>
                    <Link href="/diplomados">
                      <span className="text-white hover:text-blue-100 transition duration-150">
                        {diploma}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">CONTACTO</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <HiOutlineMail size={20} className="mr-2" />
                  <Link href="mailto:capacitaciones@inalta.edu.pe">
                    <span className="hover:underline">capacitaciones@inalta.edu.pe</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <HiOutlinePhone size={20} className="mr-2" />
                  <Link href="tel:+51984040264">
                    <span className="hover:underline">+51 999 999 999</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Derechos Reservados */}
        <div className="mt-8 text-center text-sm text-gray-300">
          <p>© 2024 Copyright: Inalta</p>
        </div>
      </div>
    </footer>
  );
};

// Exportar el componente memoizado para optimizar el renderizado
export default memo(Footer);
