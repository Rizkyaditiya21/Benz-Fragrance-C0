const products = [
{ id:1, name:"Noir Desire", price:299000, image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200", desc:"Dark, bold & addictive fragrance."},
{ id:2, name:"Moon Blush", price:289000, image:"https://images.unsplash.com/photo-1600180758890-6f1a3d77b2d6?q=80&w=1200", desc:"Soft floral creamy scent."},
{ id:3, name:"Moon Dew", price:279000, image:"https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=1200", desc:"Fresh and calming aura."},
{ id:4, name:"Velvet Kiss", price:309000, image:"https://images.unsplash.com/photo-1585386959984-a41552262f9e?q=80&w=1200", desc:"Romantic & sensual tone."},
{ id:5, name:"Azure Emotion", price:299000, image:"https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1200", desc:"Oceanic freshness."},
{ id:6, name:"Azure Blue", price:289000, image:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1200", desc:"Clean aquatic blend."},
{ id:7, name:"Melon Blanc", price:269000, image:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200", desc:"Sweet fruity freshness."},
{ id:8, name:"Blue Horizon", price:299000, image:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1200", desc:"Fresh sky breeze."},
{ id:9, name:"Midnight Addict", price:319000, image:"https://images.unsplash.com/photo-1600181954344-12b7c5e7f3b3?q=80&w=1200", desc:"Intense & mysterious."}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
}

function updateCartCount(){
document.querySelectorAll("#cart-count").forEach(el=>{
el.innerText = cart.reduce((a,b)=>a+b.qty,0);
});
}
updateCartCount();

function addToCart(id){
const product = products.find(p=>p.id===id);
const existing = cart.find(item=>item.id===id);
if(existing){
existing.qty++;
}else{
cart.push({...product, qty:1});
}
saveCart();
alert("Added to cart");
}

function displayProducts(){
const list = document.getElementById("product-list");
if(!list) return;
list.innerHTML="";
products.forEach(p=>{
list.innerHTML+=`
<div class="card">
<img src="${p.image}">
<div class="card-content">
<h3>${p.name}</h3>
<p>Rp ${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
</div>`;
});
}
displayProducts();

function displayCart(){
const container = document.getElementById("cart-items");
if(!container) return;
container.innerHTML="";
let total=0;
cart.forEach(item=>{
total+=item.price*item.qty;
container.innerHTML+=`
<div class="card-content">
<h3>${item.name}</h3>
<p>${item.qty} x Rp ${item.price}</p>
<button onclick="removeItem(${item.id})">Remove</button>
</div>`;
});
if(cart.length>=3){
total*=0.9;
}
document.getElementById("total-price").innerText="Total: Rp "+total;
}
displayCart();

function removeItem(id){
cart = cart.filter(item=>item.id!==id);
saveCart();
displayCart();
}

function checkoutWA(){
let message="Order Benz Fragrance:%0A";
cart.forEach(item=>{
message+=`${item.name} x${item.qty}%0A`;
});
window.open(`https://wa.me/62882000111956?text=${message}`);
}
