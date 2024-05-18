import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  background-color: rgb(40, 44, 52);
  height : 100vh;
`;

const Header = styled.header`
  padding-top: 20px;
  font-family: Helvetica, sans-serif;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoInput = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border-radius : 10px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  border-radius : 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  background: rgb(68, 68, 68);
  padding: 10px;
  margin: 5px 0;
  width: 80%;
  border-radius: 5px;
  align-items: center;
  border-radius : 10px;
`;

const ItemText = styled.span`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: white;
  font-weight: 500;
`

const ButtonsGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const CompleteButton = styled.button`
  background: white;
  font-color: black;
  border: none;
  font-weight: 700;
  padding: 5px 10px;
  cursor: pointer;
  border-radius : 10px;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background: gray;
  font-weight: 700;
  font-size: 16px;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius : 10px;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const saveToLocal = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      saveToLocal([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleComplete = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { 
        ...todo, 
        completed: !todo.completed 
      } : todo
    );
    setTodos(newTodos);
    saveToLocal(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    saveToLocal(newTodos);
  };

  return (
    <AppContainer>
      <Header>
        <h1>투두리스트</h1>
      </Header>
      <TodoContainer>
        <TodoInput>
          <Input 
            type="text" 
            value={inputValue} 
            onChange={handleInput}
            placeholder="새로운 할 일"
          />
          <AddButton onClick={handleAdd}>추가</AddButton>
        </TodoInput>
        <List>
          {todos.map((todo, index) => (
            <Item key={index} completed={todo.completed}>
              <ItemText completed={todo.completed}>{todo.text}</ItemText>
              <ButtonsGroup>
                <CompleteButton onClick={() => handleComplete(index)}>
                  {todo.completed ? '취소' : '완료'}
                </CompleteButton>
                <DeleteButton onClick={() => handleDelete(index)}>삭제</DeleteButton>
              </ButtonsGroup>
            </Item>
          ))}
        </List>
      </TodoContainer>
    </AppContainer>
  );
}

export default App;
