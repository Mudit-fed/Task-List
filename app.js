//Define UI Vars
const form =  document.querySelector("#task-form");
const taskList =  document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListener();

function loadEventListener(){
    //Add task event
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
}

//Add task
function addTask(e){
    if(taskInput.value==''){
        alert('Add a task');
    }

    //Create li element
    const li = document.createElement('li');
    li.className= 'collection-item';
    //Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create a new link element
    const link =  document.createElement('a');
    //Add class 
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li

    li.appendChild(link);
    //Append li to the ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value= '';

    e.preventDefault();
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item'))
    {
            if(confirm('are you sure')){
    e.target.parentElement.parentElement.remove();
            }
    }
}

//Clear tasks
function clearTasks(){
  //  taskList.innerHTML='';

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

