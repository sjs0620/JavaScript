const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"); //ul
const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text) {
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

<<<<<<< HEAD
    delBtn.innerText = "✖️";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = "   "+text;
=======
    delBtn.style.color="blue";
    delBtn.innerText = "❌";
    //   delBtn.innerText = heavy_multiplication_x;
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = `    ${text}`;
>>>>>>> x emoji
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault(); //새로고침 막아줌(input의 submit 기본기능막아줌)
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        // parsedToDos.forEach(function(toDo){
        //     paintToDo(toDo.text);
        // });
        parsedToDos.array.forEach(function (cvalue, cindex, carray) {
            console.log(cvalue);
            console.log(cindex);
            console.log(carray);
            debugger;
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();