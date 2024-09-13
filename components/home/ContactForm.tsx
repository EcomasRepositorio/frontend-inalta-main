import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
emailjs.init("otPoItuF57fbneCfZ");

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    setSending(true);

    const serviceID = "service_g5u0i0w";
    const templateID = "template_l1rb6uk";

    const form = formRef.current;
    if (form) {
      emailjs
        .sendForm(serviceID, templateID, form)
        .then(() => {
          setSending(false);
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 4000);
        })
        .catch((err) => {
          setSending(false);
          alert(JSON.stringify(err));
        });
    }
  };

  return (
    <section
      id="contacto"
      className="bg-gradient-to-t from-blue-400 p-8 rounded-xl"
    >
      <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-0">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-black dark:text-black text-4xl font-semibold sm:text-5xl pt-10">
            ¡Contáctanos!
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-x-8 lg:space-x-16">
          {/* Left Side - Contact Information */}
          <div className="w-full lg:w-1/3 p-6  text-white flex justify-center">
            <div className="flex flex-col items-center">
              <img
                src="/image/inaltcont.png"
                alt="Logo de Inalta"
                className="mb-4 mt-2"
                style={{ width: "300px", height: "400px" }}
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2 p-6 bg-transparent rounded-lg border-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Updated input styles */}
              <div className="flex space-x-2">
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium">
                    Nombres
                  </label>
                  <input
                    {...register("nombres", { required: true })}
                    type="text"
                    className="w-full px-3 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Nombres completos"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium">
                    N° Celular
                  </label>
                  <input
                    {...register("celular", {
                      required: true,
                      pattern: /^\d{9}$/,
                    })}
                    type="text"
                    className="w-full px-3 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="999 999 999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  {...register("correo", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                  type="email"
                  className="w-full px-3 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Ej: ejemplo@gmail.com"
                />
                {errors.correo && (
                  <span className="text-red-500 text-sm">
                    Introduce un correo electrónico válido
                  </span>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Mensaje
                </label>
                <textarea
                  {...register("mensaje")}
                  className="w-full h-32 px-3 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-500"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Alert */}
      {showAlert && (
        <div
          className="mt-4 p-4 text-green-800 bg-green-100 border-l-4 border-green-500 rounded-lg"
          role="alert"
        >
          ¡Correo enviado con éxito!
        </div>
      )}
    </section>
  );
};

export default ContactForm;
