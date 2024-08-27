import React from "react";

const testimonios = [
  {
    nombre: "Juan Pérez",
    ocupacion: "Desarrollador Web",
    testimonio: "He tenido una experiencia increíble con Inalta. Los cursos son muy completos y los profesores altamente capacitados. Gracias a ellos, he podido avanzar significativamente en mi carrera.",
    foto: "https://via.placeholder.com/150"
  },
  {
    nombre: "Ana García",
    ocupacion: "Diseñadora Gráfica",
    testimonio: "Inalta ha sido clave en mi desarrollo profesional. Los cursos son muy prácticos y los materiales están siempre actualizados.",
    foto: "https://via.placeholder.com/150"
  },
  {
    nombre: "Carlos López",
    ocupacion: "Ingeniero de Software",
    testimonio: "Los conocimientos adquiridos en Inalta me han permitido liderar proyectos importantes. Los instructores son muy profesionales y accesibles.",
    foto: "https://via.placeholder.com/150"
  },
  // Agrega más testimonios aquí
];

const TestimoniosCarrusel = () => {
  return (
    <div className="bg-custom-gray dark:bg-gray-400 py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="carousel w-[80%] md:w-[90%] lg:w-[1000px] mx-auto">
          {testimonios.map((testimonio, index) => (
            <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
              <div className="flex items-center justify-center gap-8 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
                <div className="flex-shrink-0">
                  <img
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-800 dark:text-white text-center">
                    <p>"{testimonio.testimonio}"</p>
                    <footer className="mt-4 text-gray-600 dark:text-gray-300">
                      <cite className="font-semibold">{testimonio.nombre}</cite>
                      <p>{testimonio.ocupacion}</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? testimonios.length : index}`}
                  className="btn btn-circle bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  ❮
                </a>
                <a
                  href={`#slide${(index + 1) % testimonios.length + 1}`}
                  className="btn btn-circle bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimoniosCarrusel;
