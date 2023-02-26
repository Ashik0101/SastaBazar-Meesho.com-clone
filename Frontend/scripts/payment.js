let continueButton = document.getElementById("continue-btn");
continueButton.addEventListener("click", () => {
  window.location.href = "./summary.html";
});

// total price and order price updater
let totalProductPrice = document.getElementById("product_price");
let totalNetPrice = document.getElementById("total_net_price");
let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];

function totalUpdater(arr) {
  let total = 0;
  let totalPrice = 0;
  arr.forEach((el, index) => {
    total += el.quantity;
    totalPrice += el.quantity * el.price;
  });
  totalProductPrice.innerText = totalPrice;
  totalNetPrice.innerText = totalPrice;
}
if (cartData.length) {
  totalUpdater(cartData);
}
