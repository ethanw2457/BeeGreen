document.getElementById("eventform").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value.trim();
  const address = document.getElementById("address").value.trim();
  const desc = document.getElementById("description").value.trim();


  if (name === "" || date === "" || address === "" || desc === "") {
    alert("Please fill in all fields.");
    return;
  }
  
  localStorage.setItem("event", name)
  localStorage.setItem("eventdate", date);
  localStorage.setItem("eventaddress", address);
  localStorage.setItem("eventdesc", desc);
  


  alert("Event added successfully!");


  window.location.href = "./index.html";
});
// slider
// Access the checkbox element
const switchInput = document.getElementById('mySwitch');
// Access the div to display information
const infoDiv = document.getElementById('info');

// Add event listener to the checkbox
switchInput.addEventListener('change', function() {
  // If the checkbox is checked, display "Switch is ON", else display "Switch is OFF"
  if (this.checked) {
    infoDiv.textContent = 'Switch is ON';
  } else {
    infoDiv.textContent = 'Switch is OFF';
  }
});
