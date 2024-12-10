import './hourlyWeather.css';

export const HourlyWeather = ({ weather }) => {
    return (
        <div className="hourly-weather">
            <h3>Pronóstico por Horas</h3>
            <div className="hours">
                {weather.map((hour, index) => (
                    <div key={index} className="hour-card">
                        <p>{hour.time.split(" ")[1]}</p>
                        <img src={hour.condition.icon} alt="icon" />
                        <p>{Math.ceil(hour.temp_c)}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
