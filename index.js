const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task-input');
const addTaskForm = document.getElementById('add-task-form');

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerText = task;

    listItem.addEventListener('click', function() {
        this.remove();
    });
    todoList.appendChild(listItem);
    newTaskInput.value = ''; 
}

addTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const newTask = newTaskInput.value.trim(); 
    if (newTask) {
        addTask(newTask);
    }
});