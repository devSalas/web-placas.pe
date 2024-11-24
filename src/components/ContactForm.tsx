import React, { useState } from "react";
import { CreateContact } from "src/api/Contact";

export default function ContactForm() {
    // Definir el estado para los valores del formulario
    const [formData, setFormData] = useState({
        names: "",
        email: "",
        title: "",
        message: "",
    });

    const [err, setErr] = useState(""); // Estado para los errores
    const [success, setSuccess] = useState(""); // Estado para el mensaje de éxito

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función de validación de los campos del formulario
    const validateForm = () => {
        if (!formData.names || !formData.email || !formData.title || !formData.message) {
            setErr("Todos los campos son obligatorios.");
            return false;
        }
        setErr(""); // Limpiar errores si todo es válido
        return true;
    };

    // Manejar envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar los campos antes de enviar
        if (!validateForm()) return;

        try {
            console.log(formData);
            const res =await fetch("https://placasdev.aap.org.pe:8090/api/contact",{method:"POST",headers:{"Content-Type":"aplication/json"}, body:JSON.stringify({ 
                names: "nombre de prueba",
                email: "email@gmail.com",
                title: "titulo de preuba",
                message: "message"
              })})
            
            const json= await res.json();
              console.log(json)

            // Verificar el código de estado de la respuesta
            if (json.httpStatusCode === 200 || json.httpStatusCode === 201) {
                setSuccess("Mensaje enviado con éxito.");
                setErr(""); // Limpiar el mensaje de error si el envío fue exitoso
            } else {
                setErr("Hubo un error al enviar el mensaje.");
            }
        } catch (error) {
            console.log("Error al enviar el formulario:", error);
            setErr("Hubo un error al procesar tu solicitud. Intenta de nuevo.");
        }
    };



    return (
       <div>
         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[5px] w-full px-[20px] max-w-[600px] m-auto"
        >
            {/* Mensajes de error y éxito */}
            {err && <div className="text-red-500">{err}</div>}
            {success && <div className="text-green-500">{success}</div>}

            <div className="flex flex-col gap-[5px]">
                <label htmlFor="name">Nombre y Apellidos:</label>
                <input
                    type="text"
                    id="name"
                    name="names"
                    value={formData.names}
                    onChange={handleChange}
                    className="h-[45px] py-[10px] px-[20px] rounded-[10px] border-[1px] border-black lg:h-[50px]"
                />
            </div>
            <div className="flex flex-col gap-[5px]">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[45px] py-[10px] px-[20px] rounded-[10px] border-[1px] border-black lg:h-[50px]"
                />
            </div>
            <div className="flex flex-col gap-[5px]">
                <label htmlFor="title">Título del mensaje:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="h-[45px] py-[10px] px-[20px] rounded-[10px] border-[1px] border-black lg:h-[50px]"
                />
            </div>
            <div className="flex flex-col gap-[5px]">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-[90px] rounded-[10px] border-[1px] border-black resize-none p-5"
                />
            </div>
            <div className="flex justify-center items-center pt-[20px] lg:justify-start">
                <button
                    type="submit"
                    className="py-[10px] px-[30px] bg-black text-white rounded-lg lg:px-[50px]"
                >
                    Enviar
                </button>
            </div>
        </form>
        <button onClick={a}>enviar</button>
        <br />
        <button onClick={b}>traer datos</button>
       </div>
    );
}
