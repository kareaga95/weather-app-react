

export const LocationSearch = ({location, setLocation, handleSearch}) =>{
    return(
        <div className = "location-search">
            <input type = "text" 
            placeholder = "Busca tu localidad..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <button className="searchButton" onClick={handleSearch}>Buscar</button>
        </div>
    )
}