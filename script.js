const taskInpt = document.querySelector('#taskInpt')
const submitTaskBtn = document.querySelector('#submitTask');
const outptTasksUL = document.querySelector('#outptTasks');


submitTaskBtn.addEventListener('click', function(){
    if(taskInpt.value.trim().length > 0){
        let taskTitle = capitalizeFirstLetter(taskInpt.value)
        let taskLi = createTask(taskTitle)
        outptTasksUL.appendChild(taskLi);
    }
    taskInpt.value = '';
});


function createTask(taskTitle){
    let taskLi = document.createElement('li')
    taskLi.classList.add('taskHolder')
    let taskTemp = `
                    <p class="taskTitle">${taskTitle}</p>
                    <div class="actionButtons">
                        <button onClick = toggleCompleteTask(this.parentElement.parentElement)>Complete</button>
                        <button onClick = deleteTask(this.parentElement.parentElement)>Delete</button>
                    </div>
    `;

    taskLi.innerHTML = taskTemp;
    return taskLi;
}


function toggleCompleteTask(task){
    let paragraphNode = task.childNodes[1];

    if (paragraphNode.style.textDecoration === 'line-through') {
        paragraphNode.style.textDecoration = 'none';
      } else {
        paragraphNode.style.textDecoration= 'line-through';
      }
}

function deleteTask(taskNode){
    if(taskNode.parentNode){
        taskNode.parentNode.removeChild(taskNode);
    }
}


function capitalizeFirstLetter(string) {
    string = string.trim();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

