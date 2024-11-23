import { makeRequest } from "./base";

// Función para crear un contacto
export const CreateContact = async (contactData: { names: string; email: string; title: string; message: string }) => {
    const data = await makeRequest("contacts", "POST", contactData);
    return data;

};

// Función para obtener todos los contactos (como ejemplo de otro tipo de petición)
export const GetContacts = async () => {
    try {
        const data = await makeRequest("contacts", "GET");
        return data;
    } catch (error) {
        console.error("No se pudieron obtener los contactos:", error);
        throw error;
    }
};