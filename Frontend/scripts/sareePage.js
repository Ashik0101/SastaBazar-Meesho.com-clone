// navbar section are here
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

/*<><><><><><><><><><><><><><><><><><><><><><><><> */
/*<><><><><><><><><><><><><><><><><><><><><> */
// main url
const url = "http://localhost:4000/product";
/*<><><><><><><><><><><><><><><><><><><><><> */
// Get all the option and sub-option divs      // Get all the option and sub-option divs

const categoryOption = document.querySelector(".category-option");
const priceOption = document.querySelector(".price-option");
const colorOption = document.querySelector(".color-option");
const genderOption = document.querySelector(".gender-option");
const ratingOption = document.querySelector(".rating-option");

const sareeSubOption = document.querySelector(".saree-sub-option");
const watchesSubOption = document.querySelector(".watches-sub-option");
const shoesSubOption = document.querySelector(".shoes-sub-option");
const tshirtsSubOption = document.querySelector(".tshirts-sub-option");
const kurtasSubOption = document.querySelector(".kurtas-sub-option");

const priceSubOption = document.querySelectorAll(".price-sub-option");
const colorSubOption = document.querySelectorAll(".color-sub-option");
const maleSubOption = document.querySelector(".male-sub-option");
const femaleSubOption = document.querySelector(".female-sub-option");
const ratingSubOption = document.querySelectorAll(".rating-sub-option");
const subOptions = document.querySelectorAll(".sub-option");

const paginationBtns = document.querySelectorAll(".pagination_btn");

// Add event listeners to the option divs
let sareeCount = 0;
categoryOption.addEventListener("click", () => {
  subOptions.forEach((subOption) => (subOption.style.display = "none"));
  sareeCount++;
  if (sareeCount == 1) {
    sareeSubOption.style.display = "block";
    watchesSubOption.style.display = "block";
    shoesSubOption.style.display = "block";
    tshirtsSubOption.style.display = "block";
    kurtasSubOption.style.display = "block";
  } else {
    sareeSubOption.style.display = "none";
    watchesSubOption.style.display = "none";
    shoesSubOption.style.display = "none";
    tshirtsSubOption.style.display = "none";
    kurtasSubOption.style.display = "none";
    sareeCount = 0;
  }
});

// console.log(subOptions);

let priceCount = 0;
priceOption.addEventListener("click", () => {
  subOptions.forEach((subOption) => (subOption.style.display = "none"));
  priceCount++;
  priceSubOption.forEach((el) => {
    if (priceCount == 1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
      priceCount = 0;
    }
  });
});

let countColor = 0;
colorOption.addEventListener("click", () => {
  subOptions.forEach((subOption) => (subOption.style.display = "none"));
  countColor++;
  colorSubOption.forEach((el) => {
    if (countColor == 1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
      countColor = 0;
    }
  });
});

let genderCount = 0;
genderOption.addEventListener("click", () => {
  subOptions.forEach((subOption) => (subOption.style.display = "none"));
  genderCount++;
  if (genderCount == 1) {
    maleSubOption.style.display = "block";
    femaleSubOption.style.display = "block";
  } else {
    maleSubOption.style.display = "none";
    femaleSubOption.style.display = "none";
    genderCount = 0;
  }
});

//rating option is here
let ratingCount = 0;
ratingOption.addEventListener("click", () => {
  ratingCount++;
  subOptions.forEach((subOption) => {
    subOption.style.display = "none";
    if (ratingCount == 1) {
      ratingSubOption.forEach((el) => {
        el.style.display = "flex";
      });
    } else {
      ratingSubOption.forEach((el) => {
        el.style.display = "none";
        ratingCount = 0;
      });
    }
  });
});

// // Add event listeners to the sub-option divs to hide all the sub-option divs when clicked
subOptions.forEach((subOption) => {
  subOption.addEventListener("click", () => {
    subOptions.forEach((subOption) => (subOption.style.display = "none"));
  });
});

// here is fetching part and appending to dom

let arr = [];
window.addEventListener("load", () => {
  fetch(`${url}/saree`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      arr = res;
      appendToDom(arr);
    })
    .catch((err) => {
      console.log("Some error in fetching data from load event!!");
    });
});

//dom related things all are here
let product_container = document.getElementById("product_container");

let ratingPNGArr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJUUAAaPpWoY5xtF6V_j5gU4NRig1d-DPuQ&usqp=CAU",
];

//local storage part is here
let localData = JSON.parse(localStorage.getItem("cart_data")) || [];
//updating cart data everytime
let cart_total_quanity_updater = document.getElementById(
  "cart_total_quanity_updater"
);
function totalCartDataUpdater(localData) {
  if (localData.length) {
    cart_total_quanity_updater.innerText = localData.length;
    cart_total_quanity_updater.classList.add("cart_data_after_addition");
  } else {
    cart_total_quanity_updater.classList.remove("cart_data_after_addition");
  }
}
totalCartDataUpdater(localData);

//append to dom function is here
function appendToDom(arr) {
  product_container.innerHTML = null;
  if (arr.length) {
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

      let ratingDiv = document.createElement("div");
      ratingDiv.classList.add("ratingDiv");
      let ratingImgDiv = document.createElement("div");
      ratingImgDiv.classList.add("ratingImgDiv");
      let ratingContent = document.createElement("div");
      ratingContent.innerHTML = `<p>${
        element.rating ? element.rating : 4.5
      } <p/>`;
      let ratingImg = document.createElement("img");
      ratingImg.setAttribute("src", ratingPNGArr[0]);
      ratingImgDiv.append(ratingImg);

      ratingDiv.append(ratingContent, ratingImgDiv);
      img_div.append(img);
      let review = document.createElement("p");
      review.classList.add("review");
      review.innerText = element.review
        ? `${element.review} reviews`
        : Math.floor(Math.random() * (50000 - 500 + 1)) + 500 + " reviews";

      let addToCartButton = document.createElement("button");
      addToCartButton.setAttribute("id", "add_to_cart_button");
      let flag = false;
      for (let i = 0; i < localData.length; i++) {
        if (localData[i].id == element.id) {
          flag = true;
        }
      }
      if (flag == true) {
        addToCartButton.innerText = "Go To Cart";
        addToCartButton.style.backgroundColor = "#76FF03";
        addToCartButton.style.color = "#212121";
      } else {
        addToCartButton.innerText = "Add To Cart";
      }

      addToCartButton.addEventListener("click", () => {
        let flag = false;
        for (let i = 0; i < localData.length; i++) {
          if (localData[i].id == element.id) {
            flag = true;
            break;
          }
        }
        if (flag === true) {
          alert("Product Already in the Cart !");
          appendToDom(arr);
        } else {
          localData.push({ ...element, quantity: 1 });
          localStorage.setItem("cart_data", JSON.stringify(localData));
          totalCartDataUpdater(localData);
          alert("Product Added To Cart !");
          appendToDom(arr);
        }
      });
      card_content.append(
        title,
        price,
        delievery_charge,
        ratingDiv,
        review,
        addToCartButton
      );

      card.append(img_div, card_content);
      product_container.append(card);
    });
  } else {
    product_container.innerHTML = `<h1>No Products Found !!<h1/>`;
  }
}

//fetching by query that is the filter functionality
/*<><><><><><><><><><><><><><><><><><><><><><><><> */

// const category_sub_option = document.querySelectorAll(".category_sub_option");
// category_sub_option.forEach((element) => {
//   element.addEventListener("click", () => {
//     let data_category = element.getAttribute("data-category");
//     fetchWithQueryFunction(data_category);
//   });
// });

// function fetchWithQueryFunction(query) {
//   debugger;
//   console.log(`${url}?category=${query}`);
//   fetch(`${url}?category=${query}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       appendToDom(res);
//     })
//     .catch((err) => {
//       console.log("something went wrong :", err);
//     });
// }

/*<><><><><><><><><><><><><><><><><> */
/*fetching according to the price  */
priceSubOption.forEach((el) => {
  el.addEventListener("click", () => {
    let data_price = +el.getAttribute("data-price");
    console.log(typeof data_price);
    let query = "price";
    fetchWithPriceFunction(data_price, query);
  });
});

function fetchWithPriceFunction(data_price, query) {
  console.log("This is the url :" + `${url}?${query}=${data_price}`);
  fetch(`${url}/saree?${query}=${data_price}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      appendToDom(res);
    })
    .catch((err) => {
      console.log(
        "something went wrong from filtering from price in saree :",
        err
      );
    });
}

/*filtering by rating option */
/*<><><><><><><><><><><><><> */
ratingSubOption.forEach((ratingbtn) => {
  ratingbtn.addEventListener("click", () => {
    let query = "rating";
    let data_id = ratingbtn.getAttribute("data-id");
    fetchWithPriceFunction(data_id, query);
  });
});

//pagination buttons are here
paginationBtns.forEach((paginationBtn) => {
  paginationBtn.addEventListener("click", () => {
    let page_no = +paginationBtn.getAttribute("data-id");
    pagination(page_no);
    paginationBtns.forEach((el) => {
      let page_no_again = +el.getAttribute("data-id");
      if (page_no == page_no_again) {
        el.style.backgroundColor = "#ff10a7";
        el.style.color = "white";
      }
      if (page_no !== page_no_again) {
        el.style.backgroundColor = "#ffd4ef";
        el.style.color = "black";
      }
      console.log(page_no_again);
    });
  });
});

function pagination(page_no) {
  fetch(`${url}/saree/pagination?page=${page_no}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      arr = res;
      appendToDom(arr);
    })
    .catch((err) => {
      console.log(
        "Some error in fetching data while pagination in saree data!!"
      );
    });
}
// name shower part is here
let nameShower = document.getElementById("name-shower");
let userName = localStorage.getItem("userName") || "";
if (userName.length) {
  nameShower.innerText = userName.substring(0, 7);
} else {
  nameShower.innerText = "userName";
}

//clicking on cart option is here
let cartOptionBtn = document.querySelector(".cart");
let token = localStorage.getItem("token") || null;
cartOptionBtn.addEventListener("click", () => {
  if (token) {
    window.open("./cart.html");
  } else {
    window.open("./signup.html");
  }
});
