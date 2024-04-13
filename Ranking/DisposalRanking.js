// JS
document.getElementById("name2").innerHTML = localStorage.getItem("name");


// document.getElementById("address").innerHTML = "Disposal Location Distance: 1 mins<br> Verified: &#10004;";

document.getElementById("button").addEventListener("click", function(event) {
  event.preventDefault();
  if (localStorage.getItem("driver") !== null) {
    window.location.href = "/Summary/Summary.html";
  }
  else {
    localStorage.setItem("driver", localStorage.getItem("currentuser"));
    window.location.href = "/Summary/Summary.html";
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
