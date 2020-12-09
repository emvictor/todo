const listElement = document.querySelector("ul");
const inputElement = document.querySelector("#myInput");
const buttonElement = document.querySelector("#addBtn");

const toDos = JSON.parse(localStorage.getItem("list_todos")) || [];
renderTodos();

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of toDos) {
    const todoElement = document.createElement("li");
    const todoText = document.createTextNode(todo);

    const eraseBtn = document.createElement("button");
    const eraseText = document.createTextNode("Erase");
    eraseBtn.classList.add("eraseBtn");

    const pos = toDos.indexOf(todo);
    eraseBtn.setAttribute("onclick", "deleteTodo(" + pos + ")");

    todoElement.appendChild(todoText);
    todoElement.appendChild(eraseBtn);
    listElement.appendChild(todoElement);
    eraseBtn.appendChild(eraseText);
    saveToStorage();
  }
}

function addBtn() {
  if (inputElement.value == "") {
    alert("You didn't typed a To Do. Please try again.");
  } else {
    const todoText = inputElement.value;
    toDos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  }
}

function deleteTodo(pos) {
  toDos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(toDos));
}
