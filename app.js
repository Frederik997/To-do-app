let myGoals = [];

const inputEl = document.querySelector("input");
const saveBtn = document.querySelector("button");
const deleteBtn = document.querySelector(".delete-btn");
const container = document.querySelector(".container");

// Save the goals to local storage
let localStorageGoals = JSON.parse(localStorage.getItem("myGoals"));

if (localStorageGoals) {
  myGoals = localStorageGoals;
  addGoal(myGoals);
}

// Delete all the goals
deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myGoals = [];
  addGoal(myGoals);
});

// render the goals
saveBtn.addEventListener("click", function () {
  myGoals.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myGoals", JSON.stringify(myGoals));
  addGoal(myGoals);
});
function addGoal(array) {
  let goalList = "";
  for (let i = 0; i < array.length; i++) {
    goalList += `
    <div class="list-cont">
    <label for="${array[i]}" class="list">${array[i]}</label>
    <input type="checkbox" id="${array[i]}" />
  </div>
        `;
  }
  container.innerHTML = goalList;
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  if (checkboxes) {
    for (let checkbox of checkboxes)
      checkbox.addEventListener("change", addClass);
  }
}
// Change the style of the box if checked
function addClass(e) {
  e.target.parentElement.classList.toggle("highlight");
}
