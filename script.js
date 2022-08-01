const list = document.querySelector('.task')
const addButton = document.querySelector('.button')
function display() {
    var inputValue = document.querySelector('#inputBox')
    if (!inputValue.value.length == 0) {
        list.innerHTML += `<div class="lists">
        ${inputValue.value}
        <button class=delete onclick="deletes(this)"><i class="fa fa-trash-o"></i></button>
        </div>`
    }
    else {
        alert('enter the task')
    }
    inputValue.value = ''
}
