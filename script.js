function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function injectHTML(list) {
  const target = document.querySelector('#stop_list');
  target.innerHTML = '';
  list.forEach((item) => {
    const str = `<li>${item.title}</li>`;
    target.innerHTML += str
  })
}

function filterList() {
  // Get input value and list of bus stops
  const input = document.getElementById('searchInput').value.toLowerCase();
  const list = document.getElementById('busStopsList');

  // Get list items
  const items = list.getElementsByTagName('li');

  // Filter items based on search query
  const filteredItems = Array.from(items).filter((item) => {
    const itemName = item.textContent.toLowerCase();
    return itemName.includes(input);
  });

  // Display filtered items and hide non-matching items
  items.forEach((item) => {
    if (filteredItems.includes(item)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

function initMap() {
  const carto = L.map('map').setView([38.98, -76.93], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(carto);
  return carto;
}

async function mainEvent() {  // the async keyword means we can make API requests
  const mainForm = document.querySelector('.main_form');
  const generateListButton = document.querySelector('#generate')
  const textField = document.querySelector('#resto')
  const stopList = document.querySelector('#stop_list');
  const loadAnimation = document.querySelector('#data_load_animation');

  loadAnimation.style.display = 'none';
  generateListButton.classList.add('hidden');

  const carto = initMap();

  let currentList = [];

  mainForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // this stops the page from reloading when the form is submitted
    loadAnimation.style.display = 'block';

    const query = textField.value.trim();
    const response = await fetch(`https://api.umd.io/v1/bus/stops?name__icontains=${query}`);
    const data = await response.json();

    currentList = data;
    localStorage.setItem('storedData', JSON.stringify(currentList));

    injectHTML(currentList);
    markerPlace(currentList, carto);
    generateListButton.classList.remove('hidden');
    loadAnimation.style.display = 'none';
  });

  generateListButton.addEventListener('click', (event) => {
    event.preventDefault();
    const storedData = localStorage.getItem('storedData');
    const parsedData = JSON.parse(storedData);
    const cutList = cutRestaurantList(parsedData);
    injectHTML(cutList);
  });

  stopList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const stopName = event.target.textContent;
      const stop = currentList.find(item => item.title === stopName);
      carto.setView([stop.lat, stop.lon], 17);
    }
  });
}

function markerPlace(array, map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item) => {
    const marker = L.marker([item.lat, item.lon]).addTo(map);
    marker.bindPopup(item.title);
  });
}


mainEvent();
// Save data to localStorage
localStorage.setItem('busStops', JSON.stringify(data));
// Load data from localStorage
const storedData = localStorage.getItem('busStops');
if (storedData) {
  currentList = JSON.parse(storedData);
  injectHTML(currentList);
  markerPlace(currentList, carto);
}
