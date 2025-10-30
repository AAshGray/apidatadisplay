export default function Country({...props}) {
    function handleButtonClick() {
        if (!props.selectedCountry || props.selectedCountry === "Random Country") {
            props.selectCountry(""); // triggers random selection
        } else {
            props.selectCountry(props.selectedCountry);
        }
    }

    function handleChange(event) {
        props.setSelectedCountry(event.target.value);
    }
    
    return (
        <div>
            {props.error ? <p>{props.error}</p> : null}
            
            <select
                value={props.selectedCountry || "Random Country"}
                onChange={handleChange}
                >
                <option value="Random Country">Random Country</option>
                {(props.countries || []).map(function(countryName) {
                    return (
                    <option key={countryName} value={countryName}>
                        {countryName}
                    </option>
                    );
                })}
            </select>
                <button
                  onClick={handleButtonClick}
                >
                  Select Country
                </button>
            
            
            {props.country && (
            <div>
                <h2>{props.country.name.common}</h2>
                {props.country.capital && <p>Capital: {props.country.capital[0]}</p>}
                {props.country.region && <p>Region: {props.country.region}</p>}
                {props.country.population && <p>Population: {props.country.population.toLocaleString()}</p>}
                {props.country.flags && (
                <img
                    src={props.country.flags.svg}
                    alt={props.country.name.common + " flag"}
                    style={{ width: "150px" }}
                />
                )}
            </div>
            )}

            {/* <div>
            <h3>List of Countries:</h3>
            {props.countries && props.countries.length > 0 ? (
                <ul>
                {props.countries.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
                </ul>
            ) : (
                <p>No countries in the list</p>
            )}
            </div> */}
        </div>
    )
}