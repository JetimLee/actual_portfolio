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

// const getSkyScanner = async () => {
//   try {
//     const response = await fetch(
//       "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/TLV-sky/JFK-sky/2021-12-01?inboundpartialdate=2021-12-01",
//       {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key":
//             "ba4689c2b7msh3e2c25d27cbd448p10bdb4jsn06da0d93a122",
//           "x-rapidapi-host":
//             "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getSkyScanner();
