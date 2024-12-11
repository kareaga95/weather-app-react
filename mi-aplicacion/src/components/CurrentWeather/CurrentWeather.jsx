import './currentWeather.css';

export const CurrentWeather = ({ weather, sport }) => {

    const toDay = new Date().toISOString().split('T')[0];
    //const toDay = "2024-12-12"
console.log("TODAY",toDay);
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
                        sport.map((event, index) => {
                            const eventDate = event.start.split(" ")[0]; // Extrae la fecha del evento
                            const eventTime = event.start.split(" ")[1]; // Extrae la hora

                            return (
                                <div key={index} className="event-info">
                                    <p>{event.tournament}</p>
                                    <h2>{event.match || "No especificado"}</h2>
                                    {eventDate === toDay ? (
                                        <p>¡Hoy a las {eventTime}!</p>
                                    ) : (
                                        <p>{event.start}</p>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <p>No hay eventos deportivos disponibles.</p>
                    )}
                </h4>
            </div>

            <div className="bottom-right-content">
                <h2>Otra Información</h2>
                <p>Contenido adicional aquí</p>
            </div>
        </div>
    );
};
