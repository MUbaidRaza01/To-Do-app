var idCount = 1;

function addTodo() {
    var todos = document.getElementById('todos');
    var inpVal = document.getElementById('inp');

    if (inpVal.value.trim() === "") {
        alert("Please add a Todo task!");
        return;
    }

    var element = document.createElement('div');
    element.setAttribute('id', idCount);
    element.style.padding = "10px";
    element.style.margin = "5px 0";
    element.style.backgroundColor = "#f9f9f9";
    element.style.border = "1px solid #ddd";
    element.style.borderRadius = "5px";
    element.style.display = "flex";
    element.style.justifyContent = "space-between";
    element.style.alignItems = "center";

    element.innerHTML = `
        <p style="margin: 0; font-size: 16px;">${inpVal.value}</p>
        <div>
            <button onclick="deleteTodo(${idCount})" style="margin-right: 5px; padding: 5px 10px; background-color: #ff4d4d; color: white; border: none; border-radius: 3px; cursor: pointer;">Delete</button>
            <button onclick="updateTodoPrompt(${idCount})" style="padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 3px; cursor: pointer;">Update</button>
        </div>
    `;

    todos.appendChild(element);
    idCount++;
    inpVal.value = "";
}

function deleteTodo(id) {
    var deletedItem = document.getElementById(id);
    deletedItem.remove();
}

function updateTodoPrompt(id) {
    var newTodo = prompt("Update your todo:");
    if (newTodo === null || newTodo.trim() === "") {
        alert("Updated todo cannot be empty!");
        return;
    }

    var todoItem = document.getElementById(id);
    todoItem.children[0].innerText = newTodo;
}
