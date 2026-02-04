let count = 0;
let total = 0;

const products = [
  { name: "Linux PDF", price: 199, img: "/content/thumbnails/linux.jpg" },
  { name: "AWS PDF", price: 299, img: "/content/thumbnails/aws.jpg" },
  { name: "DevOps Video", price: 499, img: "/content/thumbnails/devops.jpg" }
];

const container = document.getElementById("products");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="add(${p.price})">Add to Cart</button>
  `;
  container.appendChild(card);
});

function add(price) {
  count++;
  total += price;
  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;
}
