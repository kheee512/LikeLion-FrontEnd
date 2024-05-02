let todos_list = []; // 할 일 목록을 저장할 배열

// 새로운 투두 추가하는 함수
function addTodo() {
    // 입력 필드에서 할 일을 입력 받고 공백을 제거하여 값 가져옴
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    // 값을 입력 받았다면, 할 일을 새로운 객체로 투무목록에 추가
    if (todoText) {
        todos_list.push({ text: todoText, completed: false });
        input.value = ''; // 입력 필드 초기화하기

        // 새로운 할 일이 추가되면, 목록 업데이트하는 함수를 호출하여 목록을 업데이트
        updateTodoList();
    }
}

// 해당 인덱스의 할 일을 할 일 배열에서 삭제하여 투두 아이템 제거
function removeItem(index) {
    // 배열에서 항목을 제거한다
    todos_list.splice(index, 1);

    // 항목을 제거한 이후 목록을 업데이트한다
    updateTodoList();
}

// 해당 인덱스의 할 일을 완료 또는 완료 취소하는 함수
function toggleComplete(index) {
    // 해당 인덱스의 할 일 아이템의 완료 상태를 반대 상태로 바꾼다
    // 완료 -> 미완료
    // 미완료 -> 완료
    todos_list[index].completed = !todos_list[index].completed;

    // 아이템의 상태를 바꿨다면 목록을 업데이트하는 함수를 호출한다
    updateTodoList();
}

// 해당 인덱스의 할 일 아이템을 수정하는 함수
function editTodo(index) {
    // 사용자가 새롭게 수정할 텍스트를 입력 받는다
    const newText = prompt("할 일 수정하기 :", todos_list[index].text).trim();

    if (newText) {
        // 새 텍스트로 할 일 아이템을 수정한다
        todos_list[index].text = newText;

        // 텍스트가 수정되었다면 목록을 업데이트하는 함수를 호출한다
        updateTodoList();
    }
}

// 화면에 표시되는 할 일 리스트를 업데이트하는 함수
function updateTodoList() {
    // 할 일 목록을 표시할 요소를 가져온다
    const list = document.getElementById('todo-list');
    // list 목록을 초기화한다
    list.textContent = '';

    // 할 일 목록을 순회하며 각 할 일 아이템을 화면에 표시한다
    todos_list.forEach((todo, index) => {
        // 할 일 아이템을 표시할 엘리먼트를 생성한다
        const listItem = document.createElement('li');


        // 완료 버튼 생성
        const toggleBtn = document.createElement('button');
        // 완료 상태에 따라 버튼의 텍스트를 다르게 설정
        if (todo.completed) {
            toggleBtn.textContent = '완료 취소';
        } else {
            toggleBtn.textContent = '완료';
        }
        toggleBtn.className = 'complete-button';
        toggleBtn.onclick = () => toggleComplete(index); // 완료 버튼을 클릭하면 완료 상태를 토글
        listItem.appendChild(toggleBtn); // 완료 버튼을 리스트 아이템에 추가


        // 할 일 텍스트를 표시할 span 엘리먼트를 생성
        const todoTextSpan = document.createElement('span');
        // 완료 상태에 따라 텍스트의 스타일을 다르게 설정
        if (todo.completed) {
            todoTextSpan.className = 'completed'; // 완료된 할 일은 취소선을 긋는다
        } else {
            todoTextSpan.className = ''; // 미완료된 할 일은 취소선을 없앰
        }
        todoTextSpan.textContent = todo.text; // 할 일 텍스트를 span 엘리먼트에 추가
        listItem.appendChild(todoTextSpan); // span 엘리먼트를 리스트 아이템에 추가



        // 수정 및 삭제 버튼을 담을 div 엘리먼트 생성
        const buttons = document.createElement('div');
        buttons.className = 'buttons'; // div 엘리먼트에 클래스 추가


        // 수정 버튼 생성
        const editBtn = document.createElement('button');
        editBtn.textContent = '수정';
        editBtn.className = 'edit-button';
        // 수정 버튼을 클릭하면 해당 인덱스의 할 일 아이템을 수정하는 함수를 호출
        editBtn.onclick = (event) => {
            editTodo(index);
        };
        buttons.appendChild(editBtn); // 수정 버튼을 div 엘리먼트에 추가


        // 삭제 버튼 생성
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.className = 'delete-button';
        // 삭제 버튼을 클릭하면 해당 인덱스의 할 일 아이템을 삭제하는 함수를 호출
        deleteBtn.onclick = (event) => {
            removeItem(index); // 해당 인덱스의 할 일 아이템을 삭제
        };
        buttons.appendChild(deleteBtn); // 삭제 버튼을 div 엘리먼트에 추가

        //ㅇ

        // 생성한 엘리먼트들을 리스트에 추가
        listItem.appendChild(buttons);
        // 리스트에 추가
        list.appendChild(listItem);
    });
    // 할 일 목록이 업데이트 되었으므로 할 일 갯수와 완료된 할 일 갯수를 업데이트
    document.getElementById('todo-count').textContent = todos_list.length;
    document.getElementById('completed-count').textContent = todos_list.filter(todo => todo.completed).length;
}