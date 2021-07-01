data = [{ id: 1, task: 'todo1', completed: true }, { id: 2, task: 'todo2', completed: true }]


const addBtnCLick = (e) => {
    console.log(document.getElementsByTagName('input')[0].value);
    var newItem = document.getElementsByTagName('input')[0].value;
    data.push({ id: ++data[data.length - 1]['id'], task: newItem, completed: false });
    drawList();
}

const deleteBtnCLick = (id) => {
    data.filter((item) => {
        item.completed = item.id == id ? false : true;

    })
    drawList();
}

function drawList() {
    var parentList = document.getElementById('todolist');
    parentList.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(data[i]['task']));

        var span = document.createElement("button");
        span.appendChild(document.createTextNode(data[i]['completed']));
        span.addEventListener("click", function test() {
            deleteBtnCLick(data[i]['id']);
        });
        li.appendChild(span);
        parentList.appendChild(li);
    }
}
drawList();

