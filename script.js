const list = document.querySelector(".task");
const addButton = document.querySelector(".addButton");
const inputValue = document.querySelector("#inputBox");
const myform = document.querySelector(".input");
let taskArray = [];

myform.addEventListener("submit", validation);

// Validation 
function validation(e) {
  e.preventDefault();
  const userValue = inputValue.value;
  const length = userValue.length;
  if (length == 0) {
    alert("enter the task");
  } else {
    accpectDate();
  }
  inputValue.value = "";
}

// Setitem in localStorage
function accpectDate() {
  taskArray.push({
    text: inputValue.value,
  });
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  addTask();
}

// Add task
function addTask() {
  list.innerHTML = "";
  taskArray.map((x, y) => {
    return (list.innerHTML += `<div class="lists" id=${y}>

    ${x.text}
    <div class="iconBtn">
    <button class="icons" onclick="edit(this)"><i class="fa fa-edit"></i></button>
    
    <button class="icons" onclick="deletes(this)" ><i class="fa fa-trash-o"></i></button>
    </div>
    </div>`);
  });
}

// Delete task
function deletes(x) {
  x.parentElement.parentElement.remove();
  taskArray.splice(x.parentElement.parentElement.id, 1);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  console.log(taskArray);
  getItem()
}

// Edit task
function edit(x) {
  let edited = x.parentElement.parentElement.innerText;
  inputValue.value = edited;
  deletes(x);
}

// Getitem in localStorage
function getItem(){
  taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
  addTask();
}
getItem()
