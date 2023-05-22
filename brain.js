var input_task = document.querySelector('#input_task');
var add_task = document.querySelector('#add_task');
var task_area = document.querySelector('.task_shown_area');
add_task.addEventListener('click', addtask);
function addtask() {
    if (input_task.value === "") {
        alert("Write a task to add in lists");
    }
    else {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.innerHTML="&cross;";
        li.innerHTML = input_task.value;
        li .appendChild(span);
        task_area.appendChild(li);
    }
    input_task.value="";
    savedata();
}