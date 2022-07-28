import React from "react";


const Todo = ({text, todo, deleteHandler, completeHandler}) => {

    return(
        <div className="todo">
            <li data-testid="todo-item" className={`todo-item ${todo && todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={() => completeHandler(todo)} data-testid="complete-button" className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={() => deleteHandler(todo)} data-testid="delete-button" className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;