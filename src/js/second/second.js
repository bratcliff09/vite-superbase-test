import supabase from "../../utils/supabase";

import hsl from "hsl-to-hex";
var hue = hsl(133, 40, 60);
var saturation = 40;
var luminosity = 60;
var hex = hsl(hue, saturation, luminosity);
console.log(hex); // #70c282

const app = document.querySelector("#app");
app.innerHTML = `<p>${hex}</p>`;

let superData = [];
async function init() {
  const { data, error } = await supabase.from("test").select();
  console.log(data);
  if (!error) {
    superData = data;
  }

  superData.forEach((elem) => {
    app.innerHTML += `<p>${elem.string_test}</p>`;
  });
}
init();

console.log("You're a soup");
const closeYour = import.meta.env.HOSHI;
const hitori = import.meta.env.POOPIE;
console.log(closeYour);
console.log(hitori);
console.log(import.meta.env.DEV);
console.log(import.meta.env.PROD);
console.log(import.meta.env.BASE_URL);

const apple = import.meta.env.VITE_TRASHBOAT;
console.log(apple);
