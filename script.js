const list = document.querySelector('.task')
const addButton = document.querySelector('.addButton')
const inputValue = document.querySelector('#inputBox')
const myform = document.querySelector('.input')
const taskArray=[];

function addTask(userValue){
    taskArray.push(userValue)
    list.innerHTML += `<div class="lists">

    ${userValue}
    <div class="iconBtn">
    <button class="icons" onclick="edit(this)"><i class="fa fa-edit"></i></button>
    
    <button class="icons" onclick="deletes(this)"><i class="fa fa-trash-o"></i></button>
    </div>
    </div>`
}

function setItems(){
 localStorage.setItem("tasks",JSON.stringify(taskArray))
}

function getItems(){
    let tasks=localStorage.getItem('tasks')
    if(!tasks)
    return

    tasks=JSON.parse(tasks)
    for(index in tasks)
    {
        addTask(tasks[index])
    }
}
getItems()
function display(e) {
    e.preventDefault()
    const userValue=inputValue.value
    const length=userValue.length
    if (length == 0) {
        alert('enter the task')
    }
    else {
        addTask(userValue);
        setItems()
    }
    inputValue.value = ''
}
// ------------------------------------------------------
function deletes(x) {
 x.parentElement.parentElement.remove()
}

function edit(x) {
    let edited = x.parentElement.parentElement.innerText;
    inputValue.value = edited;
    x.parentElement.parentElement.remove();
    setItems()
}

myform.addEventListener('submit', display)

