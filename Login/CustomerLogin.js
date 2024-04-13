const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});



document.getElementById("signinform").addEventListener("submit", function(event) {
  event.preventDefault(); 
 
  const name = document.getElementById("signinname").value.trim();
  const password = document.getElementById("signinpassword").value.trim();

  if (name === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }
  var i = 1;
  while (localStorage.getItem("user" + i) !== null && localStorage.getItem("user"+i) != name) {
    i++;
  }
  if (localStorage.getItem("user" + i) === null) {
    alert("Invalid username or password.");
    return;
  }
  else if (localStorage.getItem("password" + i) != password) {
    alert("Invalid username or password.");
    return;
  }
  else {
    localStorage.setItem("currentuser", i);
    window.location.href = ".html";
 
    //document.getElementById("result").innerHTML = localStorage.getItem("user1");

    //localStorage.clear();
    // Assume AJAX call to send login info to server and save in database
    // Redirect to another page after successful login
    //window.location.href = "Summary/Summary.html?driver=" + name; // Redirect to event selection page
  }

});
