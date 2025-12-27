const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const main = document.querySelector("#main");

form.addEventListener("submit", (dets) =>{
dets.preventDefault();

let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("profile");

let img = document.createElement("img");
img.src = inputs[0].value;

let name = document.createElement("h2");
name.innerText = inputs[1].value;

let occupation = document.createElement("h4");
occupation.innerText = inputs[2].value;

let p = document.createElement("p");
p.innerText = inputs[3].value;

profile.appendChild(img);
card.appendChild(profile);

card.appendChild(name);
card.appendChild(occupation);
card.appendChild(p);

main.appendChild(card);

form.reset();
})