const pushBtn = document.querySelector('#push');
const newTaskInput = document.querySelector('#newtask input');
const tasks = document.querySelector('#tasks');
const edit = document.querySelector('#edit');


function addNewTask()
{
    if(newTaskInput.value.length == 0)
    {
        alert("Please enter a task's name");
    }else{
        const task = document.createElement('div');
        task.classList.add('task');
        tasks.appendChild(task);

        // const taskName = document.createElement('input');
        // taskName.type = 'text';
        // taskName.classList.add('readonly');
        // taskName.value = newTaskInput.value;

        const taskName = document.createElement('p');
        taskName.innerHTML = newTaskInput.value;
        task.appendChild(taskName);

        const editLogo = document.createElement('i');
        editLogo.classList.add('fa-solid');
        editLogo.classList.add('fa-pen-to-square');
        task.appendChild(editLogo);


        editLogo.addEventListener("click", editTask);

        // const editable = document.createElement('input');
        // task.replaceChild(taskName, editable);
    

        const deleteTask = document.createElement('i');
        deleteTask.classList.add('fa-solid');
        deleteTask.classList.add('fa-trash');
        task.appendChild(deleteTask);
        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // task.appendChild(checkbox); 
        deleteTask.addEventListener("click", removeTask);
    }
}

function removeTask()
{
    this.parentNode.remove();
}


function editTask()
{
    edit.style.display = 'block';
    edit.input.value = this.taskName.value;
}



pushBtn.addEventListener("click", addNewTask);