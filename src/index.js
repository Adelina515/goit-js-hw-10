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
   const result = fetchCountries(inputValue).then(response => {
        console.log(response);
       if (response.length === 0) {
           throw new Error('No data!')
       } else if ( result.length > 10) {
        Notify.warning("Too many matches found. Please enter a more specific name.");
    }else if ( result.length < 10 && result.length > 2) {
        return refs.countryList.insertAdjacentHTML("beforeend", createMarkupList(name, flags));
      /*
       ви намагаєтесь отримати властивість length від змінної result, яка є об'єктом Promise, 
       а не масивом, тому у вас виводить андефайнд. Вам потрібно використ. даний масив у ф-ції 
       handleInput після того, як він буде отриманий з fetchCountries. Для цього вам потрібно 
       додати код обробки результату запиту в блоці then відповідно до ваших потреб */          
    }else if ( result.length === 1) {
        return refs.countryInfo.insertAdjacentHTML("beforeend", createMarkup(name, flags, capital, population, languages));
        /*Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається 
        розмітка картки з даними про країну: прапор, назва, столиця, населення і мови. */
    } else if (inputValue === 0) {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    }     
   }).catch(onError);
   

}

function createMarkupList({name, flags}) {
    return `<img src = ${flags.svg} alt='flags of ${name.official}' width=60 height=40/>`
}

function createMarkup(response) {
    return response.map(({name, flags, capital, population, languages}) =>`<div class="country-inform">
    <h2 class="country-name">${name.official}name</h2>
    <img src = ${flags.svg} alt='flags of ${name.official}' width=60 height=40/>
    <p class="country-capital"><span>capital:</span>${capital}</p>
    <p class="country-population"><span>population:</span>${population}</p>
    <p class="country-languages"><span>languages:</span>${Object.values(languages).join(",")}</p>
    </div> `).join("")
}
function onError(err) {
    console.error(err)
    Notify.warning("Oops, there is no country with that name");
}
 



