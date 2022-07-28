import React from "react";
import {render, fireEvent} from '@testing-library/react';
import Filter from "./Filter";
import App from "../../App";

describe("Basic rendering of TodoList Component", () => {
    it("Should Render the Todolist", () => {
        const { getByTestId } = render(<Filter />);
        expect(getByTestId("filter")).toBeDefined();
    });

    it("Should Have All Option", () => {
        const { getByTestId } = render(<Filter />);
        expect(getByTestId("all-option")).toBeDefined();
    });

    it("Should Have Completed Option", () => {
        const { getByTestId } = render(<Filter />);
        expect(getByTestId("completed-option")).toBeDefined();
    });

    it("Should Have Uncompleted Option", () => {
        const { getByTestId } = render(<Filter />);
        expect(getByTestId("uncompleted-option")).toBeDefined();
    });
});

describe("Testing the Functionality of the Filter", () => {
    it("Must Show only Completed Tasks when we Click on Completed Option", () => {
        const {getByTestId, getAllByTestId} = render(<App/>);
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hello"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hii"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "Welcome"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getAllByTestId("complete-button")[0]);
        fireEvent.click(getAllByTestId("complete-button")[1]);
        fireEvent.change(getByTestId("filter"), {target:{value: "completed"}});
        expect(getAllByTestId("todo-item")[0]).toHaveTextContent("Hello");
        expect(getAllByTestId("todo-item")[1]).toHaveTextContent("Hii");
    });

    it("Must Show only UnCompleted Tasks when we Click on Uncompleted Option", () => {
        const {getByTestId, getAllByTestId} = render(<App/>);
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hello"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hii"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "Welcome"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getAllByTestId("complete-button")[0]);
        fireEvent.change(getByTestId("filter"), {target:{value: "uncompleted"}});
        expect(getAllByTestId("todo-item")[0]).toHaveTextContent("Hii");
        expect(getAllByTestId("todo-item")[1]).toHaveTextContent("Welcome");
    });

    it("Must Show All Taks when we Click on All Option regardless of it being completed or not", () => {
        const {getByTestId, getAllByTestId} = render(<App/>);
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hello"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hii"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "Welcome"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getAllByTestId("complete-button")[0]);
        fireEvent.click(getAllByTestId("complete-button")[1]);
        fireEvent.change(getByTestId("filter"), {target:{value: "completed"}});
        fireEvent.change(getByTestId("filter"), {target:{value: "all"}});
        expect(getAllByTestId("todo-item")[0]).toHaveTextContent("Hello");
        expect(getAllByTestId("todo-item")[1]).toHaveTextContent("Hii");
        expect(getAllByTestId("todo-item")[2]).toHaveTextContent("Welcome");
    });
   
});