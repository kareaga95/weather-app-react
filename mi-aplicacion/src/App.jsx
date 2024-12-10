import React, { useState } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { HourlyWeather } from "./components/HourlyWeather/HourlyWeather";
import { DailyWeather } from "./components/DailyWeather/DailyWeather";
import { LocationSearch } from "./components/LocationSearch/LocationSearch";
import functions from "./js/api/api";
import { Header } from "./components/Header/Header";


const App = () => {
    const [location, setLocation] = useState(""); // Estado para la ubicación
    const [currentWeather, setCurrentWeather] = useState(null); // Estado para guardar el clima
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [dailyWeather, setDailyWeather] = useState(null);

    // Función que llama a la API
    const handleSearch = async () => {
        try {
            const currentWeather = await functions.getCurrentWeather(location);
            const hourlyWeatherResponse = await functions.getHourlyWeather(location);
            const dailyWeatherResponse = await functions.getDailyWeather(location);

            const hourlyWeather = hourlyWeatherResponse.forecast.forecastday[0].hour;
            const dailyWeather = dailyWeatherResponse.forecast.forecastday;

            setCurrentWeather(currentWeather); // Guarda los datos en el estado
            setHourlyWeather(hourlyWeather);
            setDailyWeather(dailyWeather); // Guarda los datos en el estado
        } catch (error) {
            console.error("Error al obtener el clima:", error);
        }
    };

    return (
        <div className="app">
            <Header />
            {/* Busqueda */}
            <LocationSearch location={location} setLocation={setLocation} handleSearch={handleSearch} />

            {/* Datos ciudad buscada */}
            {currentWeather && <CurrentWeather weather={currentWeather} />}

            {hourlyWeather && <HourlyWeather weather={hourlyWeather} />}

            {dailyWeather && <DailyWeather weather={dailyWeather} />}
        </div>
    );
};

export default App;
