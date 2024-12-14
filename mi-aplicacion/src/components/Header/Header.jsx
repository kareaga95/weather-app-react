import './header.css';
export const Header = ({ location, setLocation, handleSearch }) => {
    return (
        <header className="location-search">
            <h1>MyWeather.com</h1>
            <input type="text"
                placeholder="Busca tu localidad..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button className="searchButton" onClick={handleSearch}>Buscar</button>
        </header >
    )
}