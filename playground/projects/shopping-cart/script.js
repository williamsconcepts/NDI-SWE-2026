const userCart = [];

const itemNameInput = document.querySelector(".item-name");
const itemPriceInput = document.querySelector(".item-price");
const itemQuantityInput = document.querySelector(".item-quantity");

const addBtn = document.querySelector(".add-btn");
const cartItems = document.querySelector(".cart-items");
const calculateBtn = document.querySelector(".calculate-btn");
const totalText = document.querySelector(".total");

// Render items to the DOM
function renderCart() {
  cartItems.innerHTML = "";

  userCart.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = `${item.itemName} | $${item.price} | Qty: ${item.quantity}`;

    cartItems.append(li);
  });
}

// Calculate total price
function calculateTotalPrice(cart) {
  return cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
}

// Add Item
addBtn.addEventListener("click", () => {
  const itemName = itemNameInput.value.trim();
  const price = Number(itemPriceInput.value);
  const quantity = Number(itemQuantityInput.value);

  if (!itemName || price <= 0 || quantity <= 0) {
    alert("Please enter valid values");
    return;
  }

  const newItem = {
    itemName,
    price,
    quantity,
  };

  userCart.push(newItem);

  renderCart();

  itemNameInput.value = "";
  itemPriceInput.value = "";
  itemQuantityInput.value = "";
});

// Calculate Total
calculateBtn.addEventListener("click", () => {
  const total = calculateTotalPrice(userCart);

  totalText.textContent = `Total: $${total}`;
});

// Initial render
renderCart();
