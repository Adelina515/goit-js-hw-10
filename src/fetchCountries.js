const ENDPOINT = "https://restcountries.eu/rest/v2/name";

 function fetchCountries(name) {
    return fetch(`${ENDPOINT}${name}?fields=name,flags,capital,population,languages`)
    .then((data) => data.json())
    .then((data) => console.log(data))
}
export { fetchCountries };
