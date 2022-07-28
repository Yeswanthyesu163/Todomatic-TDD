import React from "react";


const Filter = ({setStatus}) => {

    const statusHandler = (e) => {
        setStatus(e.target.value); 
    }

    return (
        <div className="select">
            <select onChange={statusHandler} data-testid="filter" name="todos" className="filter-todo">
            <option data-testid="all-option" value="all">All</option>
            <option data-testid="completed-option" value="completed">Completed</option>
            <option data-testid="uncompleted-option" value="uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}

export default Filter;