
const products = [
    {
        id: 1,
        title: "Smartphone Galaxy S23 Ultra",
        price: 3999.00,  
        description: "Tela Dynamic AMOLED 2X de 6.8'', S Pen integrado, câmera de 200MP.",
        category: "smartphone",
        image: "img/produtos/galaxy-s23-ultra.jpg",
        stars: 5,
        brand: "samsung"
    },
    {
        id: 2,
        title: "Notebook Dell XPS 15 OLED",
        price: 14997.98,  
        description: "Processador i9-13900H, 32GB RAM, 1TB SSD, tela OLED 3.5K.",
        category: "notebook",
        image: "img/produtos/dell-xps15.jpg",
        stars: 4,
        brand: "dell"
    },
    {
        id: 3,
        title: "Fone Sony WH-1000XM5",
        price: 2498.99, 
        description: "Cancelamento de ruído líder, 30h de bateria, toque de alta resolução.",
        category: "acessorio",
        image: "img/produtos/sony-wh1000xm5.jpg",
        stars: 5,
        brand: "sony"
    },
    {
        id: 4,
        title: "iPhone 15 Pro Max 256GB",
        price: 8896.76, 
        description: "Chip A17 Pro, câmera de 48MP, titânio aerospace, Dynamic Island.",
        category: "smartphone",
        image: "img/produtos/iphone15-pro-max.jpg",
        stars: 5,
        brand: "apple"
    },
    {
        id: 5,
        title: "MacBook Pro 16'' M2 Max",
        price: 17667.21,  
        description: "Chip M2 Max com 12 núcleos CPU e 38 GPU, 32GB RAM, 1TB SSD.",
        category: "notebook",
        image: "img/produtos/macbook-pro-m2.jpg",
        stars: 5,
        brand: "apple"
    },
    {
        id: 6,
        title: "Smartwatch Galaxy Watch 6 Classic",
        price: 1360.90,  
        description: "Monitoramento avançado de saúde, LTE, rodinha giratória física.",
        category: "acessorio",
        image: "img/produtos/galaxy-watch6-classic.jpg",
        stars: 4,
        brand: "samsung"
    },
    {
        id: 7,
        title: "Xiaomi 13 Ultra",
        price: 5399.80, 
        description: "Câmera Leica 1 polegada, Snapdragon 8 Gen 2, tela AMOLED 2K 120Hz.",
        category: "smartphone",
        image: "img/produtos/xiaomi-13-ultra.jpg",
        stars: 4,
        brand: "xiaomi"
    },
    {
        id: 8,
        title: "Mouse Logitech MX Master 3S",
        price: 579.99, 
        description: "Sensor 8K DPI, rolagem magnética, até 70 dias de bateria.",
        category: "acessorio",
        image: "img/produtos/logitech-mxmaster3s.jpg",
        stars: 5,
        brand: "logitech"
    },
    {
        id: 9,
        title: "Tablet Samsung Galaxy Tab S9 Ultra 5G",
        price: 8395.90,  
        description: "Tela Dynamic AMOLED 14.6'', S Pen incluído, chip Snapdragon 8 Gen 2.",
        category: "tablet",
        image: "img/produtos/galaxy-tab-s9-ultra.jpg",
        stars: 5,
        brand: "samsung"
    },
    {
        id: 10,
        title: "Notebook Asus ROG Zephyrus G14",
        price: 10441.65,  
        description: "Ryzen 9 7940HS, RTX 4060, 16GB RAM, 1TB SSD, tela QHD 165Hz.",
        category: "notebook",
        image: "img/produtos/asus-rog-zephyrus-g14.jpg",
        stars: 4,
        brand: "asus"
    },
    {
        id: 11,
        title: "Smartphone Google Pixel 8 Pro 128GB",
        price: 6929.91, 
        description: "Câmera de 50MP com IA, Tensor G3, tela LTPO OLED 120Hz.",
        category: "smartphone",
        image: "img/produtos/pixel8-pro.jpeg",
        stars: 4,
        brand: "google"
    },
    {
        id: 12,
        title: "Monitor LG UltraFine 32UN880",
        price: 4517.12,  
        description: "32'' 4K UHD, USB-C, ajuste de altura e inclinação, HDR400.",
        category: "monitor",
        image: "img/produtos/lg-32un880.jpg",
        stars: 5,
        brand: "lg"
    },
    {
        id: 13,
        title: "Teclado Keychron Q3",
        price: 2387.59,  
        description: "Teclado mecânico customizável, switches Gateron, estrutura de alumínio.",
        category: "acessorio",
        image: "img/produtos/keychron-q3.jpg",
        stars: 5,
        brand: "keychron"
    },
    {
        id: 14,
        title: "iPad Pro 12.9'' M2 128GB",
        price: 7683.71, 
        description: "Chip M2, tela Liquid Retina XDR, Thunderbolt/USB 4, compatível com Apple Pencil.",
        category: "tablet",
        image: "img/produtos/ipad-pro-m2.jpg",
        stars: 5,
        brand: "apple"
    },
    {
        id: 15,
        title: "Notebook Lenovo Yoga 9i",
        price: 18479.99,
        description: "Processador i7-1360P, tela 4K OLED touch, 16GB RAM, 1TB SSD.",
        category: "notebook",
        image: "img/produtos/lenovo-yoga9i.jpg",
        stars: 4,
        brand: "lenovo"
    },
    {
        id: 16,
        title: "AirPods Pro 2",
        price: 1979.00,
        description: "Cancelamento ativo de ruído, áudio espacial, até 6h de bateria.",
        category: "acessorio",
        image: "img/produtos/airpods-pro2.jpg",
        stars: 5,
        brand: "apple"
    },
    {
        id: 17,
        title: "Smartphone OnePlus 11 5G",
        price: 5824.94, 
        description: "Snapdragon 8 Gen 2, câmera Hasselblad, carregamento de 100W.",
        category: "smartphone",
        image: "img/produtos/oneplus-11.png",
        stars: 4,
        brand: "oneplus"
    },
    {
        id: 18,
        title: "Monitor Samsung Odyssey G9",
        price: 9599.90, 
        description: "Super ultrawide 49'' QHD, 240Hz, QLED, HDR2000, curvatura 1000R.",
        category: "monitor",
        image: "img/produtos/samsung-odyssey-g9.jpg",
        stars: 5,
        brand: "samsung"
    },
    {
        id: 19,
        title: "Notebook HP Spectre x360",
        price: 22616.44, 
        description: "Conversível, tela OLED 3K, i7-1260P, 16GB RAM, 1TB SSD.",
        category: "notebook",
        image: "img/produtos/hp-spectre-x360.jpg",
        stars: 4,
        brand: "hp"
    },
    {
        id: 20,
        title: "Webcam Logitech Brio 4K",
        price: 1127.98,
        description: "4K Ultra HD, HDR, correção de luz, Windows Hello.",
        category: "acessorio",
        image: "img/produtos/logitech-brio.jpg",
        stars: 5,
        brand: "logitech"
    }
];

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt star"></i>';
        } else {
            stars += '<i class="far fa-star star"></i>';
        }
    }
    return `<div class="product-rating">${stars}</div>`;
}

function renderProducts(filter = 'all') {
    productsContainer.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        
        productCard.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.title}" class="product-img">
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-title">${product.title}</h3>
                ${renderStars(product.stars)}
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function animateCartIcon() {
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    animateCartIcon();
    
    const originalText = e.target.textContent;
    const originalBg = e.target.style.backgroundColor;
    const originalBorder = e.target.style.borderColor;
    
    e.target.textContent = '✓ Adicionado';
    e.target.style.backgroundColor = 'var(--success-color)';
    e.target.style.borderColor = 'var(--success-color)';
    e.target.style.color = 'white';
    
    setTimeout(() => {
        e.target.textContent = originalText;
        e.target.style.backgroundColor = originalBg;
        e.target.style.borderColor = originalBorder;
        e.target.style.color = '';
    }, 1500);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        history.pushState(null, null, targetId);
    });
});

function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h2');
    const heroText = heroTitle.textContent;
    heroTitle.textContent = '';
    typeWriter(heroTitle, heroText, 100);
    

}); 

let cart = [];

const productsContainer = document.getElementById('products-container');
const filters = document.querySelectorAll('.filter-btn');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const contactForm = document.getElementById('contact-form');


function renderProducts(filter = 'all') {
    productsContainer.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    
    e.target.textContent = 'Adicionado!';
    e.target.style.backgroundColor = '#2ecc71';
    setTimeout(() => {
        e.target.textContent = 'Adicionar ao Carrinho';
        e.target.style.backgroundColor = '';
    }, 1000);
}

function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cartModal.style.display === 'block') {
        renderCartItems();
    }
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        cartTotalElement.textContent = 'R$ 0,00';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-id="${item.id}">+</button>
            </div>
            <i class="fas fa-trash remove-item" data-id="${item.id}"></i>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
    
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

function decreaseQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    updateCart();
}

function increaseQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    item.quantity += 1;
    updateCart();
}

function removeItem(e) {
    const productId = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        showAlert('Seu carrinho está vazio!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showAlert(`Compra finalizada com sucesso! Total: R$ ${total.toFixed(2)}.Obrigado por comprar na ByteStore!\n`);
    
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            renderProducts(filter.dataset.filter);
        });
    });
    
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
        renderCartItems();
    });
    
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    checkoutBtn.addEventListener('click', checkout);
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            showAlert('Por favor, preencha todos os campos.');
            return;
        }
    
        showAlert(`Obrigado pela sua mensagem, ${name}! Entraremos em contato em breve.`);
        contactForm.reset();
    });
    
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Elementos do alerta
const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const alertOk = document.getElementById('alert-ok');

// Função para mostrar alerta personalizado
function showAlert(message) {
  alertMessage.textContent = message;
  customAlert.style.display = 'flex';
  
  // Desabilita o scroll da página enquanto o alerta está aberto
  document.body.style.overflow = 'hidden';
}

// Fechar o alerta
function closeAlert() {
  customAlert.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Evento para o botão OK
alertOk.addEventListener('click', closeAlert);

// Fechar ao clicar fora do alerta
customAlert.addEventListener('click', function(e) {
  if (e.target === customAlert) {
    closeAlert();
  }
});

