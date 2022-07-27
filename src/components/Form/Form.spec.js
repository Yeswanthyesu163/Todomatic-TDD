import React from 'react';
import {fireEvent, getByText, render} from '@testing-library/react';
import Form from './Form';

describe("Basic rendering of Form", () => {
    
    it("Should Render the Form", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("input-form")).toBeDefined();
    });

    it("Should have Input Field with type as Text", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("input-field")).toHaveAttribute("type", "text");
    });

    it("Should Have Add Button", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("add-button")).toBeDefined();
    });

    it("Button should be Disabled when there is no text in input", () => {
        const {getByTestId} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {target:{value: ""}});
        expect(getByTestId("add-button")).toHaveAttribute("disabled");
    });

    it("Button should Not be Disabled when there is some text in input", () => {
        const {getByTestId} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {target:{value: "aa"}});
        expect(getByTestId("add-button")).not.toHaveAttribute("disabled");
    });

    it("Input Field should reflect what we type", () => {
        const {getByTestId} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {target:{value: "Hello"}});
        expect(getByTestId("input-field")).toHaveAttribute("value", "Hello");
    });
})