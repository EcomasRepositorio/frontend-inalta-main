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

const socialLinks = [
  { href: "https://www.facebook.com", icon: FaFacebookF },
  { href: "https://www.instagram.com", icon: FaInstagram },
  { href: "https://www.tiktok.com", icon: FaTiktok },
  { href: "https://wa.me/51921818181", icon: FaWhatsapp },
  { href: "https://www.youtube.com", icon: FaYoutube },
];

const menuLinks = [
  { href: "/", label: "Inicio" },
  { href: "/diplomados", label: "Diplomados" },
  { href: "/certs", label: "Certificados" },
  { href: "/aula-virtual", label: "Aula Virtual" },
];

const diplomaLinks = [
  "Ingeniería Agronoma",
  "Ingeniería Civil",
  "Ingeniería Ambiental",
  "Ingeniería de Industrias Alimentarias",
  "Derecho",
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-blue-400 to-blue-700 text-white py-8"
      style={{ minHeight: "400px" }} // Altura mínima para evitar cambios de tamaño en el contenedor del footer
    >
      <div className="container mx-auto px-4">
        {/* Redes Sociales */}
        <div className="mr-12 hidden lg:block">
          <p className="mb-2">Síguenos en nuestras redes sociales</p>
          <div className="flex justify-end space-x-4">
            {socialLinks.map(({ href, icon: Icon }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/40 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logotipo y Descripción */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <Image
                src="/image/logo_inal_vert.png"
                alt="Binex"
                width={150}
                height={150}
                priority // Mantener prioridad de carga solo para esta imagen crítica
              />
              <p className="mt-2 text-sm text-center md:text-left">
                Proporcionamos cursos y diplomados con aval de la EPG-UNP
              </p>
              <Link href="/book">
                <div className="mt-2 text-sm text-white hover:underline flex items-center">
                  <Image
                    src="/image/reclamos.png"
                    alt="Icono Libro de Reclamaciones"
                    width={24}
                    height={24}
                    loading="lazy" // Carga diferida para imágenes no críticas
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
                      <span className="text-white hover:text-blue-100 transition duration-100">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <span className="hover:underline">¡Inscríbete!</span>
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
                      <span className="text-white hover:text-blue-100 transition duration-100">
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
                    <span className="hover:underline">
                      capacitaciones@inalta.edu.pe
                    </span>
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
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2024 Copyright: inalta</p>
          <span className="sr-only">
            esta pagina esta bendecida por el Omnissiah
          </span>
        </div>
      </div>
    </footer>
  );
}
