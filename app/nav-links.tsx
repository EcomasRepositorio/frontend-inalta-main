import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Definición de los enlaces de navegación
const links = [
  { name: "Inicio", href: "/" },
  { name: "Diplomados", href: "/diplomados" },
  { name: "Certificados", href: "/certs" },
  { name: "Contáctanos", href: "/#contacto" },
  { name: "Nuestras Redes", href: "/#footer" },
];

// Componente optimizado con memo
const NavLinks = () => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-lg text-blackblue hover:underline hover:text-primaryblue dark:hover:text-blue-100 ${
              isActive ? "underline text-primaryblue dark:text-blue-100 " : "dark:text-white"
            }`}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </React.Fragment>
  );
};

// Exportación con memo para evitar re-renders innecesarios
export default memo(NavLinks);
