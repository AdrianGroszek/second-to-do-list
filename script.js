const newTaskInput = document.getElementById('new-task-input');
const tasksContainer = document.querySelector('.tasks');

const newTaskSubmitBtn = document.getElementById('new-task-submit');

const createTaskHtml = function (input) {
	const taskParentEl = document.createElement('div');
	taskParentEl.classList.add('task');

	const taskText = document.createElement('div');
	taskText.classList.add('content');

	const taskTextInput = document.createElement('input');
	taskTextInput.setAttribute('type', 'text');
	taskTextInput.classList.add('task__text');
	taskTextInput.setAttribute('value', `${input}`);
	taskTextInput.setAttribute('readonly', '');

	const taskBtnContainer = document.createElement('div');
	taskBtnContainer.classList.add('actions');

	const buttonElEdit = document.createElement('button');
	buttonElEdit.classList.add('edit-btn', 'btn');
	buttonElEdit.textContent = 'Edit';

	const buttonElDelete = document.createElement('button');
	buttonElDelete.classList.add('delete-btn', 'btn');
	buttonElDelete.textContent = 'Delete';

	tasksContainer.appendChild(taskParentEl);
	taskParentEl.appendChild(taskText);
	taskParentEl.appendChild(taskBtnContainer);
	taskText.appendChild(taskTextInput);
	taskBtnContainer.appendChild(buttonElEdit);
	taskBtnContainer.appendChild(buttonElDelete);

	buttonElEdit.addEventListener('click', () => {
		if (buttonElEdit.textContent.toLowerCase() === 'edit') {
			taskTextInput.removeAttribute('readonly');
			taskTextInput.focus();
			buttonElEdit.textContent = 'Save';
			taskTextInput.classList.add('edit');
		} else {
			taskTextInput.setAttribute('readonly', '');
			buttonElEdit.textContent = 'Edit';
			taskTextInput.classList.remove('edit');
		}
	});

	buttonElDelete.addEventListener('click', () => {
		taskParentEl.remove();
	});
};

const addTask = function (e) {
	e.preventDefault();

	const inputValue = newTaskInput.value;

	if (!inputValue) {
		alert('Field cannot be empty, write your task.');
		return;
	}

	if (inputValue) {
		createTaskHtml(inputValue);
	}

	newTaskInput.value = '';
};

newTaskSubmitBtn.addEventListener('click', addTask);
