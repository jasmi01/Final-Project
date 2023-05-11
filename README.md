https://jasmi01.github.io/Final-Project/
The UMD Bus Stop Network
The target browsers for this website are Google Chrome (ver 113.0.5672.92) and Safari (ver 5.1.10)
The API chosen for this project is UMD's open API on bus stops across campus (https://api.umd.io/v1/bus/stops/{stop_ids}). The API provides data on bus stop locations, stop IDs, and other relevant information. This API was chosen because it provides the necessary data for the project's goal of exploring the concentration of bus stops in certain areas and the average distance between bus stops.
I had to implement a GET request to retrieve data for specific bus stops from the API, after which I compiled everything into a JSON format and used it as my main source for data. Here is the link for my JSON data https://jasmi01.github.io/FinalProjectData/
The project uses the JavaScript Library Leaflet.js to display a map visualization for the bus stop locations.
I didn't use any pre-made CSS frameworks, just implemented a stylesheet.
The information problem I am hoping to examine is the arrangement of bus stops on the UMD campus.I want to explore the concentration of bus stops in certain areas. This is because students have expressed dissatisfaction with the UMD shuttle system and the placement of stops.
