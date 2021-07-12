import db from './db.js';
import { inRange } from 'lodash';

console.log(db.restaurants);
const cardsSection = document.querySelector('#restaurant-cards');
const noResults = document.querySelector('#no-results');
const loading = document.querySelector('#loading');
const searchElement = document.getElementById('search');

let restaurants = [];

const getRestaurants = async () => {
  if (loading.classList.contains('hide')) {
    loading.classList.remove('hide');
  }
  await sleep(500);
  restaurants = [...db.restaurants];
  return db.restaurants;
};

const generateView = restaurants => {
  loading.classList.add('hide')
  cardsSection.innerHTML = '';
  if(restaurants.length === 0) {
    noResults.classList.contains('hide') ? noResults.classList.remove('hide'): '';
  } else {
    noResults.classList.contains('hide') ? '' : noResults.classList.add('hide');
  }
  let cards = restaurants.map(item => {
    return getCard(item);
  });
  cards.forEach(card => cardsSection.appendChild(card));
};

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function getCard(restaurant) {
  const card = document.createElement('div');
  card.classList.add('card');
  let name = document.createElement('div');
  name.classList.add('name');
  name.innerHTML = `${restaurant.name}`;
  const img = document.createElement('img');
  img.src = restaurant.imageURL;
  img.alt = restaurant.name;
  const cuisine = document.createElement('div');
  cuisine.textContent = restaurant.cuisine;
  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.textContent = restaurant.rating.toFixed(1);
  rating.style.background = getColor(restaurant.rating);
  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(cuisine);
  card.appendChild(rating);
  return card;
}

const callApi = async () => {
  const restaurants = await getRestaurants();
  generateView(restaurants);
};

const getColor = rating => {
  if (inRange(rating, 0, 2)) {
    return `#ffa534`;
  } else if (inRange(rating, 2, 3)) {
    return `#ffe234`;
  } else if (inRange(rating, 3, 4)) {
    return `#b7dd29`;
  } else if (inRange(rating, 4, 5.01)) {
    return `#57e32c`;
  }
};

const debounce = function (fun, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(context, args);
    }, delay);
  };
};

const search = event => {
  let searchQuery = event.target.value.toLowerCase();
  if (searchQuery.trim() === '') {
    generateView(restaurants);
    return;
  }
  let filteredRestaurants = restaurants.filter(item =>
    item.name.toLowerCase().includes(searchQuery)
  );
  generateView(filteredRestaurants);
};

const searchEvent = debounce(search, 300);

searchElement.addEventListener('keyup', searchEvent);

callApi();
