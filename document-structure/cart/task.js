function insertToCartBlock(id, image, quantity) {
    const cart     = document.getElementsByClassName("cart")[0];
    const cartContentBlock = document.getElementsByClassName("cart__products")[0];

    let cartElement = document.createElement("div");
    cartElement.dataset.id = id;
    cartElement.className = "cart__product";
    cartElement.innerHTML = "<img class='cart__product-image' src='" + image + "'>" +
                            "<div class='cart__product-count'>" + quantity + "</div>" + 
                            "<a href='#' class='product__remove'>&times;</a>";
    cartContentBlock.appendChild(cartElement);
    cartElement.querySelector(".product__remove").onclick = removeFromCart;
    cart.classList.remove("cart__hidden");
    return cartElement;
}

function controlChange(e) {
    const controlSet = e.target.closest(".product__quantity-controls");
    const quantity = controlSet.querySelector(".product__quantity-value");
    
    if (e.target.classList.contains("product__quantity-control_dec")) {
        if (parseInt(quantity.innerText) > 1) {
            quantity.innerText = parseInt(quantity.innerText) - 1;
        }
    }
    else {
        quantity.innerText = parseInt(quantity.innerText) + 1;
    }
}

function addToCart(e) {
    const product = e.target.closest(".product");
    let id = product.dataset.id;
    if (!id) return false;
    
    const quantity = parseInt(product.querySelector(".product__quantity-value").innerText);
    if (!quantity) return false;
    
    const image = product.querySelector(".product__image");
    
    const cart     = document.getElementsByClassName("cart")[0];
    cart.classList.remove("cart__hidden");

    const cartContentBlock = document.getElementsByClassName("cart__products")[0];
    let cartPosition = null;
    let cartElement = null;
    for (let i = 0; i < cartContent.length; i++) {
        if (cartContent[i].id == id) {
            cartPosition = cartContent[i];
        }
        if (cartContentBlock.children[i].dataset.id == id) {
            cartElement = cartContentBlock.children[i];
        }
    }
    if (!cartPosition) {
        cartContent[cartContent.length] = {id, quantity: 0, image: image.src};
        cartPosition = cartContent[cartContent.length - 1];
    }
    if (!cartElement) {
        cartElement = insertToCartBlock(id, image.src, 0);
    }
       
    cartPosition.quantity = parseInt(cartPosition.quantity) + quantity;
    localStorage.setItem("Cart", JSON.stringify(cartContent));
    
    productQuantity = cartElement.querySelector(".cart__product-count");
    productQuantity.innerText = parseInt(productQuantity.innerText) + quantity;    
}

function removeFromCart (e) {
    const cart     = document.getElementsByClassName("cart")[0];
    const product = e.target.closest(".cart__product");
    const parent = product.closest(".cart__products");
    
    let i = cartContent.findIndex( p => p.id == product.dataset.id );
    cartContent.splice(i, 1);
    localStorage.setItem("Cart", JSON.stringify(cartContent));
    
    product.remove();
    if (parent.children.length <= 0) {
        cart.classList.add("cart__hidden");
    }
    return false;
}

let cartContent = JSON.parse(localStorage.getItem("Cart"));
if (!cartContent) {
  cartContent = [];
}
for (let i = 0; i < cartContent.length; i++) {
    insertToCartBlock(cartContent[i].id, cartContent[i].image, cartContent[i].quantity);
}

const controls = document.getElementsByClassName("product__quantity-control");
for (let i = 0; i < controls.length; i++) {
    controls[i].onclick = controlChange;
}
const toCart   = document.getElementsByClassName("product__add");
for (let i = 0; i < toCart.length; i++) {
    toCart[i].onclick = addToCart;
}
