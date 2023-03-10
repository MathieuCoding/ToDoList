window.addEventListener('load', () => {

    const pushBtn = document.querySelector('#push');
    const newTaskInput = document.querySelector('#newtask input');
    const tasks = document.querySelector('#tasks');


    pushBtn.addEventListener("click", () => {

        if(newTaskInput.value.length == 0)
        {
            alert("Please enter a task");
        }else{
            const task = document.createElement('div');
            task.classList.add('task');
            tasks.appendChild(task);

            const taskName = document.createElement('input');
            taskName.type = "text";
            taskName.value = newTaskInput.value;
            taskName.setAttribute('readonly', 'readonly');
            task.appendChild(taskName);
            newTaskInput.value = "";

            const editLogo = document.createElement('i');
            editLogo.classList.add('fa-solid', 'fa-pen-to-square');
            task.appendChild(editLogo);

            // DONE TASK
            taskName.addEventListener('click', () => {
                if (taskName.style.textDecoration == "none")
                {
                    taskName.style.textDecoration = "line-through";
                }else {
                    taskName.style.textDecoration = "none";
                }
            });
            
            // EDIT TASK
            editLogo.addEventListener("click", () => {
                if (editLogo.classList == "fa-solid fa-pen-to-square") 
                {
                    editLogo.classList.remove("fa-pen-to-square");
                    editLogo.classList.add("fa-floppy-disk");
                    taskName.removeAttribute("readonly");
                    taskName.focus();
                } else {
                    editLogo.classList.remove("fa-floppy-disk");
                    editLogo.classList.add("fa-pen-to-square");
                    taskName.setAttribute("readonly", "readonly");
                }
            });

            // DELETE TASK
            const deleteTask = document.createElement('i');
            deleteTask.classList.add('fa-solid', 'fa-trash');
            task.appendChild(deleteTask);
            deleteTask.addEventListener("click", () => {
                deleteTask.parentNode.remove();

            });
        }
    }
    );
});