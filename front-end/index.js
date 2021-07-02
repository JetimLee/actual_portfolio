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

phoneNumber.addEventListener("keyup", (e) => {
  phoneNumber = e.target.value;
  console.log(phoneNumber);
});

const validPhone =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

myForm.addEventListener("submit", (e) => {
  console.log(phoneNumber);
  console.log(validPhone.test(phoneNumber).value);
  if (validPhone.test(phoneNumber)) {
    return phoneNumber;
  } else {
    alert(`Please enter a valid phone number`);
    e.preventDefault();
    return;
  }
});
