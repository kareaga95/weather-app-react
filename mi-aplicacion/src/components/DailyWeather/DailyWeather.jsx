import './dailyWeather.css';
import React, { useState } from "react";

export const DailyWeather = ({ weather }) => {
    const [selected, setSelected] = useState(null);

    const handleDivClick = (index) => {
        setSelected(index); // Guarda el índice del div clicado
        console.log("Selected Day: ", index);
    };

    return (
        <div className="daily-weather">
            <h3>Pronóstico a 7 Días</h3>
            {weather.map((day, index) => (
                <div
                    key={index}
                    className={`day-card-${index} ${selected === index ? "selected" : ""}`}
                    onClick={() => handleDivClick(index)} // Llamar a la función al hacer clic
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
