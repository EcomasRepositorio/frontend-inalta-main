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
    foto: "https://scontent.ftnm1-1.fna.fbcdn.net/v/t39.30808-1/449684480_122104979006383351_3622404759841528249_n.jpg?stp=c0.161.959.959a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=WNO0OK-urlYQ7kNvgEL-T7z&_nc_ht=scontent.ftnm1-1.fna&_nc_gid=A3rXio5qBlLOWKSzgXQ311J&oh=00_AYDtyCCaSdYzccyf4K4EdMNPpLrO6NjvudbZr-kAmeT5GA&oe=66FCBA49",
  },
  {
    nombre: "Carlos López",
    ocupacion: "Diseñadora Gráfica",
    testimonio:
      "Inalta ha sido clave en mi desarrollo profesional. Los cursos son muy prácticos y los materiales están siempre actualizados.",
    foto: "https://scontent.ftnm1-1.fna.fbcdn.net/v/t39.30808-6/367971920_6888415047836477_1623539334847121072_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ibZ1ui-FpCUQ7kNvgHlsZjP&_nc_ht=scontent.ftnm1-1.fna&_nc_gid=AN6Q_6EVZfuD_KVKyxJa8yr&oh=00_AYBuTitu1yJkPU39iFHsTwz46xzWg4rzkyhx6LzwQnkMrg&oe=66FCB1C0",
  },
  {
    nombre: "Ana García",
    ocupacion: "Ingeniero de Software",
    testimonio:
      "Los conocimientos adquiridos en Inalta me han permitido liderar proyectos importantes. Los instructores son muy profesionales y accesibles.",
    foto: "https://scontent.ftnm1-1.fna.fbcdn.net/v/t39.30808-1/453608894_475048465461709_8336362213989797055_n.jpg?stp=c0.0.900.900a_dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=HYUeDWx0YjEQ7kNvgF-UK2q&_nc_ht=scontent.ftnm1-1.fna&_nc_gid=AwihynlpmjDK_wQdH5XjR3T&oh=00_AYAEgxikU31Vfuypctlax40B5UxvXtXZ-ZI8K_OKvoW7Hw&oe=66FCAF29",
  },
  {
    nombre: "Daniela Pérez",
    ocupacion: "Desarrollador Web",
    testimonio:
      "La plataforma de Inalta me ayudó a desarrollar habilidades que no encontraba en otros cursos. Recomiendo a cualquiera que quiera profundizar en el desarrollo web.",
    foto: "https://scontent.ftnm1-1.fna.fbcdn.net/v/t39.30808-1/241418214_4279385832137886_1848141268631440439_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=YvhXYGTKWUkQ7kNvgFbwRUy&_nc_ht=scontent.ftnm1-1.fna&_nc_gid=AGX2R-4ZcjhpgeQOH8oWl7E&oh=00_AYBp7YeUtrNfHfpAh_9San6ZLCC0bUgHPWA2hmSGMUc25Q&oe=66FCBA49",
  },
  {
    nombre: "Oscar Gonzalo",
    ocupacion: "Diseñador Gráfico",
    testimonio:
      "La calidad de los cursos y la atención personalizada me permitieron mejorar mi portafolio y encontrar un mejor empleo. Estoy muy agradecido con Inalta.",
    foto: "https://scontent.ftnm1-1.fna.fbcdn.net/v/t1.6435-9/46501712_10216428202004948_7014217155314974720_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XI7KX5sP9kAQ7kNvgGk_nnr&_nc_ht=scontent.ftnm1-1.fna&_nc_gid=AUCRJswJif5RizREPaOZB4Q&oh=00_AYCs5ebY7be4ZkbLvqrfod9rsVl8qzJ-_zWYzZgPfkHRYA&oe=671E4C5F",
  },
  {
    nombre: "Miriam Alvarado",
    ocupacion: "Ingeniero de Software",
    testimonio:
      "Gracias a Inalta, he mejorado mis habilidades técnicas y aprendido a liderar equipos de desarrollo con éxito. Sus métodos de enseñanza son efectivos y accesibles.",
    foto: "https://scontent.ftnm1-1.fna.fbcdn.net/v/t39.30808-6/430235253_122099630510238489_4065895693687426060_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7_YMz6iPuCEQ7kNvgFprObx&_nc_ht=scontent.ftnm1-1.fna&_nc_gid=AkaYpml9h2_gWg9dUwA9BHc&oh=00_AYCPbQJRbtuDAVpkRUPOTM2mpwL0JSbCkD7tAiJek_vc5A&oe=66FCB9A6",
  },
];


const TestimoniosCarrusel = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Título para la sección de testimonios */}
      <h2 className="text-center text-black text-3xl sm:text-4xl font-extrabold uppercase mb-8">
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
