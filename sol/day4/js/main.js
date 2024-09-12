var CONTAINER = document.getElementById('container');
var TASKS = document.getElementById('tasks');
var INPUT = document.getElementById('input');
var ADD_PTN = document.getElementById('add');

var tasks = [];

var addTask = () => {
  var task = INPUT.value;
  if (task) {
    tasks.push({ content: task, done: false });
    renderTasks();
  }
}

var removeTask = (index) => {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
  }
  renderTasks();
}

var markTask = (span, index) => {
  tasks[index].done = !tasks[index].done;
  span.classList.toggle('done');
}

function renderTasks() {
  TASKS.innerHTML = '';
  tasks.forEach((task, index) => {
    var li = document.createElement('li');
    var deleteButton = document.createElement('button');
    var span = document.createElement('span');

    span.innerHTML = `${index + 1}. ${task.content}`;
    deleteButton.innerHTML = 'Delete';

    deleteButton.onclick = () => {
      removeTask(index);
    };

    span.onclick = () => {
      markTask(span, index);
    };

    li.appendChild(span);
    li.appendChild(deleteButton);

    TASKS.appendChild(li);
  });
}

ADD_PTN.onclick = addTask;

renderTasks();
