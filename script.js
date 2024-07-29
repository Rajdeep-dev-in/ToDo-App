const enterTodo = document.getElementById("todo");
const u_list = document.querySelector(".list-tag");
let isEdited = false;
let editable_id = null;
document.querySelector(".input-form").addEventListener('submit', (e) => {
    e.preventDefault()
    if (enterTodo.value == '') return
    if (isEdited) {
        editable_id.innerText = enterTodo.value;
        editable_id = null
        isEdited = false
    } else {
        const list = document.createElement("li")
        list.setAttribute('class', 'list-item')
        const spanTag = document.createElement("span")
        spanTag.innerText = `${enterTodo.value}`
        const icon1 = document.createElement("i")
        const icon2 = document.createElement("i")
        icon1.setAttribute('class', 'fa-solid fa-pen-to-square')
        icon2.setAttribute('class', 'fa-solid fa-trash')
        icon2.addEventListener('click', deleteTask)
        icon1.addEventListener('click', editTask)
        list.appendChild(spanTag)
        list.appendChild(icon1)
        list.appendChild(icon2)
        u_list.appendChild(list)
    }
    enterTodo.value = ''
})

// for delete tasks

function deleteTask(e) {
    const list_item = e.target.parentNode;
    u_list.removeChild(list_item);

}

// edit Task 

function editTask(e) {
    isEdited = true
    console.log('edited click');
    let parent_list = e.target.parentElement;
    let edit_text = parent_list.querySelector("span");
    editable_id = edit_text;
    console.log(editable_id, 'id');
    enterTodo.value = edit_text.innerText;

}
