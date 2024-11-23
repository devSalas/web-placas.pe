// URL base de la API
const UrlBase = "https://placasdev.aap.org.pe:8090/api/";

// Función base para hacer peticiones
export const makeRequest = async (
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: any
) => {
  try {
    const response = await fetch(`${UrlBase}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
    throw error;
  }
};