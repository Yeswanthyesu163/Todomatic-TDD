import React from "react";


const Todo = () => {

    return(
        <div className="todo">
            <li data-testid="todo-item" className="todo-item">Something</li>
            <button data-testid="complete-button" className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button data-testid="delete-button" className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;