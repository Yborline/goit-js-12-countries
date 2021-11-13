import {error } from '@pnotify/core/dist/PNotify.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
import { defaults } from '@pnotify/core'
defaults.delay = '3000'
defaults.width = '400px'
defaults.minHeight = '56px'

const BASE_URL = 'https://restcountries.com/v3.1';

 function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/name/${searchQuery}`)
        .then(
            response => {
                if (response.status === 200) {
                     return response.json();
                }
                  if (response.status === 404) {
                     return error({ text: 'You entered the wrong country name. Nothing found. Please, try again' })
                }  
        }).catch(() => {error({ text: 'Nothing found. Please, try again' })})
}
export default { fetchCountries }