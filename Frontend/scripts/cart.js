let container = document.getElementById("product-body-content");
let totalItem = document.getElementById("quantity");
let totalProductPrice = document.getElementById("product_price");
let totalNetPrice = document.getElementById("total_net_price");
let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
// totalItem.innerText = cartData.length;
function totalUpdater(arr) {
  let total = 0;
  let totalPrice = 0;
  arr.forEach((el, index) => {
    total += el.quantity;
    totalPrice += el.quantity * el.price;
  });
  totalItem.innerText = total;
  totalProductPrice.innerText = totalPrice;
  totalNetPrice.innerText = totalPrice;
}
if (cartData.length) {
  totalUpdater(cartData);
}

console.log(container);
function appendToCartDom(arr) {
  container.innerText = null;
  arr.forEach((element, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img_div = document.createElement("div");
    img_div.classList.add("img_div");
    let img = document.createElement("img");
    img.setAttribute("src", element.image);

    let card_content = document.createElement("div");
    card_content.classList.add("card_content");
    let title = document.createElement("h4");
    title.innerText = `${element.title.substring(0, 15)}...`;
    let price = document.createElement("h4");
    price.innerText = `Rs ${element.price}`;
    let delievery_charge = document.createElement("h5");
    delievery_charge.innerText = element.delievery
      ? `Delievery ${element.delievery}`
      : "Free Delievery";

    let incrementBtn = document.createElement("button");
    incrementBtn.innerText = "+";
    let quantity = document.createElement("span");
    quantity.innerText = element.quantity;
    let decrementBtn = document.createElement("button");
    decrementBtn.innerText = "-";
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    incrementBtn.addEventListener("click", () => {
      element.quantity += 1;
      quantity.innerText = element.quantity;
      localStorage.setItem("cart_data", JSON.stringify(cartData));
      totalUpdater(cartData);
    });

    decrementBtn.addEventListener("click", () => {
      if (element.quantity > 1) {
        element.quantity -= 1;
      }
      quantity.innerText = element.quantity;
      localStorage.setItem("cart_data", JSON.stringify(cartData));
      totalUpdater(cartData);
    });
    removeBtn.addEventListener("click", () => {
      cartData.splice(index, 1);
      localStorage.setItem("cart_data", JSON.stringify(cartData));
      appendToCartDom(cartData);
      totalUpdater(cartData);
    });
    img_div.append(img);
    card_content.append(
      title,
      price,
      delievery_charge,
      decrementBtn,
      quantity,
      incrementBtn,
      removeBtn
    );

    card.append(img_div, card_content);
    container.append(card);
    console.log(card);
  });
}
// console.log("inside cart page");

appendToCartDom(cartData);
