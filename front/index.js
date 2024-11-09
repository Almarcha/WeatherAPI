
const map = L.map('map', {zoomControl: false}).setView([39.450808,-0.855098], 9);

L.control.zoom({position: 'bottomright'}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker;

function addMarker(lat, long) {
    if (marker) {
        map.removeLayer(marker);
    }
    const customIcon = L.icon({
        iconUrl: 'images/location.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    marker = L.marker([lat, long],{icon: customIcon}).addTo(map);
    marker.bindPopup(`Ubicación: ${lat}, ${long}`).openPopup();
}

function setMapLocation(long, lat) {
    map.flyTo([lat,long],12);
    addMarker(lat,long);
}

function getDate() {
    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-"
                    + (currentdate.getMonth() + 1)  + "-" 
                    + currentdate.getDate() + " T "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    return datetime;
}

document.getElementById("cityForm").addEventListener("submit", async function (event) {
    
    event.preventDefault();

    const datetime = getDate();
    const city = document.getElementById("city").value;
    const weatherData = await fetch(`http://localhost:4001/api/weather?city=${encodeURIComponent(city)}&datetime=${datetime}`);

    const { data } = await weatherData.json();
    
    if (data.error){
        document.getElementById("result").innerText = weatherData.error;
    } else {
        const lat = data.latitude;
        const long  = data.longitude;
        setMapLocation(long,lat)
        const dayData = data.days[0];
        const temperature = Math.round(((dayData.temp-32) * (5/9))*100)/100;
        const description = dayData.description;
        const maxTemperature = Math.round(((dayData.tempmax-32) * (5/9))*100)/100;
        const minTemperature = Math.round(((dayData.tempmin-32) * (5/9))*100)/100;
        const sunrise = dayData.sunrise;
        const sunset = dayData.sunset;
        
        document.getElementById("result").innerHTML = 
        `
        <h2>Weather in ${city}</h2>
        <p>Maximum temperature: ${maxTemperature} °C</p>
        <p>Minimum temperature: ${minTemperature} °C</p>
        <p>Average temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
        `;

        document.getElementById("sunInfo").innerHTML = 
        `
        <div class="dateInfo">
            <span style="color: white;">Day: ${datetime.replace('T',' ')}</span>
        </div>
        <div class="sunDetail">
            <span style="color: white;">Sunrise: ${sunrise}</span>
            <img src="images/sunrise-icon.png" alt="Sunrise Icon" class="sunIcon">
        </div>
        <div class="sunDetail">
            <span style="color: white;">Sunset: ${sunset}</span>
            <img src="images/sunset-icon.png" alt="Sunset Icon" class="sunIcon">
        </div>
        `;

    };
});
