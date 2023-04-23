

function fetchCountries(name) {
     const ENDPOINT = "https://restcountries.eu/rest/v2/name";
    return fetch(`${ENDPOINT}${name}?fields=name,flags.svg,capital,population,languages`)
        .then((data) => {
            if (!data.ok) {
			throw new Error(data.status);
		}
		return data.json()
        })      
        
}
export { fetchCountries };
