//=====================================================================//
// For creating the menu bar items using array
//=====================================================================//
const menuBarNode = document.querySelector(".menu");
const menuLinks = [
  { text: "meow-nu", class: "label" },
  { text: "", class: "spacer" },
  { text: "treatments", class: "item" },
  { text: "fitness", class: "item" },
  { text: "book now", class: "item" },
  { text: "partner store", class: "item" },
];
//Create <div> elements for the menu bar
for (let i = 0; i < menuLinks.length; i++) {
  const menuDivEl = document.createElement("div");
  menuDivEl.classList.add(menuLinks[i].class);
  const menuSpanEl = document.createElement("span");
  menuSpanEl.textContent = menuLinks[i].text;
  menuDivEl.appendChild(menuSpanEl);
  menuBarNode.appendChild(menuDivEl);
}

//=====================================================================//
// Event handler - handlingContactForm, for contact page using "submit"
//=====================================================================//
const handlingContactForm = (event) => {
  event.preventDefault();
  let formName = document.getElementById("name");
  let formNameErr = document.getElementById("nameErr");
  let formEmail = document.getElementById("email");
  let formEmailErr = document.getElementById("emailErr");
  let formNum = document.getElementById("number");
  let formNumErr = document.getElementById("numErr");
  let formMsg = document.getElementById("message");
  let formMsgErr = document.getElementById("msgErr");

  // If any of the input details is empty, display an inline error message
  if (formName.value === "") {
    formNameErr.classList.add("error");
    formNameErr.textContent = "Please enter a valid name.";
    formNameErr.style.display = "block";
  }

  if (formEmail.value === "") {
    formEmailErr.classList.add("error");
    formEmailErr.textContent = "Please enter a valid email address.";
    formEmailErr.style.display = "block";
  }

  if (formNum.value === "") {
    formNumErr.classList.add("error");
    formNumErr.textContent = "Please enter a valid phone number.";
    formNumErr.style.display = "block";
  }

  if (formMsg.value === "") {
    formMsgErr.classList.add("error");
    formMsgErr.textContent =
      "Please enter a brief message about your reason to contact us.";
    formMsgErr.style.display = "block";
  }

  // After handling form submission and error messages, reset the form
  if (
    !formNameErr.classList.contains("error") &&
    !formEmailErr.classList.contains("error") &&
    !formNumErr.classList.contains("error") &&
    !formMsgErr.classList.contains("error")
  ) {
    // Reset the form fields
    event.target.reset();
  }
};
//=====================================================================//
// Register Event Handler for contact page on "submit"
//=====================================================================//
let formEl = document.getElementById("form-input");
formEl.addEventListener("submit", handlingContactForm);

//=====================================================================//
// Event handler - handleMenuButtons, using "click"
//=====================================================================//
const handleMenuButtons = (event) => {
  event.preventDefault;
  const menuSelectedName = event.target.innerText;
  const windowHeight = window.outerHeight;
  console.log(event.target.tagName);
  if (menuSelectedName === "PARTNER STORE") {
    window.open("https://happyandpolly.com");
  }
};
//=====================================================================//
// Register Event Handler for menu bar using "click"
//=====================================================================//
let menuEl = document.querySelector(".menu");
menuEl.addEventListener("click", handleMenuButtons);
