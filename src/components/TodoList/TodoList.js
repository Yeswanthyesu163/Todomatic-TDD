import React from "react";
import Todo from "../Todo/Todo";



const TodoList = ({todos, setTodos}) => {
    return(
        <div className="todo-container">
            <ul data-testid="todo-list" className="todo-list">
               {todos && todos.map(todo => (
                    <Todo
                    key={todo.id} 
                    text={todo.text} 
                    todos={todos} 
                    todo={todo}
                    setTodos={setTodos} 
                    />
               ))}
            </ul>
        </div>
    );
}


export default TodoList;