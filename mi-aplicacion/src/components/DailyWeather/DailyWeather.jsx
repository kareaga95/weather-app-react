import './dailyWeather.css';
import React, { useState } from "react";

export const DailyWeather = ({ weather }) => {
    console.log("DIA: " + weather[0])

    return (
        <div className="daily-weather">
            <h3>Pronóstico a 7 Días</h3>
            {weather.map((day, index) => (
                <div
                    key={index}
                    className={`day-card-${index}`}
                >
                    <p>
                        {new Date(day.date)
                            .toLocaleDateString('es-ES', { weekday: 'long' })
                            .charAt(0)
                            .toUpperCase() +
                            new Date(day.date)
                                .toLocaleDateString('es-ES', { weekday: 'long' })
                                .slice(1)}
                    </p>
                    <img src={day.day.condition.icon} alt="icon" />
                    <p>{day.day.avgtemp_c}°C</p>
                    <p>{day.date}</p>
                </div>
            ))}
        </div>
    );
};