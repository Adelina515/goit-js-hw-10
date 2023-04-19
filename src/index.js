import './css/styles.css';
import { fetchCountries } from "./fetchCountries.js";
import debounce from "lodash.debounce";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const refs = {
 input: document.getElementById('search-box'),
 countryList: document.querySelector('.country-list'),
 countryInfo: document.querySelector('.country-info'),
}


const result = fetchCountries();

refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput(ev) {
    const inputValue = refsInput.value.trim();
    if (inputValue = '') {
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return;
    } else if ( result > 10) {
        Notify.warning("Too many matches found. Please enter a more specific name.");
    }else if ( result < 10 && result > 2) {
        return 
    }

}

