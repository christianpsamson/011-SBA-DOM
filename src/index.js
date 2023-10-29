const menuBarNode = document.querySelector(".menu");
const menuLinks = [
  { text: "menu", class: "label" },
  { text: "", class: "spacer" },
  { text: "treatments", class: "item" },
  { text: "fitness", class: "item" },
  { text: "book now", class: "item" },
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
