import  API from './fetch';

import countryTmp from '../templates/countryTmp';
import listTmp from '../templates/list.hbs';

import { alert } from '@pnotify/core/dist/PNotify.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
import { defaults } from '@pnotify/core'
defaults.delay = '3000'
defaults.width = '400px'
defaults.minHeight = '56px'

const inputCountry = document.querySelector(".countryNameInput");
const card = document.querySelector('.card')
const debounce = require('lodash.debounce');

function clearContainer() {
  card.innerHTML = '';
}

function renderCountryCard(data) {
    const markup = countryTmp(data);
    console.log(data)
    card.insertAdjacentHTML('beforeend', markup);
}

function checkContries(data) {
    console.log(data)
            if (data.length === 1) {
                renderCountryCard(data)
            }
            if (data.length > 10) {
                return alert({ text: 'Too many matches found. Please enter a more specific query!' })
            }
            if (data.length >=2 && data.length < 10 ) {
                card.innerHTML = listTmp(data)
            }
}
function onSearch(e) {
    clearContainer();
    const searchQuery = e.target.value;
    e.preventDefault();
    API.fetchCountries(searchQuery).then(checkContries);
   }

inputCountry.addEventListener('input', debounce(onSearch, 500));


//     "@pnotify/core": "^5.2.0",
//     "@pnotify/font-awesome5": "^5.2.0",
//     "lodash.debounce": "^4.0.8",
//     "parcel-bundler": "^1.12.5",
//     "parcel-plugin-handlebars-precompile": "^1.0.2",
//     "pnotify": "^5.2.0",
//     "sass": "^1.43.4"
//   },
//   "devDependencies": {
//     "posthtml-include": "^1.7.2