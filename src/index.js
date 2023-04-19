import './css/styles.css';
import { fetchCountries } from "./fetchCountries.js";
const DEBOUNCE_DELAY = 300;

const result = fetchCountries();
console.log(result);
const refsInput = document.getElementById('search-box');

refsInput.addEventListener('input', _.debounce(handleInput, 300));

function handleInput() {
    
}

/*_ . debounce (calculateLayout ,  150 ) */