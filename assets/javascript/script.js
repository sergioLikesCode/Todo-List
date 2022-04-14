const inputTask = window.document.querySelector('input');
const buttonTask = window.document.querySelector('.button');
const taskArea = window.document.querySelector('.task-area');
const deleteTask = window.document.querySelectorAll('.delete-task');
const buttonClear = window.document.querySelector('.clear');

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
    delTask.addEventListener('click', deleteTaskFunction);
    // decoration.
    document.querySelector('span').style.display = 'none';
    taskArea.style.justifyContent = 'flex-start';
  } else alert('digite um texto para o lembrete!');
};

buttonTask.addEventListener('click', addElement);
buttonClear.addEventListener('click', clearList);

window.document.addEventListener('keyup', (event) => {g
  if (event.key == 'Enter') {
    addElement();
  }
});

function deleteTaskFunction() {
  this.parentElement.remove();
  if(document.querySelectorAll('.task').length == 0) {
    document.querySelector('span').style.display = 'block';
    taskArea.style.justifyContent = 'center';
  }
}

function clearList() {
  if (document.querySelectorAll('.task').length > 0) {
    document.querySelectorAll('.task').forEach((div) => {
      div.remove();
    });
    document.querySelector('span').style.display = 'block';
    taskArea.style.justifyContent = 'center';
  } else alert('você precisa de um conteúdo para ser apagado.');
}
