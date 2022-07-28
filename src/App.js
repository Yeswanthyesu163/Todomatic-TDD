import './App.css';
import React,{useState} from 'react';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const submitHandler = (e, inputText) => {
    e.preventDefault();
    setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random()*1000}
    ]);
}

  return (
    <div className='App'>
      <header>
          <h1>Yeswanth's Todo List App</h1>
      </header>
      <Form
      submitHandler ={submitHandler}
      />
      <TodoList
      todos = {todos}
      setTodos = {setTodos}
      />
    </div>
  );
}

export default App;
