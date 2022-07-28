import './App.css';
import React,{useState, useEffect} from 'react';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilterredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    switch(status){
      case 'completed':
        setFilterredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterredTodos(todos);
        break;
    }
  }, [todos,status]);

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
      setStatus = {setStatus}
      />
      <TodoList
      todos = {todos}
      setTodos = {setTodos}
      filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
