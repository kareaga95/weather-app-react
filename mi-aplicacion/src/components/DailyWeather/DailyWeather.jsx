import './dailyWeather.css';
import React, { useState } from "react";

export const DailyWeather = ({ weather }) => {
    const [selected, setSelected] = useState(null);

    const handleDivClick = (index, day) => {
        setSelected(index);
        console.log("Selected Day: ", index, day);
    };

    return (
        <div className="daily-weather">
            <h3>Pronóstico a 7 Días</h3>
            {weather.map((day, index) => (
                <div
                    key={index}
                    className={`day-card-${index} ${selected === index ? "selected" : ""}`}
                    onClick={() => handleDivClick(index, day)} // Llamar a la función al hacer clic
                >
                    <p>{day.date}</p>
                    <img src={day.day.condition.icon} alt="icon" />
                    <p>{day.day.avgtemp_c}°C</p>
                    <p>{day.day.condition.text}</p>
                </div>
            ))}
        </div>
    );
};