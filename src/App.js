import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import data from './data.json'
import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList';


function App() {
  const [todoList, setTodoList ] = useState([]);
  const [inputText, setInput] = useState("");

  useEffect(() => {
    setTodoList(data)
    console.log("use effect called!")
  }, todoList) // called everytime todoList is changed; 
  return (
    <div className="App">
      <div>
      <h1>My Todo List</h1>
      <form>
        <label>
          Add item:
          <input type="text" name="todo-item" onChange={(e) => setInput(e.target.value)}/>
        </label>
        <button type="button" onClick={(e) => console.log(inputText)}>
          Add
        </button>
      </form>
      </div>
      <div>
        <TodoList toDoList={todoList}></TodoList>
      </div>
    </div>
    
  );
}

export default App;
