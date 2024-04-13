document.getElementById("eventform").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const switch1 = document.getElementById("mySwitch1").value;
const switch2 = document.getElementById("mySwitch2").value;
const switch3 = document.getElementById("mySwitch3").value;


  if (name === "" || address === "") {
	alert("Please fill in all fields.");
	return;
  }

  localStorage.setItem("resName", name)
  localStorage.setItem("eventaddress", address);
  localStorage.setItem("vegetarian", switch1);
  localStorage.setItem("reduceemissions", switch2);	
	localStorage.setItem("healthy", switch3);

  


  alert("🎉Restaurant added successfully!✅");


  window.location.href = "/Ranking/RestaurantRanking.html";
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
