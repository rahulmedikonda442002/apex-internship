function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === "") {
        alert("All fields are required");
        return false;
    }

    alert("Form Submitted");
    return true;
}

function addTask() {
    let task = document.getElementById("taskInput").value;

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);
}