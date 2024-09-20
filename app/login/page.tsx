"use client";
import React, { useState } from "react";
import axios from "axios";

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
        window.location.href = "/student"; // Added leading slash for route consistency
      }
    } catch (error) {
      setResErrors({ message: "Credenciales incorrectas" });
      setTimeout(() => setResErrors(null), 3000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/fondE.jpeg')" // Asegúrate de que la ruta de la imagen es correcta
      }}
    >
      <form
        className="form flex flex-col gap-3 bg-gradient-to-t from-black/50 to-blue-700/10 backdrop-blur-md p-6 w-[450px] rounded-2xl shadow-lg transition duration-300 hover:bg-black/15" // Reducido a 10% de opacidad, aumenta en hover a 15%
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex justify-center mb-2">
          <img
            src="/image/inaltcont.png" // Asegúrate de que la ruta del logo es correcta
            alt="Logo"
            className="w-32 h-auto"
          />
        </div>
  
        <div className="flex flex-col mb-2">
          <label className="font-semibold text-white">Correo electrónico</label>
          <div className="inputForm flex items-center bg-white/50 border-2 border-gray-300 rounded-full pl-3 transition duration-200 focus-within:border-blue-500">
            <input
              type="email"
              placeholder="Email"
              className="input flex-1 bg-transparent border-none focus:outline-none ml-3 text-white"
              value={form.email}
              onChange={(e) => handleFormData(e, "email")}
              required
            />
          </div>
        </div>
  
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-white">Contraseña</label>
          <div className="inputForm flex items-center bg-white/50 border-2 border-gray-300 rounded-full pl-3 transition duration-200 focus-within:border-blue-500">
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Contraseña"
              className="input flex-1 bg-transparent border-none focus:outline-none ml-3 text-white"
              value={form.password}
              onChange={(e) => handleFormData(e, "password")}
              required
            />
          </div>
        </div>
  
        {resErrors && (
          <p className="text-red-500 text-center">{resErrors.message}</p>
        )}
  
        <button className="button-submit text-white w-full py-3 rounded-full bg-transparent border-2 border-white transition-all duration-300 ease-in-out hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
