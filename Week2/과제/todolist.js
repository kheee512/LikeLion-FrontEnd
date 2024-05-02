let todos_list = [];

function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText) {
        todos_list.push({ text: todoText, completed: false });
        input.value = '';

        updateTodoList();
    }
}

function removeItem(index) {
    todos_list.splice(index, 1);

    updateTodoList();
}

function toggleComplete(index) {
    todos_list[index].completed = !todos_list[index].completed;

    updateTodoList();
}

function editTodo(index) {
    const newText = prompt("할 일 수정하기 :", todos_list[index].text).trim();

    if (newText) {
        todos_list[index].text = newText;

        updateTodoList();
    }
}

function updateTodoList() {
    const list = document.getElementById('todo-list');
    list.textContent = '';

    todos_list.forEach((todo, index) => {
        const listItem = document.createElement('li');



        
        const toggleBtn = document.createElement('button');
        if (todo.completed) {
            toggleBtn.textContent = '완료 취소';
        } else {
            toggleBtn.textContent = '완료';
        }
        toggleBtn.className = 'complete-button';
        toggleBtn.onclick = () => toggleComplete(index);
        listItem.appendChild(toggleBtn);



        const todoTextSpan = document.createElement('span');
        if (todo.completed) {
            todoTextSpan.className = 'completed';
        } else {
            todoTextSpan.className = '';
        }
        todoTextSpan.textContent = todo.text;
        listItem.appendChild(todoTextSpan);




        const buttons = document.createElement('div');
        buttons.className = 'buttons';



        const editBtn = document.createElement('button');
        editBtn.textContent = '수정';
        editBtn.className = 'edit-button';
        editBtn.onclick = (event) => {
            editTodo(index);
        };
        buttons.appendChild(editBtn);



        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.className = 'delete-button';
        deleteBtn.onclick = (event) => {
            removeItem(index);
        };
        buttons.appendChild(deleteBtn);




        listItem.appendChild(buttons);
        list.appendChild(listItem);
    });

    document.getElementById('todo-count').textContent = todos_list.length;
    document.getElementById('completed-count').textContent = todos_list.filter(todo => todo.completed).length;
}