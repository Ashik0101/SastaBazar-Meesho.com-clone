/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> */
const url = "http://localhost:4000";
/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> */

let saveAddressBtn = document.querySelector(".submit-address-button");
let addressShowerSection = document.querySelector(".delivery-details");

let phoneShower = document.getElementById("address-mobile-shower");
let houseShower = document.getElementById("address-house-shower");
let areaShower = document.getElementById("address-area-shower");
let cityShower = document.getElementById("address-city-shower");
let pincodeShower = document.getElementById("address-pincode-shower");
let stateShower = document.getElementById("address-state-shower");
let optionalShower = document.getElementById("address-optional-shower");

//getting the address of logged in user in address page load and putting in the respective input fields.
window.addEventListener("load", () => {
  let phone = document.getElementById("mobile");
  let house = document.getElementById("house_no");
  let area = document.getElementById("area");
  let pincode = document.getElementById("pincode");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let nearby_location = document.getElementById("optional");

  fetch(`${url}/address/get`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      console.log(res.isAddressPresent);
      localStorage.setItem("isAddressPresent", res.isAddressPresent);
      if (res.isAddressPresent == true) {
        let data = res.data;
        phone.value = data.phone;
        house.value = data.house;
        area.value = data.area;
        city.value = data.city;
        pincode.value = data.pincode;
        state.value = data.state;
        nearby_location.value = data.nearby_location;
        // addressShowerSection.style.display = "block";
      }
    })
    .catch((err) => {
      console.log("Something Went  Wrong!! :", err);
    });
});

saveAddressBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let phone = document.getElementById("mobile");
  let house = document.getElementById("house_no");
  let area = document.getElementById("area");
  let pincode = document.getElementById("pincode");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let nearby_location = document.getElementById("optional");
  let payload = {
    house: house.value,
    area: area.value,
    pincode: pincode.value,
    phone: phone.value,
    city: city.value,
    state: state.value,
    nearby_location: nearby_location.value,
  };
  if (
    !house.value ||
    !area.value ||
    !pincode.value ||
    !city.value ||
    !state.value ||
    !phone.value
  ) {
    alert("All Fields Are Required!!");
  } else if (phone.value.split("").length != 10) {
    alert("Phone no. Must Be of 10 digits.");
  } else {
    console.log(payload);

    //fetch request post or patch will depend upon the value of isUserPresent
    let isAddressPresent = localStorage.getItem("isAddressPresent");
    console.log(typeof isAddressPresent);
    if (isAddressPresent == "true") {
      fetch(`${url}/address/edit`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          alert(res.msg);
        })
        .catch((err) => {
          console.log("Something went wrong :", err);
        });
    } else {
      fetch(`${url}/address/add`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          alert(res.msg);
          localStorage.setItem("isAddressPresent", true);
        })
        .catch((err) => {
          console.log("Something went wrong :", err);
        });
    }

    phoneShower.innerText = phone.value;
    houseShower.innerText = house.value;
    areaShower.innerText = area.value;
    cityShower.innerText = city.value;
    pincodeShower.innerText = pincode.value;
    stateShower.innerText = state.value;
    optionalShower.innerText = nearby_location.value;
    addressShowerSection.style.display = "block";

    house.value = "";
    area.value = "";
    pincode.value = "";
    city.value = "";
    state.value = "";
    phone.value = "";
    nearby_location.value = "";
  }
});

let deliverToThisAddressButton = document.getElementById("deliver-to-address");
deliverToThisAddressButton.addEventListener("click", () => {
  window.location.href = "./payment.html";
  console.log("button clicked");
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
