import { appKey } from "../apiKey";

export const getSportsData = async (location) => {
    const url = `https://api.weatherapi.com/v1/sports.json?key=${appKey}&q=${location}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener los datos deportivos");
        }
        const data = await response.json();
        console.log("Eventos de Fútbol:", data.football);
        return data.football;
        
    } catch (error) {
        console.error("Error:", error.message);
    }
};