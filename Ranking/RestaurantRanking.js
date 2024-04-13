document.getElementById("name").innerHTML = localStorage.getItem("resName");
/*document.getElementById("date").innerHTML = localStorage.getItem("eventdate");*/
document.getElementById("description").innerHTML = "Resturant Location: " + " 8min"+"<br>" + "Vegetarian Friendly: " + (localStorage.getItem("vegetarian") ? "&#10004" :  "&#10060") + "<br>" + "Emissions Conscious: " + (localStorage.getItem("reduceemissions")  ? "&#10004" :  "&#10060") + "<br>" + "Healthy Food: " +(localStorage.getItem("healthy") ? "&#10004" :  "&#10060") + "<br>" + "Verified: &#10060" ;

document.getElementById("button").addEventListener("click", function(event) {
  event.preventDefault();
  if (localStorage.getItem("driver") !== null) {
  window.location.href = "/Summary/Summary.html";
  }
  else {
  localStorage.setItem("driver", localStorage.getItem("currentuser"));
  alert("Successfully signed up as a driver!");
  window.location.href = "index.html";
  }
})

/*
const events = [
  { name: "Event 1", date: "2024-04-10", location: "Location 1" },
  { name: "Event 2", date: "2024-04-15", location: "Location 2" },
  { name: "Event 3", date: "2024-04-20", location: "Location 3" }
];

function createEventButtons() {
  const eventButtonsDiv = document.getElementById("eventButtons");

  events.forEach(event => {
    const button = document.createElement("button");
    button.textContent = `${event.name} - ${event.date}`;
    button.setAttribute("data-location", event.location);
    button.addEventListener("click", function() {
      const location = this.getAttribute("data-location");
      alert(`You selected ${event.name}. Location: ${location}`);

    });
    eventButtonsDiv.appendChild(button);
  });
}


window.addEventListener("load", createEventButtons);
*/
