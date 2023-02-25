let form = document.getElementById("form");
let saveAddressBtn = document.querySelector(".submit-address-button");
saveAddressBtn.addEventListener("click", () => {
  //   console.log("button clicked");
  let obj = {
    mobile: document.getElementById("mobile").value,
    house_no: document.getElementById("house_no").value,
  };
  console.log(obj);
});
