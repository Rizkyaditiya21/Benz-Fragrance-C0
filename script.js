const products = [
{ name:"Noir Desire", price:"299.000", img:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200"},
{ name:"Moon Blush", price:"289.000", img:"https://images.unsplash.com/photo-1600180758890-6f1a3d77b2d6?q=80&w=1200"},
{ name:"Moon Dew", price:"279.000", img:"https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=1200"},
{ name:"Velvet Kiss", price:"309.000", img:"https://images.unsplash.com/photo-1585386959984-a41552262f9e?q=80&w=1200"},
{ name:"Azure Emotion", price:"299.000", img:"https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1200"},
{ name:"Azure Blue", price:"289.000", img:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1200"},
{ name:"Melon Blanc", price:"269.000", img:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200"},
{ name:"Blue Horizon", price:"299.000", img:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1200"},
{ name:"Midnight Addict", price:"319.000", img:"https://images.unsplash.com/photo-1600181954344-12b7c5e7f3b3?q=80&w=1200"}
];

const container = document.getElementById("product-list");

products.forEach(p=>{
container.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>Rp ${p.price}</p>
</div>
`;
});
