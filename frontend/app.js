let count = 0;
let total = 0;

const products = [
  {
    name: "DevOps Course PDF",
    price: 199,
    type: "pdf",
    file: "/assets/books/DevOps-Course.pdf",
    thumbnail: "/content/thumbnails/linux.jpg"
  },
  {
    name: "AWS PDF",
    price: 299,
    type: "pdf",
    file: "/assets/books/AWS-Course.pdf",
    thumbnail: "/content/thumbnails/aws.jpg"
  },
  {
    name: "DevOps Video",
    price: 499,
    type: "video",
    file: "/assets/videos/devops.mp4",
    thumbnail: "/content/thumbnails/devops.jpg"
  },
  {
    name: "Intro Audio",
    price: 199,
    type: "audio",
    file: "/assets/audio/intro.mp3",
    thumbnail: "/content/thumbnails/linux.jpg"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  let mediaHtml = "";

  if (p.type === "pdf") {
    mediaHtml = `
      <img src="${p.thumbnail}" alt="${p.name}">
      <a href="${p.file}" target="_blank">📘 View PDF</a>
    `;
  }

  if (p.type === "video") {
    mediaHtml = `
      <img src="${p.thumbnail}" alt="${p.name}">
      <video controls width="100%">
        <source src="${p.file}" type="video/mp4">
      </video>
    `;
  }

  if (p.type === "audio") {
    mediaHtml = `
      <img src="${p.thumbnail}" alt="${p.name}">
      <audio controls>
        <source src="${p.file}" type="audio/mpeg">
      </audio>
    `;
  }

  card.innerHTML = `
    ${mediaHtml}
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
