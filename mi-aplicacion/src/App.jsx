import React, { useState } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { HourlyWeather } from "./components/HourlyWeather/HourlyWeather";
import { DailyWeather } from "./components/DailyWeather/DailyWeather";
import { LocationSearch } from "./components/LocationSearch/LocationSearch";
import {getSportsData} from "./js/apiSport/apiSport";
import functions from "./js/apiWeather/apiWeather";
import { Header } from "./components/Header/Header";


const App = () => {
    const [location, setLocation] = useState(""); // Estado para la ubicación
    const [currentWeather, setCurrentWeather] = useState(null); // Estado para guardar el clima
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [dailyWeather, setDailyWeather] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null); // Estado para guardar el día seleccionado
    const [toDaySport, setTodaySport] = useState(null);

    // Función que llama a la API
    const handleSearch = async () => {
        try {
            const currentWeather = await functions.getCurrentWeather(location);
            const hourlyWeatherResponse = await functions.getHourlyWeather(location);
            const dailyWeatherResponse = await functions.getDailyWeather(location);
            
            const toDaySport = await getSportsData(location);
            console.log("TODAYSPORT: ", toDaySport);

            const hourlyWeather = hourlyWeatherResponse.forecast.forecastday[0].hour;
            const dailyWeather = dailyWeatherResponse.forecast.forecastday;

        // Agregamos el pronóstico deportivo al clima
            setTodaySport(toDaySport);
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
            {currentWeather && <CurrentWeather weather={currentWeather} sport={toDaySport}/>}

            {hourlyWeather && <HourlyWeather weather={hourlyWeather} />}

            {dailyWeather && <DailyWeather weather={dailyWeather} onDaySelect={setSelectedDay} />}
        </div>
    );
};

export default App;
