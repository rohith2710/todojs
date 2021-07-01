var todoData = [{ task: "todo1", completed: false, id: 1 },
{ task: "todo2", completed: false, id: 2 }];

function addTask() {
    taskValue = document.getElementById('inputValue').value;
    console.log(taskValue);
    newTask = {
        task: taskValue,
        completed: false,
        id: todoData.length + 1
    }
    todoData.push(newTask);
    drawList();
}

function deleteItem(id) {
    todoData.filter((item) => {
        item.completed = (item.id == id) ? todoData.splice(id, 1) : item.completed;
    })
    drawList();
}


function drawList() {

    var ulList = document.getElementById('list');
    ulList.innerHTML = '';
    var ulList = document.getElementById('list');
    for (var i = 0; i < todoData.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(todoData[i]['task']));
        ulList.appendChild(li);

        var btn = document.createElement('button');
        btn.innerHTML = 'Delete';
        // btn.setAttribute('id', todoData[i]['id']);
        btn.id = todoData[i]['id'];
        // iD = todoData[i]['id'];
        btn.addEventListener('click', function (e) {
            deleteItem(e.currentTarget.id);
        })
        li.append(btn);
    }

}


drawList();












console.log(todoData);
