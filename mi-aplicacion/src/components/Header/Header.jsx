import './header.css';
import weatherLogo from "../../images/weatherLogo.png"
export const Header = ({ location, setLocation, handleSearch }) => {
    return (
        <header className="location-search">
            <div className="logo-title-container">
                <img src={weatherLogo} alt="logo" className="logo" />
                <h1>MyWeather</h1>
            </div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Busca tu localidad..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button className="searchButton" onClick={handleSearch}>
                    Buscar
                </button>
            </div>
        </header>


    )
}