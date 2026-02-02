const input = document.querySelector("input");
const task = document.querySelector(".task-list");

function addTask() {
    let date = new Date();
    document.querySelector("p").innerHTML = date.toDateString();

    if(input.value.trim() == "") {
        alert("You must enter a task!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = input.value ;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}
task.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("complete");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

if(localStorage.getItem("date")!= new Date().toDateString()){
    clearTask();
}

function clearTask(){
    task.innerHTML = "";
    localStorage.clear();
    saveData();
}

function saveData(){
    localStorage.setItem("data", task.innerHTML);
    localStorage.setItem("date", document.querySelector("p").innerHTML);

}
function showTask(){
    task.innerHTML = localStorage.getItem("data");
    document.querySelector("p").innerHTML = localStorage.getItem("date");
}
showTask();