const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addTask");

console.log(input,list,addBtn);

addBtn.addEventListener("click",()=>{
    const taskText = input.value.trim();

    if(taskText==""){
        alert("Add a Task...")
        return;
    }

    console.log(taskText);

    if(taskText){
        addTaskToDOM(taskText);
        input.value = "";
        // saveTask();
    }
})

function addTaskToDOM(text){
    const li = document.createElement("li");
    li.textContent=text;
    list.appendChild(li);
}
