import React, {useState} from "react";
import Filter from "../Filter/Filter";

const Form = ({submitHandler}) => {
    const [inputText, setInputText] = useState("");

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    function submit(e) {
        submitHandler(e, inputText);
        setInputText("");
    }

    return(
        <form data-testid="input-form">
            <input onChange={inputTextHandler} data-testid="input-field" type="text" className="todo-input" value={inputText}/>
            <button onClick={submit} disabled = {!inputText ? true: false} data-testid="add-button" className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <Filter />
        </form>
    );
}

export default Form;