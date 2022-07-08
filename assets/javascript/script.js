const inputTask = window.document.querySelector('input');
const buttonTask = window.document.querySelector('.button');
const taskArea = window.document.querySelector('.task-area');
const buttonClear = window.document.querySelector('.clear');
let editTaskArea = window.document.querySelector('.edit-task-area');

let isEditTaskActive = false;

buttonTask.addEventListener('click', handleAddElement);
buttonClear.addEventListener('click', handleClearList);

function handleAddElement() {
  if (inputTask.value === '') return alert('digite um texto para o lembrete!');
  if (isEditTaskActive)
    return alert(
      'Você não pode criar uma tarefa enquanto estiver editando outra.'
    );
  handleCreateElement();
  document.querySelector('span').style.display = 'none';
  inputTask.value = '';
  inputTask.focus();
}

function handleCreateElement() {
  let task = window.document.createElement('li');
  let delTask = window.document.createElement('button');
  let editTask = window.document.createElement('button');
  let taskText = window.document.createElement('span');

  let svgTask = window.document.createElement('ion-icon');
  let svgEditTask = window.document.createElement('ion-icon');
  let taskOptionsWrapper = window.document.createElement('div');

  // element properties.
  taskArea.appendChild(task);
  task.appendChild(taskOptionsWrapper);
  task.appendChild(taskText);
  delTask.appendChild(svgTask);
  editTask.appendChild(svgEditTask);
  taskOptionsWrapper.appendChild(delTask);
  taskOptionsWrapper.appendChild(editTask);

  task.setAttribute('class', 'task');
  svgTask.setAttribute('name', 'trash-outline');
  svgEditTask.setAttribute('name', 'create-outline');
  
  taskOptionsWrapper.classList.add('task-options-wrapper');
  editTask.classList.add('task-options-button');
  delTask.classList.add('task-options-button');

  taskText.innerText = inputTask.value;
  taskText.style.order = -1;
  taskArea.style.justifyContent = 'flex-start';

  delTask.addEventListener('click', handleDeleteTask);
  editTask.addEventListener('click', handleEditTask);

}

window.document.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') handleAddElement();
});

function handleDeleteTask() {
  this.parentElement.parentElement.remove();
  if (document.querySelectorAll('.task').length === 0) {
    document.querySelector('span').style.display = 'block';
    taskArea.style.justifyContent = 'center';
    closeTaskEditArea();
  }
}

function handleEditTask() {
  if (isEditTaskActive) return alert('Você já está editando uma tarefa.');
  let taskValue = this.parentElement.parentElement.children[1];
  let editTaskAreaInput = window.document.querySelector(
    '.edit-task-area input'
  );
  let editTaskAreaButton = window.document.querySelector(
    '.edit-task-area button'
  );
  let editTaskAreaCloseButton = window.document.querySelector(
    '.edit-task-area .close-button'
  );
  isEditTaskActive = true;

  // selected task color.
  this.parentElement.parentElement.style.backgroundColor = '#cdcdcd';

  editTaskAreaInput.value = taskValue.innerText;
  editTaskArea.style.display = 'flex';

  editTaskAreaButton.addEventListener('click', () => {
    taskValue.innerText = editTaskAreaInput.value;
  });

  editTaskAreaCloseButton.addEventListener('click', () => {
    closeTaskEditArea();
    // default task color.
    this.parentElement.parentElement.style.backgroundColor = '#eaeaea';
  });
}

function handleClearList() {
  if (document.querySelectorAll('.task').length > 0) {
    document.querySelectorAll('.task').forEach((div) => {
      div.remove();
    });
    document.querySelector('span').style.display = 'block';
    taskArea.style.justifyContent = 'center';
    closeTaskEditArea();
  } else alert('você precisa de um conteúdo para ser apagado.');
}

function closeTaskEditArea() {
  editTaskArea.style.display = 'none';
  isEditTaskActive = false;
}
