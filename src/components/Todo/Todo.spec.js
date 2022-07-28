import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Todo from './Todo';
import Form from '../Form/Form';


describe("Basic rendering of the Todo Item", () => {
    it("Should Render the Todo item", () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("todo-item")).toBeDefined();
    });

    it("Should Have Complete Button", () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("complete-button")).toBeDefined();
    });

    it("Should Have Delete Button", () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("delete-button")).toBeDefined();
    });
})

describe("Testing the Functionality of the Todo Item", () => {
    it("Should be marked completed when we click on complete", () => {
        const {getByTestId} = render(<Form/>);
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hello"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getByTestId("complete-button"));
        expect(getByTestId("todo-item")).toHaveAttribute("class", "todo-item completed");
    });

    it("Should not be marked completed when we Re-click on complete", () => {
        const {getByTestId} = render(<Form/>);
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hello"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getByTestId("complete-button"));
        fireEvent.click(getByTestId("complete-button"));
        expect(getByTestId("todo-item")).toHaveAttribute("class", "todo-item ");
    });

    it("Should be deleted when we click on delete button", () => {
        const {getByTestId, queryByText} = render(<Form/>);
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hello"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getByTestId("delete-button"));
        expect(queryByText("Hello")).not.toBeInTheDocument();

    });
});