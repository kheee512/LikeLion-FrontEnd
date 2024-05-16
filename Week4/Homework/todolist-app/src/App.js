import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleAddTodo = () => {
    if(inputValue.trim()) {
      setTodos([...todos, { text : inputValue, completed: false}]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }

  
  
  return (


    <div className="App">

      <header className="App-header">
        
        <h1>투두리스트</h1>

        <div className="todo-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="할 일 추가하기"
          />

          <button onClick={handleAddTodo}>할일 추가하기</button>
        </div>

      </header>

      

    </div>




  );
}

export default App;
