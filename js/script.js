
let cart = [];

function addToCart(product){
cart.push(product);
alert(product + " added to cart");
}

function checkout(){
let message = "Order Benz Fragrance:%0A";
cart.forEach(item=>{
message += "- " + item + "%0A";
});
window.open("https://wa.me/62882000111956?text=" + message);
}
