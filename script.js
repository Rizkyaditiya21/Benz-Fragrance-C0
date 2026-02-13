const products = [
{ id:1, name:"Noir Desire", price:299000, img:"images/noir.png"},
{ id:2, name:"Moon Blush", price:289000, img:"images/moonblush.png"},
{ id:3, name:"Moon Dew", price:279000, img:"images/moondew.png"},
{ id:4, name:"Velvet Kiss", price:309000, img:"images/velvet.png"},
{ id:5, name:"Azure Emotion", price:299000, img:"images/azureemotion.png"},
{ id:6, name:"Azure Blue", price:289000, img:"images/azureblue.png"},
{ id:7, name:"Melon Blanc", price:269000, img:"images/melon.png"},
{ id:8, name:"Blue Horizon", price:299000, img:"images/horizon.png"},
{ id:9, name:"Midnight Addict", price:319000, img:"images/midnight.png"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}

function updateCart(){
const count = document.getElementById("cart-count");
const container = document.getElementById("cart-items");
const totalEl = document.getElementById("cart-total");

if(count){
count.innerText = cart.reduce((a,b)=>a+b.qty,0);
}

if(container){
container.innerHTML="";
let total=0;

cart.forEach(item=>{
total += item.price * item.qty;

container.innerHTML += `
<div class="cart-item">
<h4>${item.name}</h4>
<p>${item.qty} x Rp ${item.price.toLocaleString()}</p>
<button onclick="removeItem(${item.id})">Remove</button>
</div>
`;
});

if(cart.length >=3){
total *=0.9;
}

totalEl.innerText="Total: Rp " + total.toLocaleString();
}
}

function addToCart(id){
const product = products.find(p=>p.id===id);
const exist = cart.find(item=>item.id===id);

if(exist){
exist.qty++;
}else{
cart.push({...product, qty:1});
}

saveCart();
}

function removeItem(id){
cart = cart.filter(item=>item.id!==id);
saveCart();
}

function renderProducts(){
const container = document.getElementById("product-list");
if(!container) return;

container.innerHTML="";

products.forEach(p=>{
container.innerHTML += `
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>Rp ${p.price.toLocaleString()}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`;
});
}

function checkoutWA(){
let message="Order Benz Fragrance:%0A";
cart.forEach(item=>{
message += `${item.name} x${item.qty}%0A`;
});
window.open("https://wa.me/62882000111956?text="+message);
}

renderProducts();
updateCart();
