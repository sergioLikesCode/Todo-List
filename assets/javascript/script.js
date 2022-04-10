const inputTask = window.document.querySelector('input');
const buttonTask = window.document.querySelector('.button');
const taskArea = window.document.querySelector('.task-area');

const addElement = () => {
  if (inputTask.value != '') {
    // creating the element and setting your class.
    let createTask = window.document.createElement('div');
    let task = taskArea.appendChild(createTask);
    task.innerText = inputTask.value;
    task.setAttribute('class', 'task');
    // decoration.
    document.querySelector('span').style.display = 'none';
    taskArea.style.justifyContent = 'flex-start';
  } else alert('digite um texto para o lembrete!');
};

buttonTask.addEventListener('click', addElement);
