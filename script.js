const pushBtn = document.querySelector('#push');
const newTaskInput = document.querySelector('#newtask input');
const tasks = document.querySelector('#tasks');


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
        // taskName.value = newTaskInput.value;

        const taskName = document.createElement('p');
        taskName.innerHTML = newTaskInput.value;
        task.appendChild(taskName);

        const edit = document.createElement('i');
        edit.classList.add('fa-solid');
        edit.classList.add('fa-pen-to-square');
        task.appendChild(edit);
        // taskName.addEventListener("click", editTask);


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        task.appendChild(checkbox); 
        checkbox.addEventListener("click", removeTask);
    }
}

function removeTask()
{
    this.parentNode.remove();
}


function editTask()
{

}



push.addEventListener("click", addNewTask);