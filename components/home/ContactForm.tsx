import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Button } from "@nextui-org/react";
emailjs.init('UgIciLgmKy6Akg6-Z');

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    setSending(true);

    const serviceID = 'service_83j66zr';
    const templateID = 'template_q3775rh';

    const form = formRef.current;
    if (form) {
      emailjs.sendForm(serviceID, templateID, form)
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
    <section id="contacto" className="bg-gradient-to-t from-blue-400 p-8 rounded-xl">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side - Contact Information */}
        <div className="w-full md:w-1/2 p-6 bg-transparent text-white rounded-lg">
F        <div className="flex flex-col items-center">
            <img
              src="/image/inaltcont.png"
              alt="Logo de Inalta"
              className="mb-4"
              style={{ width: '300px', height: 'auto' }} // Establece un ancho fijo y altura automática para mantener la proporción
            />
            <h2 className="text-3xl font-bold"></h2>
            <p className="mt-2 text-center">
              En Inalta, nos especializamos en potenciar las habilidades profesionales de nuestros estudiantes a
              través de una oferta educativa diversificada. Con programas enfocados en áreas como la tecnología,
              el liderazgo y la gestión, te brindamos las herramientas necesarias para avanzar en tu carrera y
              alcanzar tus metas.            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold"></h3>
              <div className="flex justify-around mt-2">
                <a href="https://facebook.com" className="text-white hover:text-pink-700">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://tiktok.com" className="text-white hover:text-pink-700">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://instagram.com" className="text-white hover:text-pink-700">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://whatsapp.com" className="text-white hover:text-pink-700">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 p-6">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="flex space-x-2">
              <div className="flex-1">
                <label className="block text-white font-medium">Nombres</label>
                <input
                  {...register('nombres', { required: true })}
                  type="text"
                  className="w-full px-3 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Nombres completos"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white font-medium">N° Celular</label>
                <input
                  {...register('celular', { required: true, pattern: /^\d{9}$/ })}
                  type="text"
                  className="w-full px-3 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-400"
                  placeholder="999 999 999"
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-medium">Email</label>
              <input
                {...register('correo', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                type="email"
                className="w-full px-3 py-2 text-gray-800 bg-white border-2 border-blue-600 rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Ej: ejemplo@gmail.com"
              />
              {errors.correo && <span className="text-red-500 text-sm">Introduce un correo electrónico válido</span>}
            </div>
            <div>
              <label className="block text-white font-medium">Asunto</label>
              <input
                {...register('asunto', { required: true })}
                type="text"
                className="w-full px-3 py-2 text-gray-800 bg-white border-2 border-sky-700 rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Asunto"
              />
            </div>
            <div>
              <label className="block text-white font-medium">Mensaje</label>
              <textarea
                {...register('mensaje')}
                className="w-full h-32 px-3 py-2 text-gray-800 bg-white border-2 border-blue-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-500"
            >
              {sending ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>
        </div>
      </div>

      {/* Success Alert */}
      {showAlert && (
        <div className="mt-4 p-4 text-green-800 bg-green-100 border-l-4 border-green-500 rounded-lg" role="alert">
          ¡Correo enviado con éxito!
        </div>
      )}
    </section>
  );
};

export default ContactForm;
