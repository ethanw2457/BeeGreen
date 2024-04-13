
document.getElementById("loginform").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();

  if (name === "" || address === "") {
    alert("Please fill in all fields.");
    return;
  }
  var i = 1;
  while (localStorage.getItem("user" + i) !== null) {
    i++;
  }
  localStorage.setItem("name" + i, name);
  localStorage.setItem("address" + i, address);

  localStorage.setItem("status" + i, "driver");

  localStorage.setItem("disposal", i);

  //document.getElementById("result").innerHTML = localStorage.getItem("user1");

  //localStorage.clear();
  // Assume AJAX call to send login info to server and save in database
  // Redirect to another page after successful login
  alert("🎉Disposal Location added successfully!✅");
  window.location.href = "/Ranking/DisposalRanking.html"; 
});
