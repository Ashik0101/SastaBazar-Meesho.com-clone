/*<><><><><><><><><><><><><><><><> */
let url = "https://sore-blue-tadpole-gear.cyclic.app";
/*<><><><><><><><><><><><><><><><> */

let loginButton = document.querySelector(".signup-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let payload = {
    email: email.value,
    password: password.value,
  };
  console.log(payload);
  if (!email.value || !password.value) {
    alert("Please fill all the fields.");
  } else if (password.value.length < 5) {
    alert("Password Must contain atleast 5 characters!!");
  } else {
    fetch(`${url}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.msg);
        console.log(res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("userName", res.userName);
        if (res.token) {
          window.open("./cart.html");
        }
      })
      .catch((err) => console.log("some error in login:", err));

    email.value = "";
    password.value = "";
  }
});
