import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cursos = [
  {
    imageUrl: '/image/ingcivil.jpg',
    title: 'Ingeniería Civil',
    link: '/diplomados'
  },
  {
    imageUrl: '/image/ingambiental.jpg',
    title: 'Ingeniería Ambiental',
    link: '/diplomados'
  },
  {
    imageUrl: '/image/ingagronomo.jpg',
    title: 'Ingeniería Agronómica',
    link: '/diplomados'
  },
  {
    imageUrl: '/image/ssoma.jpg',
    title: 'SSOMA',
    link: '/diplomados'
  },
  {
    imageUrl: '/image/ingvial.jpg',
    title: 'Ingeniería Vial',
    link: '/diplomados'
  },
  {
    imageUrl: '/image/segali.jpg',
    title: 'Gestión de la calidad e inocuidad alimentaria',
    link: '/diplomados'
  },
];

const ExpandableCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-traslate">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cursos.map((curso, index) => (
          <Link href={curso.link} key={index} passHref>
            <div className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
                <Image
                  src={curso.imageUrl}
                  alt={curso.title}
                  width={300}
                  height={500} // Ajustar la altura a 500px
                  className="object-cover rounded-lg h-[400px]" // Definir la altura de la imagen
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-90 text-white text-center py-4 opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-bold">{curso.title}</h3> {/* Texto más grande */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpandableCard;
