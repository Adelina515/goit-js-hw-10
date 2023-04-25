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



refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput(ev) {
    const inputValue = refs.input.value.trim();
   const result = fetchCountries(inputValue).then(({ names }) => {
        console.log(names);
        if (result.length === 0) throw new Error('No data!')
    }).catch(onError);
    if (inputValue === 0) {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    } else if ( result.length > 10) {
        Notify.warning("Too many matches found. Please enter a more specific name.");
    }else if ( result.length < 10 && result > 2) {
        return refs.countryList.insertAdjacentHTML("beforeend", createMarkupList({name, flags}));
        
      /*Якщо бекенд повернув від 2-х до 10-и країн, під тестовим полем відображається 
      список знайдених країн.
       Кожен елемент списку складається з прапора та назви країни. */          
    }else if ( result.length === 1) {
        return refs.countryInfo.insertAdjacentHTML("beforeend", createMarkup({name, flags, capital, population, languages}));
        /*Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається 
        розмітка картки з даними про країну: прапор, назва, столиця, населення і мови. */
    }

}

function createMarkupList({name, flags}) {
    return `<img src = ${flags.svg} alt='flags of ${name.official}' width=60 height=40/>`
}

function createMarkup({name, flags, capital, population, languages}) {

    return`<div class="country-inform">
    <h2 class="country-name">${name.official}</h2>
    <img src = ${flags.svg} alt='flags of ${name.official}' width=60 height=40/>
    <p class="country-capital"${capital}</p>
    <p class="country-population"${population}</p>
    <p class="country-languages"${languages}</p>
    </div> `
}
function onError(err) {
    console.error(err)
    Notify.warning("Oops, there is no country with that name");
}
 



