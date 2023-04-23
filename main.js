// Function to fetch bus stop data from API
async function fetchBusStopData() {
    const url = 'https://api.umd.io/v1/bus/stops'; 
    const response = await fetch(url); 
    const data = await response.json(); 
  
    return data; 
  }
// Function to process bus stop data for the visualization
function processBusStopData(data) {
 
    const processedBusStopData = data.map(stop => {
      return {
        id: stop.stop_id,
        name: stop.title,
        lat: stop.location.lat,
        lon: stop.location.lon
      };
    });
  
    return processedBusStopData; 
  }
// Function to create a Leaflet map with bus stop markers
function createBusStopMap(busStops) {
    // Create a new Leaflet map centered at a specific location
    const map = L.map('map').setView([38.9879, -76.9426], 15);
  
   
    busStops.forEach(busStop => {
      // Extract the bus stop location coordinates
      const { lat, lon } = busStop.location;
  
      const marker = L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>${busStop.name}</b><br>${busStop.stop_id}`);
    });
  
    return map;
  }