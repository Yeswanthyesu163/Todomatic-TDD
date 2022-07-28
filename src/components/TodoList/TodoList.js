import React from "react";
import Todo from "../Todo/Todo";



const TodoList = ({todos, setTodos}) => {

    const deleteHandler = (todo) => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = (todo) => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return(
        <div className="todo-container">
            <ul data-testid="todo-list" className="todo-list">
               {todos && todos.map(todo => (
                    <Todo
                    key={todo.id} 
                    text={todo.text} 
                    todo={todo}
                    deleteHandler = {deleteHandler}
                    completeHandler = {completeHandler}
                    />
               ))}
            </ul>
        </div>
    );
}


export default TodoList;