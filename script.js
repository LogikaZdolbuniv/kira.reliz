const flowers = [
    { id: 1, name: "Червоні Троянди", price: 850, img: "redrose.png"},
    { id: 2, name: "Ніжні Півонії", price: 1200, img: "pivony.jpg"},
    { id: 3, name: "Весняні Тюльпани", price: 600, img: "tulpany.jpg"},
    { id: 4, name: "Білі Лілії", price: 950, img: "lily.jpg" },
    { id: 5, name: "Букет Лаванди", price: 450, img: "https://images.unsplash.com/photo-1565011523534-747a8601f10a?q=80&w=600" },
    { id: 6, name: "Соняшники", price: 700, img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=600" },
    { id: 7, name: "Еустоми", price: 868, img: "https://kvitka.od.ua/image/cache/catalog/kvitu-new/buket-charivnycia-1-500x500.jpeg"  },
    { id: 8, name: "Ранункулюси", price: 706, img: "https://proflowers.ua/upload/images/showcase/3396.jpg" },
    { id: 9, name: "Гіпсофіли", price: 1000, img: "gipsofil.jpg" },
    { id: 10, name: "Гвоздики", price: 530, img: "gvozdics.jpg" },
    { id: 11, name: "Бузок", price: 746, img: "buzoc.jpg" }
];

let cart = [];

// Створення карток товарів
const grid = document.getElementById('flower-grid');
flowers.forEach(flower => {
    grid.innerHTML += `
        <div class="flower-card">
            <img src="${flower.img}" alt="${flower.name}">
            <h3>${flower.name}</h3>
            <p class="price">${flower.price} грн</p>
            <button class="buy-btn" onclick="addToCart(${flower.id})">Додати в кошик</button>
        </div>
    `;
});

function addToCart(id) {
    const product = flowers.find(f => f.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    itemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        itemsContainer.innerHTML += `<p>🌸 ${item.name} - ${item.price} грн</p>`;
    });

    totalDisplay.innerText = total;
}
   

function toggleCart() {
    document.getElementById('cart-panel').classList.toggle('open');
}
document.getElementById('order-btn').onclick = function() {
    document.getElementById('modal-overlay').style.display = 'flex';
}
