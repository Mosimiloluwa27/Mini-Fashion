

let cartCount = 0;
let cartTotal = 0;

function addToCart(price) {
    cartCount++;
    cartTotal += price;
    document.getElementById('cart').innerText = `Cart (${cartCount}) - $${cartTotal}`;
    alert(`Item added to cart! Total: $${cartTotal}`);
}
