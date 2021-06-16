const profilePicture = document.getElementById("myImg");
const getProfilePicture = async () => {
  const response = await fetch("https://api.github.com/users/jetimlee");
  const data = await response.json();
  profilePicture.src = data.avatar_url;
};
getProfilePicture();

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  console.log("clicked");
});

const myForm = document.getElementById("myForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phonenumber");
let message = document.getElementById("message");

myForm.addEventListener("submit", (e) => {
  // const formData = {
  //   name: name.value,
  //   email: email.value,
  //   phoneNumber: phoneNumber.value,
  //   message: message.value,
  // };
  // console.log(formData);
  // let xhr = new XMLHttpRequest();
  // xhr.open("POST", "/formData");
  // xhr.setRequestHeader("content-type", "application/json");
  // xhr.onload = () => {
  //   console.log(xhr.responseText);
  //   if (xhr.responseText == "success") {
  //     alert("email sent");
  //     name.value = "";
  //     email.value = "";
  //     phoneNumber.value = "";
  //     message.value = "";
  //   } else {
  //     alert("something went wrong!");
  //   }
  // };
  // xhr.send(JSON.stringify(formData));
});
