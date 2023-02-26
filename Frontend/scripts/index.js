let body = document.querySelector("body");
let mobileBtn = document.querySelector(".mobile");
let appDownloadOption = document.querySelector(".app-download-option");
mobileBtn.addEventListener("mouseover", () => {
  appDownloadOption.style.display = "grid";
  mainDropdownSection.style.display = "none";
  userProfileDropdown.style.display = "none";
});

//user profile drowpdown section
let userProfileBtn = document.querySelector(".user-profile");
let userProfileDropdown = document.querySelector(".user-profile-option");

userProfileBtn.addEventListener("mouseover", () => {
  userProfileDropdown.style.display = "grid";
  mainDropdownSection.style.display = "none";
  mainDropdownSection.style.display = "none";
  appDownloadOption.style.display = "none";
});
body.addEventListener("click", () => {
  appDownloadOption.style.display = "none";
  userProfileDropdown.style.display = "none";
  mainDropdownSection.style.display = "none";
});

//main dropdown section is here
let mainDropdownSection = document.querySelector(".drowpdown-content-parent");
let mainDropdownSectionBtn = document.querySelectorAll(".second-navbar-option");
mainDropdownSectionBtn.forEach((btn, index) => {
  btn.addEventListener("mouseenter", () => {
    mainDropdownSection.style.display = "flex";
    appDownloadOption.style.display = "none";
    userProfileDropdown.style.display = "none";
  });
});

//become a supplier part
let becomeASupplierBtn = document.querySelector(".become-a-supplier");
becomeASupplierBtn.addEventListener("mouseover", () => {
  appDownloadOption.style.display = "none";
  userProfileDropdown.style.display = "none";
  mainDropdownSection.style.display = "none";
});

//cart part
let cartBtn = document.querySelector(".cart");
cartBtn.addEventListener("mouseover", () => {
  appDownloadOption.style.display = "none";
  userProfileDropdown.style.display = "none";
  mainDropdownSection.style.display = "none";
});

// name shower part is here && hello user part

function showUser() {
  let nameShower = document.getElementById("name-shower");
  let helloUserPart = document.getElementById("hello-user-part");
  let userName = localStorage.getItem("userName") || "";
  if (userName.length) {
    nameShower.innerText = userName.substring(0, 9) + ".";
    helloUserPart.innerText = userName.substring(0, 6);
  } else {
    nameShower.innerText = "";
    helloUserPart.innerText = "User";
  }
}
showUser();
//clicking on cart option is here
let cartOptionBtn = document.querySelector(".cart");

cartOptionBtn.addEventListener("click", () => {
  let token = localStorage.getItem("token") || null;
  if (token) {
    window.location.href = "./cart.html";
  } else {
    window.location.href = "./signup.html";
  }
});

//downloading app from playstore and appstore
let playstore = document.getElementById("play-store");
let appstore = document.getElementById("app-store");
playstore.addEventListener("click", () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
  );
});

appstore.addEventListener("click", () => {
  window.open("https://apps.apple.com/us/app/meesho/id1457958492");
  console.log("btn clicked");
});

//logout options and my Order options are here
let myOrderOption = document.getElementById("my-orders-option");
let logoutButton = document.getElementById("logout-button");

myOrderOption.addEventListener("click", () => {
  let token = localStorage.getItem("token") || null;
  if (token) {
    window.location.href = "./cart.html";
  } else {
    window.location.href = "./signup.html";
  }
});
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  showUser();
});
