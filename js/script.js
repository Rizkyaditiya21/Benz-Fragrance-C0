const products = [
{ id:1, name:"Noir Desire", price:299000, image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200", desc:"Dark, bold & addictive."},
{ id:2, name:"Moon Blush", price:289000, image:"https://images.unsplash.com/photo-1600180758890-6f1a3d77b2d6?q=80&w=1200", desc:"Soft floral creamy scent."},
{ id:3, name:"Moon Dew", price:279000, image:"https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=1200", desc:"Fresh and calming."},
{ id:4, name:"Velvet Kiss", price:309000, image:"https://images.unsplash.com/photo-1585386959984-a41552262f9e?q=80&w=1200", desc:"Romantic & sensual."},
{ id:5, name:"Azure Emotion", price:299000, image:"https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1200", desc:"Oceanic freshness."},
{ id:6, name:"Azure Blue", price:289000, image:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1200", desc:"Clean & aquatic."},
{ id:7, name:"Melon Blanc", price:269000, image:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200", desc:"Sweet fruity fresh."},
{ id:8, name:"Blue Horizon", price:299000, image:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1200", desc:"Fresh sky breeze."},
{ id:9, name:"Midnight Addict", price:319000, image:"https://images.unsplash.com/photo-1600181954344-12b7c5e7f3b3?q=80&w=1200", desc:"Intense & mysterious."}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
document.querySelectorAll("#cart-count").forEach(el=>{
el.innerText = cart.length;
});
}
updateCartCount();

function displayProducts(){
const list = document.getElementById("product-list");
if(!list) return;
list.innerHTML="";
products.forEach(p=>{
list.innerHTML+=`
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>Rp ${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>`;
});
}
displayProducts();

function addToCart(id){
const product = products.find(p=>p.id===id);
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
alert("Added to cart");
}

function displayCart(){
const container = document.getElementById("cart-items");
if(!container) return;
container.innerHTML="";
let total=0;
cart.forEach(item=>{
total+=item.price;
container.innerHTML+=`
<div class="card">
<h3>${item.name}</h3>
<p>Rp ${item.price}</p>
</div>`;
});
if(cart.length>=3){
total = total*0.9;
}
document.getElementById("total-price").innerText="Total: Rp "+total;
}
displayCart();
