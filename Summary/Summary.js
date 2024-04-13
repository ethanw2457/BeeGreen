
document.getElementById("eventname").innerHTML = localStorage.getItem("event");
document.getElementById("eventdetails").innerHTML = "Location: Kevin‘s kitchen, 1638 E State St, Trenton, NJ 08609" + "<br>Rank: #1";
document.getElementById("eventdesc").innerHTML = localStorage.getItem("eventdesc");
const drivernum = localStorage.getItem("driver");
const cpnum = localStorage.getItem("currentuser");
const disposalnum = localStorage.getItem("disposal");


document.getElementById("carpoolerinfo").innerHTML = localStorage.getItem("user" + cpnum);
document.getElementById("driverinfo").innerHTML = "Customer" + "<br>" + localStorage.getItem("email" + cpnum) + "<br>" + localStorage.getItem("address" + cpnum);


document.getElementById("carpoolerinfo").innerHTML = "Destination #1 - Home Address" + "<br>" + localStorage.getItem("address" + cpnum) + "<br>" + "Destination #2 - Restaurant Location" + "<br>" + localStorage.getItem("address" + drivernum) + "<br>" + "Destination #3 - Disposal Location" + "<br>" + localStorage.getItem("address2" + disposalnum);
document.getElementById("carpooler").innerHTML = localStorage.getItem("user" + cpnum);



function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 40.686506, lng: -74.570665},
  });

  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const waypts = [];
  waypts.push({
    location: localStorage.getItem("address"+localStorage.getItem("driver")),
    stopover: true,
  })
  directionsService
  .route({
    origin: {
      query: localStorage.getItem("address" + localStorage.getItem("currentuser")),
    },
    waypoints: waypts,
    destination: {
      query: localStorage.getItem("disposal"),
    },
    travelMode: google.maps.TravelMode.DRIVING,
  })
  .then((response) => {
    directionsRenderer.setDirections(response);
  })
  .catch((e) => window.alert("Directions request failed due to " + status));
}

//window.initMap = initMap;





/*var i = 1;
while (localStorage.getItem("user" + i) !== null) {
  document.getElementById("result").innerHTML += localStorage.getItem("user"+i) + " ";
  i++;
}
*/
