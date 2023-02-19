import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderCountries(dataCountries) {
  const countryList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');

  let quantitiCountries = dataCountries.length;
  let countryItems = [];
  let currentCountry = dataCountries[0];

  if (quantitiCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (quantitiCountries >= 2 && quantitiCountries <= 10) {
    dataCountries.map(country => {
      countryItems.push(
        `
      <li class="country-item">
      <img class="country-image" src='${country.flags.svg}' alt='Flag'/>
      <span class="country-text">${country.name.official}</span>
      </li>
        `
      );
    });
    countryInfo.innerHTML = '';
    countryList.innerHTML = countryItems.join('');
  } else {
    countryInfo.innerHTML = `
    <div class="info-block">
       <img class="info-image" src='${currentCountry.flags.svg}' alt='Flag'/>
       <span class="info-country__name" >${currentCountry.name.official}</span>
    </div>
      <div class="info-block__list">
         <p><span class="info-text" >Capital:</span> ${
           currentCountry.capital
         }</p>
         <p><span class="info-text" >Population:</span> ${
           currentCountry.population
         }</p>
         <p><span class="info-text" >Languages:</span> ${Object.values(
           currentCountry.languages
         ).join(', ')}</p>
      </div>
      `;
    countryList.innerHTML = '';
  }
}
