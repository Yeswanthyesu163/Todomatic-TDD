import React from "react";
import {render} from '@testing-library/react';
import Filter from "./Filter";

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
}) 