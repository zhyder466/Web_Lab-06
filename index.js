const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task-input');
const addTaskForm = document.getElementById('add-task-form');

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${task}</span>
        <i class="fas fa-times remove-task"></i>
    `;

    const removeButton = listItem.querySelector('.remove-task');

    removeButton.addEventListener('click', function() {
        listItem.remove();
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
