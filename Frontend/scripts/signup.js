/*<><><><><><><><><><><><><><><><> */
let url = "http://localhost:4000";
/*<><><><><><><><><><><><><><><><> */
let signupButton = document.querySelector(".signup-button");
signupButton.addEventListener("click", () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let payload = {
    email: email.value,
    password: password.value,
    name: name.value,
    phone: phone.value,
  };
  if (!email.value || !password.value || !name.value || !phone.value) {
    alert("Please fill all the fields.");
  } else if (phone.value.split("").length != 10) {
    alert("Phone no. Must Be of 10 digits.");
  } else if (password.value.length < 5) {
    alert("Password Must contain atleast 5 characters!!");
  } else {
    fetch(`${url}/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.msg);
        if (res.flag == true || res.flag == "success") {
          window.open("./login.html");
        }
      })
      .catch((err) => console.log("some error in registering the user:", err));

    email.value = "";
    password.value = "";
    name.value = "";
    phone.value = "";
  }
});
