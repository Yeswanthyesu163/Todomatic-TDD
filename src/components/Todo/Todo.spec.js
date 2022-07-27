import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Todo from './Todo';


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