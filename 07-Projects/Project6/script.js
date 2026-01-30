const addFormBtn = document.querySelector(".add-form");
const form = document.querySelector("#callForm");
const cardStack = document.querySelector(".card-stack");
const closeFormBtn = document.querySelector("#close");

const imgInput = document.querySelector("input[name='image']");
const nameInput = document.querySelector("input[name='name']");
const townInput = document.querySelector("input[name='town']");
const purposeInput = document.querySelector("input[name='purpose']");
const radioBtns = document.querySelectorAll("input[type='radio']");

// Show form
addFormBtn.addEventListener("click", () => {
  form.classList.remove("hidden");      
});

// Close form
closeFormBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});

// Save to localStorage
function saveInfo(obj) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const imgVal = imgInput.value.trim();
  const nameVal = nameInput.value.trim();
  const townVal = townInput.value.trim();
  const purposeVal = purposeInput.value.trim();
  let categoryVal = null;

  radioBtns.forEach((cat) => {
    if (cat.checked) categoryVal = cat.value;
  });

  if (!imgVal || !nameVal || !townVal || !purposeVal || !categoryVal) {
    alert("Please fill all fields and select a category!");
    return;
  }

  saveInfo({
    img: imgVal,
    name: nameVal,
    town: townVal,
    purpose: purposeVal,
    category: categoryVal,
  });

  form.reset();
  form.classList.add("hidden");
  showCards();
});

// Render cards
function showCards() {
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  cardStack.innerHTML = "";

  allTasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.level = index + 1; // apply stacking style
    card.dataset.category = task.category;

    const profile = document.createElement("div");
    profile.classList.add("profile");

    const imgEl = document.createElement("img");
    imgEl.src = task.img;
    imgEl.alt = task.name;
    imgEl.onerror = () => {
      imgEl.src = "https://via.placeholder.com/100";
    };

    const profileText = document.createElement("div");
    const nameEl = document.createElement("h3");
    nameEl.textContent = task.name;
    const townEl = document.createElement("p");
    townEl.classList.add("muted");
    townEl.textContent = task.town;

    profileText.append(nameEl, townEl);
    profile.append(imgEl, profileText);

    const info = document.createElement("div");
    info.classList.add("info");

    const infoLeft = document.createElement("div");
    const purposeLabel = document.createElement("span");
    purposeLabel.classList.add("label");
    purposeLabel.textContent = "Purpose";
    const purposeValue = document.createElement("span");
    purposeValue.classList.add("value");
    purposeValue.textContent = task.purpose;

    infoLeft.append(purposeLabel, document.createElement("br"), purposeValue);

    const categoryEl = document.createElement("span");
    categoryEl.classList.add("label");
    categoryEl.textContent = task.category;

    info.append(infoLeft, categoryEl);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const callBtn = document.createElement("button");
    callBtn.classList.add("btn", "dark");
    callBtn.textContent = "Call";
    callBtn.addEventListener("click", () => {
      alert(`Calling ${task.name}`);
    });

    const msgBtn = document.createElement("button");
    msgBtn.classList.add("btn", "light");
    msgBtn.textContent = "Message";
    msgBtn.addEventListener("click", () => {
      alert(`Messaging ${task.name}`);
    });

    actions.append(callBtn, msgBtn);

    card.append(profile, info, actions);
    cardStack.appendChild(card);
  });
}

// Load cards on page start
document.addEventListener("DOMContentLoaded", showCards);

showCards();