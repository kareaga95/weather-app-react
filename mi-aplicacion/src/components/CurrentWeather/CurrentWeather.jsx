import './currentWeather.css';
import React, { useState } from "react";
export const CurrentWeather = ({ weather, sport, news }) => {


    const toDay = new Date().toISOString().split('T')[0];

    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    const [currentSportsIndex, setCurrentSportsIndex] = useState(0);

    const handleNextNews = () => {
        setCurrentNewsIndex((prevIndex) =>
            prevIndex === news.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevNews = () => {
        setCurrentNewsIndex((prevIndex) =>
            prevIndex === 0 ? news.length - 1 : prevIndex - 1
        );
    };

    const handleNextSports = () => {
        setCurrentSportsIndex((prevIndex) =>
            prevIndex === news.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevSports = () => {
        setCurrentSportsIndex((prevIndex) =>
            prevIndex === 0 ? news.length - 1 : prevIndex - 1
        );
    };

    //const toDay = "2024-12-12"
    console.log("TODAY", toDay);
    return (
        <div className="current-weather-container">
            {/* Columna izquierda (rojo) */}
            <div className="left-content">
                <h2>{weather.location.name}, {weather.location.country}</h2>
                <img src={weather.current.condition.icon} alt="icon" />
                <h1>{Math.ceil(weather.current.temp_c)}°C</h1>
                <p>{weather.current.condition.text}</p>
                <p>Humedad: {Math.ceil(weather.current.humidity)}%</p>
                <p>Viento: {Math.ceil(weather.current.wind_kph)} km/h</p>
            </div>

            {/* Columna derecha (azul) */}
            <div className="top-right-content">
            <h4>
                {sport && sport.length > 0 ? (
                    <div className="carousel-container">
                        {/* Mostrar el evento actual basado en el índice */}
                        <div className="event-info">
                            <p>{sport[currentSportsIndex].tournament}</p>
                            <h2>{sport[currentSportsIndex].match || "No especificado"}</h2>
                            {sport[currentSportsIndex].start.split(" ")[0] === toDay ? (
                                <p>
                                    ¡Hoy a las{" "}
                                    {sport[currentSportsIndex].start.split(" ")[1]}!
                                </p>
                            ) : (
                                <p>{sport[currentSportsIndex].start}</p>
                            )}
                        

                        {/* Botones de navegación */}
                        <div className="carousel-controls">
                            <button className="prevButton" onClick={handlePrevSports}>
                                &lt;
                            </button>
                            <button className="nextButton" onClick={handleNextSports}>
                                &gt;
                            </button>
                        </div>
                        </div>
                    </div>
                ) : (
                    <p>No hay eventos deportivos disponibles.</p>
                )}
            </h4>
        </div>

            <div className="bottom-right-content">
                {news && news.length > 0 ? (
                    <div className="news-carousel">
                        <div className="carousel-controls">
                            <button className="prevButton" onClick={handlePrevNews}>&lt;</button>
                            <button className="nextButton" onClick={handleNextNews}>&gt;</button>
                        </div>
                        {/* Mostrar la noticia actual */}
                        <div className="news-item">
                            <h2>{news[currentNewsIndex].title}</h2>
                            <p>{news[currentNewsIndex].description || "No especificado"}</p>
                            <a className="goToNew" href={news[currentNewsIndex].url} target="_blank"
                                rel="noopener noreferrer">Ir a la noticia</a>
                        </div>

                        {/* Botones de navegación */}
                        
                    </div>
                ) : (
                    <p>No hay noticias disponibles.</p>
                )}
            </div>
        </div>
    );
};
