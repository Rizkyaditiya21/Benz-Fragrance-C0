let products = [
{
name:"Noir Desire",
price:299000,
img:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200",
desc:"Dark, bold & seductive fragrance."
},
{
name:"Moon Blush",
price:289000,
img:"https://images.unsplash.com/photo-1600180758890-6f1a3d77b2d6?q=80&w=1200",
desc:"Soft floral with creamy sweetness."
},
{
name:"Midnight Addict",
price:329000,
img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200",
desc:"Intense & mysterious night scent."
}
];

let cart=[];
let discount=0;

function renderProducts(){
let container=document.getElementById("product-list");
if(!container) return;

products.forEach((p,i)=>{
container.innerHTML+=`
<div class="product">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>Rp ${p.price}</p>
<button onclick="addToCart(${i})">Add to Cart</button>
</div>`;
});
}

function addToCart(index){
cart.push(products[index]);
updateCart();
}

function updateCart(){
let items=document.getElementById("cartItems");
items.innerHTML="";
let total=0;

cart.forEach(p=>{
items.innerHTML+=`<p>${p.name} - Rp ${p.price}</p>`;
total+=p.price;
});

total=total-(total*discount);
document.getElementById("cartTotal").innerText="Total: Rp "+total;
}

function toggleCart(){
document.getElementById("cartPanel").classList.toggle("active");
}

function applyDiscount(){
let code=document.getElementById("discountCode").value;
if(code==="BENZ10"){
discount=0.1;
alert("Discount Applied 10%");
updateCart();
}
}

function checkout(){
let totalText=document.getElementById("cartTotal").innerText;
let phone="628123456789";
let message="Halo saya ingin order:%0A";

cart.forEach(p=>{
message+=p.name+" - Rp "+p.price+"%0A";
});

message+=totalText;
window.open(`https://wa.me/${phone}?text=${message}`);
}

renderProducts();
