const list = document.querySelector('.task')
const addButton = document.querySelector('.addButton')
const inputValue = document.querySelector('#inputBox')
const myform = document.querySelector('.input')
function display(e) {
    e.preventDefault()
    if (!inputValue.value.length == 0) {
        list.innerHTML += `<div class="lists">

        ${inputValue.value}
        <div class="iconBtn">
        <button class="icons" onclick="edit(this)"><i class="fa fa-edit"></i></button>
        
        <button class="icons" onclick="deletes(this)"><i class="fa fa-trash-o"></i></button>
        </div>
        </div>`
    }
    else {
        alert('enter the task')
    }
    inputValue.value = ''
}
function deletes(x) {
    x.parentElement.parentElement.remove()
}
function edit(x) {
    let edited = x.parentElement.parentElement.innerText;
    inputValue.value = edited;
    x.parentElement.parentElement.remove();
}
myform.addEventListener('submit', display)

