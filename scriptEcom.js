// Sample products data (replace this with your actual product data)
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
];

// Function to display products on the webpage
function displayProducts() {
    const productsSection = document.getElementById('products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

// Call the displayProducts function when the page loads
window.onload = function() {
    displayProducts();
};


