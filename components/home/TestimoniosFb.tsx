import React from "react";

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
  // Agrega más testimonios aquí
];

const TestimoniosCarrusel = () => {
  return (
    <div className="bg-white dark:bg-[#27272A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="carousel w-[90%] md:w-[1000px] mx-auto">
          {testimonios.map((testimonio, index) => (
            <div
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
              key={index}
            >
              <div className="flex flex-col items-center p-8 bg-white dark:bg-[#27272A] rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
                <div className="flex-shrink-0 mb-6">
                  <img
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 mx-auto"
                  />
                </div>
                <div className="text-center">
                  <blockquote className="text-lg text-gray-800 dark:text-white">
                    <p className="mb-4">"{testimonio.testimonio}"</p>
                    <footer className="mt-4 text-gray-600 dark:text-gray-300">
                      <cite className="block font-semibold">
                        {testimonio.nombre}
                      </cite>
                      <p>{testimonio.ocupacion}</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? testimonios.length : index}`}
                  className="btn btn-circle bg-transparent dark:bg-transparent border border-transparent text-black opacity-70 hover:opacity-100 transition-opacity duration-300 sm:opacity-50 sm:hover:opacity-70"
                >
                  ❮
                </a>
                <a
                  href={`#slide${((index + 1) % testimonios.length) + 1}`}
                  className="btn btn-circle bg-transparent dark:bg-transparent border border-transparent text-black opacity-70 hover:opacity-100 transition-opacity duration-300 sm:opacity-50 sm:hover:opacity-70"
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
