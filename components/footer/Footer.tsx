import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-b from-purple-900 to-blue-900 text-white py-8">
    <div className="container mx-auto px-4">
      {/* Redes Sociales */}
      <div className="mr-12 hidden lg:block">
        <p className="mb-2">Síguenos en nuestras redes sociales:</p>
        <div className="flex justify-end space-x-4">
          <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTiktok size={24} />
          </a>
          <a href="https://wa.me/51921818181" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
  
      <div className="border-t border-white/40 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logotipo y Descripción */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Image src="" alt="Binex" width={150} height={75} />
            <p className="mt-4 text-sm text-center md:text-left">Proporcionamos cursos y diplomados con aval de la EPG-UNP</p>
            <a href="#" className="mt-2 text-sm text-white hover:underline flex items-center">
              <span role="img" aria-label="Libro de Reclamaciones" className="mr-2">📋</span> 
              Libro de Reclamaciones
            </a>
          </div>
  
          {/* Nuestra Empresa */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">NUESTRA EMPRESA:</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Certificado</a></li>
              <li><a href="#" className="hover:underline">Diplomados</a></li>
              <li><a href="#" className="hover:underline">Nosotros</a></li>
              <li><a href="#" className="hover:underline">¡Inscríbete!</a></li>
            </ul>
          </div>
  
          {/* Nuestros Diplomados */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">NUESTROS DIPLOMADOS EN:</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Ingeniería Vial</a></li>
              <li><a href="#" className="hover:underline">Ingeniería Agronoma</a></li>
              <li><a href="#" className="hover:underline">Ingeniería Civil</a></li>
              <li><a href="#" className="hover:underline">Ingeniería Ambiental</a></li>
              <li><a href="#" className="hover:underline">Ingeniería de Industrias Alimentarias</a></li>
            </ul>
          </div>
  
          {/* Contacto */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">CONTACTO</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <HiOutlineMail size={20} className="mr-2" />
                <a href="mailto:capacitaciones@binex.edu.pe" className="hover:underline">falta el correo</a>
              </li>
              <li className="flex items-center">
                <HiOutlinePhone size={20} className="mr-2" />
                <a href="tel:+51984040264" className="hover:underline">+51 999 999 999</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      {/* Derechos Reservados */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© 2024 Copyright: inalta</p>
        <span style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
          Texto Invisible
        </span>
      </div>
    </div>
  </footer>
  );
}
