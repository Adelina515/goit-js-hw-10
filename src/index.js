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
    const inputValue = refs.input.value.trim();
    fetchCountries(inputValue).then(({ name }) => {
        console.log(name);
        if (name.length === 0) throw new Error('No data!')
        
        name.reduce((acc) => {

        })

    }).catch(onError);
    if (inputValue === 0) {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    } else if ( result.length > 10) {
        Notify.warning("Too many matches found. Please enter a more specific name.");
    }else if ( result.length < 10 && result > 2) {
        return refs.countryList.insertAdjacentHTML("beforeend", ) = '';
             refs.countryInfo.insertAdjacentHTML = '';
      /*Якщо бекенд повернув від 2-х до 10-и країн, під тестовим полем відображається 
      список знайдених країн.
       Кожен елемент списку складається з прапора та назви країни. */          
    }else if ( result.length === 1) {
        return 
        /*Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається 
        розмітка картки з даними про країну: прапор, назва, столиця, населення і мови. */
    }

}
function onError(err) {
    console.error(err)
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

