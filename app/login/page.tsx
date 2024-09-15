"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import Image from "next/image";

const Login: React.FC = () => {
  const [resErrors, setResErrors] = useState<{ message: string } | null>(null);
  const [form, setForm] = useState({ email: "", password: "" });
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        form
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "student";
      }
    } catch (error) {
      setResErrors({ message: "Credenciales incorrectas" });
      setTimeout(() => setResErrors(null), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-400">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Sección de Sign In */}
        <div className="w-full md:w-1/2 p-8">
          {/* Aquí agregamos el logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/image/loginalblanck.png"  // Cambia este valor por la ruta correcta de tu imagen de logo
              alt="logo"
              width={400}   // Ajusta el tamaño de la imagen según necesites
              height={400}
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">Iniciar sesión</h2>
          
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              value={form.email}
              onChange={(e) => handleFormData(e, "email")}
            />
            <div className="relative">
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                value={form.password}
                onChange={(e) => handleFormData(e, "password")}
              />
              <button
                className="absolute right-0 top-0 mt-2 mr-4 focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
              </button>
            </div>

            {resErrors && <p className="text-blue-500 text-center">{resErrors.message}</p>}
            <Button
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 rounded-full transition duration"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </div>

        {/* Sección de Overlay (Sign Up) */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-500 to-blue-400 items-center justify-center text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">En Inalta, transformamos tu pasión en habilidades.</h1>
            <p className="mb-6">Descubre nuestros programas educativos y conviértete en un líder en tu campo. ¡El conocimiento es tu mejor inversión</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
