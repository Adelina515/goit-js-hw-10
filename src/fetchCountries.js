const ENDPOINT = "https://restcountries.eu/rest/v2/name";

 function fetchCountries(name) {
    return fetch(`${ENDPOINT}${name}?fields=name,flags.svg,capital,population,languages`)
        .then((data) => data.json())
        .then((data) => data[0])
        .then((name) => console.log(name))
}
export { fetchCountries };
