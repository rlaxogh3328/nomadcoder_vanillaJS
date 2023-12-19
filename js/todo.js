const toDoForm = document.querySelector("#todo-form");

const toDoInput = toDoForm.querySelector("input");
//is same with document.querySelector("#todo-form input");

const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.value;
  const button = document.createElement("button");
  li.appendChild(span);
  toDoList.appendChild(li);
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  li.remove();
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    value: newTodo,
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos != null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintTodo);
}
