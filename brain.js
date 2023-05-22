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
task_area.addEventListener('click', (e)=>{
    if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    else if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
        
    }
})
function savedata(){
    localStorage.setItem("data",task_area.innerHTML);
}
task_area.innerHTML=localStorage.getItem("data");