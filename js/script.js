function addToCart(name, price){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({name:name, price:price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}

function loadCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-items");
let total = 0;

cart.forEach(item=>{
container.innerHTML += `<p>${item.name} - Rp ${item.price}</p>`;
total += item.price;
});

document.getElementById("total").innerText = "Total: Rp " + total;
}

if(document.getElementById("cart-items")){
loadCart();
}
