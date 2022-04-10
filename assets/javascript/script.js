const inputTask = window.document.querySelector('input');
const buttonTask = window.document.querySelector('.button');
const taskArea = window.document.querySelector('.task-area');
const deleteTask = window.document.querySelectorAll('.delete-task');

const addElement = () => {
  if (inputTask.value != '') {
    // creating the element and setting your class.
    let createTask = window.document.createElement('div');
    let task = taskArea.appendChild(createTask);
    task.innerText = inputTask.value;
    task.setAttribute('class', 'task');
    inputTask.value = '';
    inputTask.focus();
    // delete-task
    let delTask = window.document.createElement('div');
    let svgTask = window.document.createElement('ion-icon');
    svgTask.setAttribute('name', 'trash-outline');
    delTask.setAttribute('class', 'delete-task');
    delTask.appendChild(svgTask);
    createTask.appendChild(delTask);
    // decoration.
    document.querySelector('span').style.display = 'none';
    taskArea.style.justifyContent = 'flex-start';
  } else alert('digite um texto para o lembrete!');
};

buttonTask.addEventListener('click', addElement);

console.log(deleteTask);

window.document.querySelectorAll('.delete-task').forEach(item => {
  item.addEventListener('click', deleteTaskFunction);
  console.log('dwad');
});

function deleteTaskFunction() {
  // this.style.backgroundColor = 'purple';
  console.log('teste');
};

