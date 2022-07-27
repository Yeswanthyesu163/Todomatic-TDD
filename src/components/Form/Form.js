import React, {useState} from "react";

const Form = () => {
    const [inputText, setInputText] = useState("");

    function inputTextHandler(e) {
        setInputText(e.target.value);
    }

    return(
        <form data-testid="input-form">
            <input onChange={inputTextHandler} data-testid="input-field" type="text" className="todo-input" value={inputText}/>
            <button disabled = {!inputText ? true: false} data-testid="add-button" className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
}

export default Form;