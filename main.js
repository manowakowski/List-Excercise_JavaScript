
const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let fontSize = 10;



btn.addEventListener("click", () => {

 liItems.forEach((liItem) => {
  liItem.style.display = "block";
  liItem.style.fontSize = fontSize + "px";
 })
 fontSize++;
})