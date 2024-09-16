import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonios = [
  {
    nombre: "Juan Pérez",
    ocupacion: "Desarrollador Web",
    testimonio:
      "He tenido una experiencia increíble con Inalta. Los cursos son muy completos y los profesores altamente capacitados. Gracias a ellos, he podido avanzar significativamente en mi carrera.",
    foto: "https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg",
  },
  {
    nombre: "Ana García",
    ocupacion: "Diseñadora Gráfica",
    testimonio:
      "Inalta ha sido clave en mi desarrollo profesional. Los cursos son muy prácticos y los materiales están siempre actualizados.",
    foto: "https://media.istockphoto.com/id/1335941248/es/foto/foto-de-un-joven-guapo-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=UK8BGVVCSmHen0sJAgxoZ6sBLrs0ld4TuCwczZZ89AY=",
  },
  {
    nombre: "Carlos López",
    ocupacion: "Ingeniero de Software",
    testimonio:
      "Los conocimientos adquiridos en Inalta me han permitido liderar proyectos importantes. Los instructores son muy profesionales y accesibles.",
    foto: "https://st4.depositphotos.com/6903990/27898/i/450/depositphotos_278981062-stock-photo-beautiful-young-woman-clean-fresh.jpg",
  },
  {
    nombre: "alvaroz",
    ocupacion: "Desarrollador Web",
    testimonio:
      "He tenido una experiencia increíble con Inalta. Los cursos son muy completos y los profesores altamente capacitados. Gracias a ellos, he podido avanzar significativamente en mi carrera.",
    foto: "https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg",
  },
  {
    nombre: "oscar",
    ocupacion: "Diseñadora Gráfica",
    testimonio:
      "Inalta ha sido clave en mi desarrollo profesional. Los cursos son muy prácticos y los materiales están siempre actualizados.",
    foto: "https://media.istockphoto.com/id/1335941248/es/foto/foto-de-un-joven-guapo-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=UK8BGVVCSmHen0sJAgxoZ6sBLrs0ld4TuCwczZZ89AY=",
  },
  {
    nombre: "miriam",
    ocupacion: "Ingeniero de Software",
    testimonio:
      "Los conocimientos adquiridos en Inalta me han permitido liderar proyectos importantes. Los instructores son muy profesionales y accesibles.",
    foto: "https://st4.depositphotos.com/6903990/27898/i/450/depositphotos_278981062-stock-photo-beautiful-young-woman-clean-fresh.jpg",
  },
];

const TestimoniosCarrusel = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Título para la sección de testimonios */}
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
        Testimonios
      </h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonios.map((testimonio, index) => (
            <SwiperSlide key={index}>
              {/* Contenedor optimizado con fondo blanco y letras en negro */}
              <div className="flex h-[500px] justify-center flex-col items-center p-4 bg-white rounded-lg shadow-lg border border-gray-200">
                <img
                  src={testimonio.foto}
                  alt={testimonio.nombre}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mb-6"
                />
                <blockquote className="flex flex-col justify-between flex-grow text-center">
                  <p className="text-lg text-gray-900 mb-4">
                    "{testimonio.testimonio}"
                  </p>
                  <footer className="text-gray-600">
                    <cite className="block font-semibold">
                      {testimonio.nombre}
                    </cite>
                    <p>{testimonio.ocupacion}</p>
                  </footer>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimoniosCarrusel;
