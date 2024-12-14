import { appKeyNews } from "../apiKey.jsx";
const url = "http://api.mediastack.com/v1/news";

// Función para obtener noticias
export const getNews = async (country = "es", language = "es") => {
  try {
    const response = await fetch(
      `${url}?access_key=${appKeyNews}&countries=${country}&languages=${language}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("NEWS ", data)
    return data.data; // Retorna solo la lista de noticias
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    return [];
  }
};
