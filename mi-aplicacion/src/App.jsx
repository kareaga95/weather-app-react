import React, { useState } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { HourlyWeather } from "./components/HourlyWeather/HourlyWeather";
import { DailyWeather } from "./components/DailyWeather/DailyWeather";
import { Header } from "./components/Header/Header";
import { LocationSearch } from "./components/LocationSearch/LocationSearch";
import {getNews} from "./js/apiNews/apiNews";
import {getSportsData} from "./js/apiSport/apiSport";
import functions from "./js/apiWeather/apiWeather";



const App = () => {
    const [location, setLocation] = useState(""); // Estado para la ubicación
    const [currentWeather, setCurrentWeather] = useState(null); // Estado para guardar el clima
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [dailyWeather, setDailyWeather] = useState(null);
    const [toDaySport, setTodaySport] = useState(null);
    const [toDayNews, setTodayNews] = useState(null);

    // Función que llama a la API
    const handleSearch = async () => {
        try {
            const currentWeather = await functions.getCurrentWeather(location);
            const hourlyWeatherResponse = await functions.getHourlyWeather(location);
            const dailyWeatherResponse = await functions.getDailyWeather(location);
            const toDaySport = await getSportsData(location);
            const toDayNews = await getNews();

            const hourlyWeather = hourlyWeatherResponse.forecast.forecastday[0].hour;
            const dailyWeather = dailyWeatherResponse.forecast.forecastday;

        // Agregamos el pronóstico deportivo al clima
            setTodaySport(toDaySport);
            setCurrentWeather(currentWeather);
            setHourlyWeather(hourlyWeather);
            setDailyWeather(dailyWeather);
            setTodayNews(toDayNews);
        } catch (error) {
            console.error("Error al obtener el clima:", error);
        }
    };

    return (
        <div className="app">
            <Header location={location} setLocation={setLocation} handleSearch={handleSearch}/>
            
            {currentWeather && <CurrentWeather weather={currentWeather} sport={toDaySport} news={toDayNews}/>}

            {hourlyWeather && <HourlyWeather weather={hourlyWeather} />}

            {dailyWeather && <DailyWeather weather={dailyWeather}/>}
            
        </div>
    );
};

export default App;
