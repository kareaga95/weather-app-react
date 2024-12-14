import { appKey } from "../apiKey.jsx";
const url = "http://api.weatherapi.com/v1";

 const getCurrentWeather = async (location) => {
    
    const response = await fetch(`${url}/current.json?key=${appKey}&q=${location}`);
    if (!response.ok) throw new Error("Error al obtener el clima actual");
    
    return await response.json();
};

// Pronóstico por horas
 const getHourlyWeather = async (location) => {
    const response = await fetch(`${url}/forecast.json?key=${appKey}&q=${location}&hours=24`);
    if (!response.ok) throw new Error("Error al obtener pronóstico por horas");
    return await response.json();
};

// Pronóstico a 7 días
 const getDailyWeather= async (location) => {
    const response = await fetch(`${url}/forecast.json?key=${appKey}&q=${location}&days=7`);
    if (!response.ok) throw new Error("Error al obtener pronóstico de 7 días");
    return await response.json();
};

export const functions = {
    getCurrentWeather,
    getHourlyWeather,
    getDailyWeather
}

export default functions;