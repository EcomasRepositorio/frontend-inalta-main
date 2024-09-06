import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
//<div class="justify-between px-2 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex bg-trans ">

{/** </div>
<div class="items-center inline-flex justify-between py-3 md:py- lg:py- md:block">
  <a href="/">
  <img alt="binex_logo" fetchpriority="high" height="800" decoding="async" data-nimg="1" class="w-36 h-10" style="color:transparent"srcset="/_next/image?url=%2Fimg%2Flogo%2Flogobinex.png&w=828&q=75 1x, /_next/image?url=%2Fimg%2Flogo%2Flogobinex.png&w=1920&q=75 2x"src="/_next/image?url=%2Fimg%2Flogo%2Flogobinex.png&w=1920&q=75">
  </img>
  <div class="md:hidden ml-44 ">
    <button class="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
      <img alt="logo"fetchpriority="high"width="30"height="30" decoding="async" data-nimg="1" class="focus:border-none active:border-none" style="color:transparent" srcset="/_next/image?url=%2Ficons%2Fmenu.png&w=32&q=75 1x, /_next/image?url=%2Ficons%2Fmenu.png&w=64&q=75 2x" src="/_next/image?url=%2Ficons%2Fmenu.png&w=64&q=75">
        </img>
    </button>
  </div>
  </a> 
</div></div>
*/}
<Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse pl-0 ml-0">
<img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
</Link>
const links = [
  {
    name: "Inicio",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Diplomados",
    href: "/diplomados",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Certificados",
    href: "/certs",
    icon: UserGroupIcon,
  },
  {
    name: "Contáctanos",
    href: "/#contacto",
    icon: UserGroupIcon,
  },
  {
    name: "Nuestras Redes",
    href: "/#footer",
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {

  const pathname = usePathname();

  return (
    <>
    
      {links.map((link) => {
                const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-lg text-blackblue  hover:underline hover:text-primaryblue dark:hover:text-blue-100 ${
              isActive ? "underline text-primaryblue dark:text-blue-100 " : "dark:text-white"
            }`}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
