// Define the coordinates for the bus stop
const stopData = [ {'stop_id': 'regdrgar_d', 'title': 'Regents Drive Garage', 'lat': 38.9895211, 'long': -76.9407719},
{'stop_id': 'campmath', 'title': 'Campus Dr at Math Slip', 'lat': 38.9878609, 'long': -76.9386053},
{'stop_id': 'paingree', 'title': 'Campus Drive and Diamondback Drive', 'lat': 38.9879877, 'long': -76.934037},
{'stop_id': 'painrhod', 'title': 'Campus Drive and Rhode Island Avenue (Outbound)', 'lat': 38.9836051, 'long': -76.9313264},
{'stop_id': 'cpmetro_d', 'title': 'College Park - UMD Metro Station', 'lat': 38.9755375, 'long': -76.9279988},
{'stop_id': 'painrhod_in', 'title': 'Campus Drive and Rhode Island Avenue (Inbound)', 'lat': 38.9835717, 'long': -76.930958},
{'stop_id': 'stamsu_d', 'title': 'Stamp Student Union - Slip', 'lat': 38.9876099, 'long': -76.9439449},
{'stop_id': 'artsoci', 'title': 'Art/Sociology Building', 'lat': 38.98529, 'long': -76.94677},
{'stop_id': 'wico', 'title': 'Wicomico Hall', 'lat': 38.98375, 'long': -76.94516},
{'stop_id': 'lotu4', 'title': 'Preinkert Drive at Lot MV', 'lat': 38.9821893, 'long': -76.944884},
{'stop_id': 'guilrowa', 'title': 'Guilford Drive and Rowalt Drive (Outbound)', 'lat': 38.978183, 'long': -76.939469},
{'stop_id': 'hartshop', 'title': 'Baltimore Avenue and Hartwick Road (Inbound)', 'lat': 38.97944, 'long': -76.93783},
{'stop_id': 'mont_in', 'title': 'Montgomery Hall (Inbound)', 'lat': 38.9824955, 'long': -76.9391275},
{'stop_id': 'memo_in', 'title': 'Memorial Chapel (Inbound)', 'lat': 38.9845403, 'long': -76.94007},
{'stop_id': 'mitc_in', 'title': 'Mitchell Building (Inbound)', 'lat': 38.9863659, 'long': -76.9401199},
{'stop_id': 'regestad', 'title': 'Regents Dr and Stadium Dr', 'lat': 38.990012, 'long': -76.9406498},
{'stop_id': 'regefarm_out', 'title': 'Regents Dr and Farm Dr (Outbound)', 'lat': 38.9912621, 'long': -76.9406599},
{'stop_id': 'regecomc_out', 'title': 'Regents Drive at XFINITY Center (Outbound)', 'lat': 38.9934725, 'long': -76.9399271},
{'stop_id': 'regepain_out', 'title': 'Regents Dr and Paint Branch Dr (Outbound)', 'lat': 38.9936299, 'long': -76.9374809},
{'stop_id': 'shutbase_out', 'title': 'Shuttle-UM Base (Outbound)', 'lat': 38.9953477, 'long': -76.9374989},
{'stop_id': 'lot4_out', 'title': 'Paint Branch Dr at Lot 4b (Outbound)', 'lat': 38.997895, 'long': -76.940414},
{'stop_id': 'cour500', 'title': 'Courtyards #500', 'lat': 39.0030898, 'long': -76.94257},
{'stop_id': 'lot4_in', 'title': 'Paint Branch Dr at Lot 4b (Inbound)', 'lat': 38.9978287, 'long': -76.9404883},
{'stop_id': 'regepain', 'title': 'Regents Dr and Paint Branch Dr (Inbound)', 'lat': 38.9936749, 'long': -76.9377348},
{'stop_id': 'regecomc_in', 'title': 'Regents Drive at XFINITY Center (Inbound)', 'lat': 38.9936404, 'long': -76.9398124},
{'stop_id': 'regefarm_in', 'title': 'Regents Dr and Farm Dr (Inbound)', 'lat': 38.9914838, 'long': -76.9407074},
{'stop_id': 'camplt1d', 'title': 'Campus Dr at Lot 3', 'lat': 38.9846897, 'long': -76.9510623},
{'stop_id': 'umuc', 'title': 'UMUC - College Park Marriott', 'lat': 38.985281, 'long': -76.9540366},
{'stop_id': 'painrege_bus', 'title': 'Paint Branch Dr and Regents Dr (Bus Shelter)', 'lat': 38.993499, 'long': -76.9373896},
{'stop_id': 'painstad', 'title': 'Paint Branch Dr and Stadium Dr', 'lat': 38.9902898, 'long': -76.9373},
{'stop_id': 'stamsuhh_d', 'title': 'Stamp Student Union - Slip', 'lat': 38.9874519, 'long': -76.9440396},
{'stop_id': 'univgrad', 'title': 'University Blvd at Graduate Hills', 'lat': 38.9853553, 'long': -76.9578695},
{'stop_id': 'cspa_main', 'title': 'Stadium Drive and University Boulevard', 'lat': 38.991756, 'long': -76.950237},
{'stop_id': 'stadgara', 'title': 'Stadium Drive Garage', 'lat': 38.9917469, 'long': -76.9475442},
{'stop_id': 'gradhill', 'title': 'Adelphi Rd at Graduate Hills Apts', 'lat': 38.9846606, 'long': -76.9555421},
{'stop_id': 'adeltula', 'title': 'Adelphi Rd and Campus Dr', 'lat': 38.9846321, 'long': -76.9553383},
{'stop_id': 'collpksh', 'title': 'College Park Shopping Ctr (Outbound)', 'lat': 38.9809619, 'long': -76.9390277},
{'stop_id': 'baltritc', 'title': 'Ritchie Coliseum', 'lat': 38.9852774, 'long': -76.9370967},
{'stop_id': 'univview', 'title': 'University View', 'lat': 38.99234, 'long': -76.9338999},
{'stop_id': 'baltvars', 'title': 'Baltimore Ave at The Varsity', 'lat': 38.9908313, 'long': -76.9340075},
{'stop_id': 'mcirc', 'title': 'Campus Dr at M Circle', 'lat': 38.987699, 'long': -76.9395199},
{'stop_id': 'lot1', 'title': 'Union Dr at Lot 1b', 'lat': 38.9872099, 'long': -76.9481576},
{'stop_id': 'cspac', 'title': 'Valley Drive at Stadium Drive Garage', 'lat': 38.9902373, 'long': -76.9494},
{'stop_id': 'elk', 'title': 'Elkton Hall', 'lat': 38.9924177, 'long': -76.9485888},
{'stop_id': 'hage', 'title': 'Hagerstown Hall', 'lat': 38.99297, 'long': -76.947599},
{'stop_id': 'laplat', 'title': 'La Plata Hall', 'lat': 38.9922186, 'long': -76.94563},
{'stop_id': 'varhous', 'title': 'Varsity Team House', 'lat': 38.9906039, 'long': -76.9454355},
{'stop_id': 'stadatl', 'title': 'Stadium Drive at Atlantic Building', 'lat': 38.9905589, 'long': -76.9421162},
{'stop_id': 'mitc_out', 'title': 'Mitchell Building (Outbound)', 'lat': 38.9866498, 'long': -76.9401999},
{'stop_id': 'memo_out', 'title': 'Memorial Chapel (Outbound)', 'lat': 38.9848206, 'long': -76.94015},
{'stop_id': 'mont_out', 'title': 'Montgomery Hall (Outbound)', 'lat': 38.9824312, 'long': -76.9391529},
{'stop_id': 'baltritc_s', 'title': 'Ritchie Coliseum', 'lat': 38.9852774, 'long': -76.9370967},
{'stop_id': 'hoff', 'title': 'Hoff Theater', 'lat': 38.9880692, 'long': -76.94539},
{'stop_id': 'uniofiel', 'title': 'Union Ln and Fieldhouse Dr', 'lat': 38.9886932, 'long': -76.9453067},
{'stop_id': 'biofield', 'title': 'BioSciences Research Building', 'lat': 38.9892576, 'long': -76.9421089},
{'stop_id': 'cour300', 'title': 'Courtyards #300', 'lat': 39.0013104, 'long': -76.9419255},
{'stop_id': 'cour400', 'title': 'Courtyards #400', 'lat': 39.001867, 'long': -76.94271},
{'stop_id': 'lot4i_r', 'title': 'Paint Branch Dr at Lot 4b (Inbound)', 'lat': 38.9978287, 'long': -76.9404883},
{'stop_id': 'univclub', 'title': 'University Club Apartments', 'lat': 38.9906518, 'long': -76.9298057},
{'stop_id': 'varsity', 'title': 'Baltimore Ave at The Varsity', 'lat': 38.9908309, 'long': -76.9340079},
{'stop_id': 'dent', 'title': 'Denton Hall', 'lat': 38.9919122, 'long': -76.9500274},
{'stop_id': 'tula3424', 'title': 'Graduate Hills at 3424 Tulane Dr', 'lat': 38.9849405, 'long': -76.9559259},
{'stop_id': 'tula3410', 'title': 'Graduate Hills at 3410 Tulane Dr', 'lat': 38.984739, 'long': -76.9572802},
{'stop_id': 'tula3403', 'title': 'Graduate Hills at 3404 Tulane Dr', 'lat': 38.9846822, 'long': -76.95824},
{'stop_id': 'camplot19', 'title': 'Campus Dr at UMUC Lot 19', 'lat': 38.9852911, 'long': -76.9544776},
{'stop_id': 'univbapt', 'title': 'University Methodist Church', 'lat': 38.9848573, 'long': -76.9524262},
{'stop_id': 'hillmunc', 'title': 'Van Munching Hall (Inbound)', 'lat': 38.9830167, 'long': -76.9482112},
{'stop_id': 'lds', 'title': 'LDS Institute of Religion', 'lat': 38.9822297, 'long': -76.9471916},
{'stop_id': 'sccomm1_2', 'title': 'South Campus Commons 1 & 2', 'lat': 38.9823305, 'long': -76.9434585},
{'stop_id': '4315rwlt', 'title': 'Graduate Gardens at 4315 Rowalt Dr', 'lat': 38.9788425, 'long': -76.9414545},
{'stop_id': '4327rwlt', 'title': 'Graduate Gardens at 4327 Rowalt Dr', 'lat': 38.9782048, 'long': -76.9400307},
{'stop_id': 'shoebuil', 'title': 'Shoemaker Building', 'lat': 38.9838654, 'long': -76.9421853},
{'stop_id': 'loty', 'title': 'Lot Y and Chapel Dr', 'lat': 38.9843599, 'long': -76.9417399},
{'stop_id': 'painstad_r', 'title': 'Glenn L. Martin Wind Tunnel', 'lat': 38.9899585, 'long': -76.9372506},
{'stop_id': 'avwill', 'title': 'A.V. Williams Building', 'lat': 38.9909815, 'long': -76.93726},
{'stop_id': 'techpain', 'title': 'Paint Branch Dr and Technology Dr', 'lat': 38.9925816, 'long': -76.93727},
{'stop_id': 'camb', 'title': 'Cambridge Hall (Outbound)', 'lat': 38.9914576, 'long': -76.943027},
{'stop_id': 'cumber', 'title': 'Cumberland Hall', 'lat': 38.9923509, 'long': -76.944254},
{'stop_id': 'stamsu_m', 'title': 'Stamp Student Union - Slip', 'lat': 38.9876098, 'long': -76.9439438},
{'stop_id': 'knoxyale', 'title': 'Knox Road and Yale Avenue', 'lat': 38.9806089, 'long': -76.9368551},
{'stop_id': 'prinknox', 'title': 'Knox Rd and Princeton Ave', 'lat': 38.9802601, 'long': -76.9353307},
{'stop_id': 'hopkknox', 'title': 'Knox Rd and Hopkins Ave', 'lat': 38.9799235, 'long': -76.9338359},
{'stop_id': 'knoxrhod', 'title': 'Knox Rd and Rhode Island Ave', 'lat': 38.9796165, 'long': -76.9324227},
{'stop_id': 'rhodcoll', 'title': 'Rhode Island Ave & College Ave', 'lat': 38.9807245, 'long': -76.9318659},
{'stop_id': 'rhodnorw_s', 'title': 'Rhode Island Ave and Norwich Rd', 'lat': 38.9818979, 'long': -76.9313952},
{'stop_id': 'rossrhod', 'title': 'Rossborough Ln and Rhode Island Ave', 'lat': 38.9834008, 'long': -76.93131},
{'stop_id': '5frat', 'title': 'Fraternity Row #5', 'lat': 38.9848022, 'long': -76.9342719},
{'stop_id': 'leoncomm_out', 'title': 'Leonardtown Community Center', 'lat': 38.98371, 'long': -76.9337999},
{'stop_id': '11frat', 'title': 'Fraternity Row #11', 'lat': 38.983016, 'long': -76.9354865},
{'stop_id': 'yalecoll', 'title': 'Yale Ave and Lehigh Rd', 'lat': 38.9815053, 'long': -76.9364056},
{'stop_id': 'yaleknox_ib', 'title': 'Yale Avenue and Knox Road', 'lat': 38.9806721, 'long': -76.9368328},
{'stop_id': 'collpksh_ib', 'title': 'College Park Shopping Center (Inbound)', 'lat': 38.9810063, 'long': -76.9389541},
{'stop_id': 'scam34', 'title': 'South Campus Commons 3 and 4', 'lat': 38.9811409, 'long': -76.9408182},
{'stop_id': 'sccomm5_6', 'title': 'South Campus Commons 5 and 6', 'lat': 38.9823229, 'long': -76.9448437},
{'stop_id': 'lota', 'title': 'Preinkert Drive at Lot A', 'lat': 38.9842509, 'long': -76.9451946},
{'stop_id': 'somehall', 'title': 'Somerset Hall', 'lat': 38.9847538, 'long': -76.9458235},
{'stop_id': 'annearun', 'title': 'Anne Arundel Hall', 'lat': 38.9859448, 'long': -76.9469495},
{'stop_id': 'dorchall', 'title': 'Dorchester Hall', 'lat': 38.9869691, 'long': -76.9465401},
{'stop_id': 'enclave_s', 'title': 'The Enclave', 'lat': 38.99782, 'long': -76.93182}
]

// Initialize the map and set the view to the bus stop's location
const map = L.map("map").setView(
  [stopData[0].lat, stopData[0].long],
  16
);

// Add the map tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker for the bus stop
L.marker([stopData[0].lat, stopData[0].long]).addTo(map);

function filterStops() {
  const filterInput = document.getElementById("filter-input");
  const filterValue = filterInput.value.trim().toLowerCase();
  const filteredStops = stopData.filter(stop => stop.title.toLowerCase().includes(filterValue));
  return filteredStops;
}

const markers = L.layerGroup().addTo(map);

//Add the generate list button
function generateList() {
  const stopTitles = stopData.map(stop => stop.title);
  const stopList = document.getElementById("stop-list");
  stopTitles.forEach(title => {
      const li = document.createElement("li");
      li.innerText = title;
      stopList.appendChild(li);
  });
}

//event listener for generate list button
document.getElementById("generate-list-button").addEventListener("click", () => {
  generateList();
});

//event listener for filter button
document.getElementById("filter-button").addEventListener("click", () => {
  const filteredStops = filterStops();
  markers.clearLayers();
  filteredStops.forEach(stop => {
      const marker = L.marker([stop.lat, stop.long]).addTo(markers);
      marker.bindPopup(stop.title);
  });
  if (filteredStops.length > 0) {
      const firstStop = filteredStops[0];
      map.setView([firstStop.lat, firstStop.long], 16);
  }
});

function generateList() {
  const filterInput = document.getElementById("filter-input");
  const filterValue = filterInput.value.trim().toLowerCase();
  const filteredStops = stopData.filter(stop => stop.title.toLowerCase().includes(filterValue));
  const stopList = document.getElementById("stop-list");
  stopList.innerHTML = "";
  filteredStops.forEach(stop => {
      const li = document.createElement("li");
      li.innerText = stop.title;
      stopList.appendChild(li);
  });
}

// Function to calculate the distance between two points using Haversine formula 
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const phi1 = lat1 * Math.PI / 180;
  const phi2 = lat2 * Math.PI / 180;
  const deltaPhi = (lat2 - lat1) * Math.PI / 180;
  const deltaLambda = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
          Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // Distance in meters
  return d;
}

// Event listener for the calculate distance button
document.getElementById("calculate-distance-button").addEventListener("click", () => {
  const startStopInput = document.getElementById("start-stop-input");
  const endStopInput = document.getElementById("end-stop-input");
  const startStop = stopData.filter(stop => stop.title.toLowerCase() === startStopInput.value.trim().toLowerCase());
  const endStop = stopData.filter(stop => stop.title.toLowerCase() === endStopInput.value.trim().toLowerCase());

  if (startStop.length > 0 && endStop.length > 0) {
    const distance = calculateDistance(startStop[0].lat, startStop[0].long, endStop[0].lat, endStop[0].long);
    const distanceDisplay = document.getElementById("distance-display");
    distanceDisplay.innerText = `Distance between ${startStopInput.value} and ${endStopInput.value}: ${distance.toFixed(2)} meters`;
  } else {
    const distanceDisplay = document.getElementById("distance-display");
    distanceDisplay.innerText = "Invalid bus stop(s). Please check your input.";
  }
});
