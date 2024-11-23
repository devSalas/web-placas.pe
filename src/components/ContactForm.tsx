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
    const [err,setErr] = useState("")

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manejar envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            const json = await CreateContact(formData);
            console.log(json)

        } catch (error) {
            console.log("entro el error",error)
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[5px] w-full px-[20px] max-w-[600px] m-auto"
        >
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
    );
}
