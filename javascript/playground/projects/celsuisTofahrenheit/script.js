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
/* ============ Shopping Cart ============ */
/* ========================================= */

const userCart = [];

const itemNameInput = document.querySelector("#item-name");
const itemPriceInput = document.querySelector("#item-price");
const itemQuantityInput = document.querySelector("#item-quantity");

const addBtn = document.querySelector("#add-btn");
const cartItems = document.querySelector("#cart-items");
const calculateBtn = document.querySelector("#calculate-btn");
const CartTotal = document.querySelector("#total");


function renderCartItems() {

    cartItems.innerHTML = "";

    userCart.forEach((item)=> {
        const li = document.createElement("li");

        li.innerHTML = `
        <div class="align-items">
        <div>
        ${item.itemName},
        ${item.price},
        ${item.quantity}
        </div>
        <button>delete</button>
        </div>`
        
        cartItems.append(li);
    });

}

    // calculate total price
function calculateTotalPrice(cart) {
    return cart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0);
}

addBtn.addEventListener("click", () => {
    const itemName = itemNameInput.value.trim();
    const price = Number(itemPriceInput.value);
    const quantity = Number(itemQuantityInput.value);

    const newCartItems = {
        itemName: itemNameInput.value.trim(),
        price: itemPriceInput.value,
        quantity: itemQuantityInput.value
    }

    userCart.push(newCartItems);

    renderCartItems();

    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemQuantityInput.value = "";
});

// Calculate Total

calculateBtn.addEventListener("click", () => {
    const total = calculateTotalPrice(userCart);

    CartTotal.textContent = `$${total}`;

});

renderCartItems();
