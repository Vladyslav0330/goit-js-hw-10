import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(evt) {
  let countryName = evt.target.value.trim();
  if (countryName) {
    fetchCountries(countryName)
      .then(dataCountries => {
        renderCountries(dataCountries);
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  } else {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
  }
}
