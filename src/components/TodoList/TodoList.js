import React from "react";
import Todo from "../Todo/Todo";



const TodoList = () => {
    return(
        <div className="todo-container">
            <ul data-testid="todo-list" className="todo-list">
               <Todo />
            </ul>
        </div>
    );
}


export default TodoList;