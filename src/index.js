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
    const inputValue = ev.currentTarget.value.trim();
    fetchCountries(inputValue);
    if (inputValue === 0) {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    } else if ( result.length > 10) {
        Notify.warning("Too many matches found. Please enter a more specific name.");
    }else if ( result.length < 10 && result > 2) {
        return refs.countryList.insertAdjacentHTML("beforeend", ) = '';
             refs.countryInfo.insertAdjacentHTML = '';
                
    }else if ( result.length === 1) {
        return 
    }

}
function createCountryInfo(country) {
     
 } 

/*const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>"); */

