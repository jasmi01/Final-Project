// Function to fetch bus stop data from API
async function fetchBusStopData() {
    const url = 'https://api.umd.io/v1/bus/stops'; 
    const response = await fetch(url); 
    const data = await response.json(); 
  
    return data; 
  }
  
  // Function to display bus stop data on the webpage
  async function displayBusStopData() {
    const busStopList = document.getElementById('busStopList'); 
    const busStopData = await fetchBusStopData(); 
  
    // Loop through the bus stop data and append to the bus stop list element
    for (const busStop of busStopData) {
      const listItem = document.createElement('i');
      listItem.textContent = busStop.name;
      busStopList.appendItem(listItem);
    }
  }
  
  // Function to create bus stop map using Leaflet.js
  async function createBusStopMap() {
    const busStopData = await fetchBusStopData(); 
    const busStopMapContainer = document.getElementById('busStopMapContainer'); 

    const map = L.map(busStopMapContainer).setView([38.9879, -76.9378], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    // Loop through the bus stop data and add markers to the map
    for (const busStop of busStopData) {
      const marker = L.marker([busStop.lat, busStop.lon]).addTo(map);
      marker.bindPopup(`<b>${busStop.name}</b><br>${busStop.address}`);
    }
  }
  
  // Call the functions t create the bus stop map when the page loads
  window.addEventListener('load', displayBusStopData);
  window.addEventListener('load', createBusStopMap);
  