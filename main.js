let error = false;
let valueArray = [];

let firstName = document.getElementById("first-name");
valueArray.push(firstName);
let lastName = document.getElementById("last-name");
valueArray.push(lastName);
let address = document.getElementById("address");
valueArray.push(address);
let city = document.getElementById("city");
valueArray.push(city);
let state = document.getElementById("state");
valueArray.push(state);
let zipCode = document.getElementById("zip-code");
valueArray.push(zipCode);
let phoneNumber = document.getElementById("phone-number");
valueArray.push(phoneNumber);
let email = document.getElementById("email");
valueArray.push(email);
let missingInfo = [];

let addressForm =  document.getElementById("shipping-address-form");

addressForm.addEventListener("submit", (event) => {
  valueArray.forEach((entry) => {
    if (entry.value === ""){
      event.preventDefault();
      error = true;
      missingInfo.push(entry);
      entry.style.border = "2px solid red";
    }
  });
  if (error === true) {
    alert("Please fill out all necessary fields.");
  }
  else {
    alert("Address successfully submitted")
  }
});
