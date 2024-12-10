import './currentWeather.css';

export const CurrentWeather = ({ weather }) => {
    return (
        
        <div className="current-weather">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <img src={weather.current.condition.icon} alt="icon" />
            <h1>{Math.ceil(weather.current.temp_c)}°C</h1>
            <p>{weather.current.condition.text}</p>
            <p>Humedad: {weather.current.humidity}% | Viento: {weather.current.wind_kph} km/h</p>
        </div>
    );
};