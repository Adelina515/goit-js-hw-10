 const BASE_URL = "https://restcountries.com/v3.1";
export function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}?fields=name,flags.svg,capital,population,languages`)
        .then((response) => {
            if (!response.ok) {
			throw new Error(response.status);
		}
		return response.json()
        })      
        
}
 
