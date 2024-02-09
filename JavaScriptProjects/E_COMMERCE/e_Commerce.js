let navBrand = document.querySelector(".navbar-brand");
let newProd = document.querySelector("#new");
// let x = document.querySelector(".navbar-brand");
// let x = document.querySelector(".navbar-brand");

navBrand.addEventListener("click",function(){
    alert("Bitch u dont have data at the backend to retrieve");
});

newProd.addEventListener("click",function(){
    alert("Product will be available soon in the stores");
});


// Get the modal
var modal1 = document.getElementById("signup-modal");

// Get the button that opens the modal
var btn = document.getElementById("signup-button");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


// Get the modal
var modal2 = document.getElementById("login-modal");

// Get the button that opens the modal
var btn = document.getElementById("login-btn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("remove")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}




