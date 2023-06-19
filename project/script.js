// Cart
let cartMenu=document.querySelector("#cart-menu");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector(".close");

// Open Cart
cartMenu.onclick=()=>{
  cart.classList.add("active");
}

// Close Cart
closeCart.onclick=()=>{
  cart.classList.remove("active");
}

if(document.readyState=="loading"){
  document.addEventListener("DOMContentLoaded",ready);
}else{
  ready();
}

function ready(){
  // Remove items from cart
  let removeCartButtons=document.getElementsByClassName("remove");
  console.log("removeCartButtons");
  for (let i=0;i<removeCartButtons.length;i++){
    let button=removeCartButtons[i];
    button.addEventListener("click" , removeCartItem);
  }
}

function removeCartItem(event){
  let buttonClicked=event.target;
  buttonClicked.parentElement.remove();
}



// Product Catalogue
function searchProducts() {
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  var products = document.getElementsByClassName("product");

  for (var i = 0; i < products.length; i++) {
    var productName = products[i].querySelector("h3").innerText.toLowerCase();
    if (productName.indexOf(searchInput) > -1) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}

function filterProducts(category) {
  var products = document.getElementsByClassName("product");

  for (var i = 0; i < products.length; i++) {
    if (category === "all" || products[i].dataset.category === category) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}


$(document).ready(function(){
  $('.male').click(function(){
    console.log("Male");
  })

  $('.female').click(function(){
    console.log("Female");
  })

  $('.other').click(function(){
    console.log("Other");
  })
});