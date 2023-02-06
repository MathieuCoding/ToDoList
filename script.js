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

        const taskName = document.createElement('p');
        taskName.innerHTML = newTaskInput.value;
        task.appendChild(taskName);

        const isDone = document.createElement('input');
        isDone.type = 'checkbox';
        task.appendChild(isDone); 



    }
}






push.addEventListener("click", addNewTask);
























// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("Kindly Enter Task Name!!!!")
//     }

//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }