import React, {useState} from "react";
import TodoList from "../TodoList/TodoList";

const Form = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("");
    }

    return(
        <div>
            <form data-testid="input-form">
                <input onChange={inputTextHandler} data-testid="input-field" type="text" className="todo-input" value={inputText}/>
                <button onClick={submitHandler} disabled = {!inputText ? true: false} data-testid="add-button" className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
            <TodoList
            todos = {todos}
            setTodos = {setTodos}
            />
        </div>
    );
}

export default Form;