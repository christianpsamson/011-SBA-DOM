// const menuBarNode = document.querySelector(".menu");
// const menuLinks = [
//   { text: "meow-nu", class: "label" },
//   { text: "", class: "spacer" },
//   { text: "treatments", class: "item" },
//   { text: "fitness", class: "item" },
//   { text: "book now", class: "item" },
// ];
// //Create <div> elements for the menu bar
// for (let i = 0; i < menuLinks.length; i++) {
//   const menuDivEl = document.createElement("div");
//   menuDivEl.classList.add(menuLinks[i].class);
//   const menuSpanEl = document.createElement("span");
//   menuSpanEl.textContent = menuLinks[i].text;
//   menuDivEl.appendChild(menuSpanEl);
//   menuBarNode.appendChild(menuDivEl);
// }

//=====================================================================//
// Event handler for contact page
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
};
//=====================================================================//
// Register Event Handler for contact page
//=====================================================================//
let formEl = document.getElementById("form-input");
formEl.addEventListener("submit", handlingContactForm);
