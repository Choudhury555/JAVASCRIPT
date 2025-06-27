const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addTask");

console.log(input,list,addBtn);

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(saved);
    saved.forEach(ele => addTaskToDOM(ele.task,ele.done));
}

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
        saveTasks();
    }
})

// Handle click on tasks (toggle or delete)
list.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("done");
    }else if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
    }
    saveTasks();
})


function addTaskToDOM(text,done=false){
    const li = document.createElement("li");
    li.textContent=text;

    if(done){
        li.classList.add("done");
    }

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("del");
    delBtn.style.marginLeft="10px";


    li.appendChild(delBtn);
    list.appendChild(li);
}

function saveTasks(){
    const task = [];

    list.querySelectorAll("li").forEach(li=>{
        task.push({task:li.firstChild.textContent.trim(),done:li.classList.contains("done")});
    })

    localStorage.setItem("tasks",JSON.stringify(task))
}
