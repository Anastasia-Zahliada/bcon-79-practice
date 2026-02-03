//1
const headerForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const tasks = []

headerForm.addEventListener("submit", onHeaderFormSubmit)

 function onHeaderFormSubmit(event) {
  event.preventDefault()
  const form = event.target;
  const taskName = form.elements.taskName.value;
  const taskDescription = form.elements.taskDescription.value;
  const task = {name: taskName, description: taskDescription, id: Date.now() }
  tasks.push(task);
  addTask(task);
 }
 
function addTask(task) {
  
  const taskMarkup = `<li class="task-list-item">
              <button id="${task.id}" class="task-list-item-btn">Delete</button>
              <h3>${task.name}</h3>
              <p>${task.description}</p>
            </li>`
  taskList.insertAdjacentHTML("beforeend", taskMarkup)
}