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
