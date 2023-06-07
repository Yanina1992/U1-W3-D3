const myForm = document.getElementById("main-form");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const kindOfTask = document.getElementById("task");
  const retrievedTask = kindOfTask.value;
  console.log("Cose da fare:", retrievedTask);

  let newTask = document.createElement("li");
  newTask.classList.add("list-items");
  newTask.innerHTML = `
  <a>${retrievedTask}</a>
  <button>Delete</button>
  `;

  const savedTasks = document.getElementById("task-list");
  savedTasks.appendChild(newTask);

  const allTheDeleteButtons = document.querySelectorAll(".list-items");
  allTheDeleteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      let buttonIJustClicked = e.target;
      let taskToRemove = buttonIJustClicked.parentElement;
      taskToRemove.remove();
    });
  });

  kindOfTask.value = "";

  const completedTasks = document.querySelectorAll("li");
  completedTasks.forEach((a) => {
    a.addEventListener("click", function (e) {
      let taskIJustClicked = e.target;
      let taskDone = taskIJustClicked.classList.toggle("task-done");
    });
  });
});
