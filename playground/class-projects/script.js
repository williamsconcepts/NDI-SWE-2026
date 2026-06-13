/* ========================================= */
/* ============ Celsuis To Fahrenhiet ============ */
/* ========================================= */

const celsuisInput = document.querySelector("#celsuis-input");
const convertBtn = document.querySelector("#convert-btn");
const celsuisOutput = document.querySelector("#celsuis-output");


convertBtn.addEventListener("click", () => {
    const value = Number(celsuisInput.value);
    const fah = (value * (9/5) + 32);
    celsuisOutput.textContent = `${value} in Celcuis is ${fah} Fahrenheit.`;
});


/* ========================================= */
/* ============ Shopping Cart ============= */
/* ========================================= */

// Load cart from localStorage
const userCart =
    JSON.parse(localStorage.getItem("userCart")) || [];

const itemNameInput = document.querySelector("#item-name");
const itemPriceInput = document.querySelector("#item-price");
const itemQuantityInput = document.querySelector("#item-quantity");

const addBtn = document.querySelector("#add-btn");
const cartItems = document.querySelector("#cart-items");
const calculateBtn = document.querySelector("#calculate-btn");
const CartTotal = document.querySelector("#total");


/* ========================================= */
/* ============ Save To Storage ============ */
/* ========================================= */

function saveCart() {
    localStorage.setItem(
        "userCart",
        JSON.stringify(userCart)
    );
}


/* ========================================= */
/* ============ Render Cart Items ========== */
/* ========================================= */

function renderCartItems() {

    cartItems.innerHTML = "";

    if (userCart.length === 0) {
        cartItems.innerHTML = "<li>Your cart is empty</li>";
        return;
    }

    userCart.forEach((item, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div>
                <div>
                    <strong>${item.itemName}</strong>
                    | Price: $${item.price}
                    | Qty: ${item.quantity}

                     <button onclick="deleteCartItem(${index})">
                    Delete
                </button>
                </div>

               
            </div>
        `;

        cartItems.append(li);
    });
}


/* ========================================= */
/* ============ Calculate Total ============ */
/* ========================================= */

function calculateTotalPrice(cart) {

    return cart.reduce((acc, curr) => {

        return acc + (curr.price * curr.quantity);

    }, 0);

}


/* ========================================= */
/* ============ Add Cart Item ============= */
/* ========================================= */

addBtn.addEventListener("click", () => {

    const itemName = itemNameInput.value.trim();
    const price = Number(itemPriceInput.value);
    const quantity = Number(itemQuantityInput.value);

    // Validation
    if (!itemName || price <= 0 || quantity <= 0) {
        alert("Please enter valid values");
        return;
    }

    const newCartItem = {
        itemName,
        price,
        quantity
    };

    userCart.push(newCartItem);

    saveCart();

    renderCartItems();

    // Clear Inputs
    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemQuantityInput.value = "";
});


/* ========================================= */
/* ============ Delete Cart Item ========== */
/* ========================================= */

function deleteCartItem(index) {

    userCart.splice(index, 1);

    saveCart();

    renderCartItems();

}


/* ========================================= */
/* ============ Calculate Total =========== */
/* ========================================= */

calculateBtn.addEventListener("click", () => {

    const total = calculateTotalPrice(userCart);

    CartTotal.textContent = `Total: $${total}`;

});


/* ========================================= */
/* ============ Clear Cart ================= */
/* ========================================= */

// Optional button:
// <button id="clear-cart">Clear Cart</button>

const clearCartBtn = document.querySelector("#clear-cart");

if (clearCartBtn) {

    clearCartBtn.addEventListener("click", () => {

        userCart.length = 0;

        localStorage.removeItem("userCart");

        CartTotal.textContent = "Total: $0";

        renderCartItems();

    });

}


/* ========================================= */
/* ============ Initial Render ============ */
/* ========================================= */

renderCartItems();