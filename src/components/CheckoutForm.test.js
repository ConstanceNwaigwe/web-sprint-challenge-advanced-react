import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = getByText(/Contact Form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const fnameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(fnameInput, "Jane");

    const lnameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lnameInput, "Doe");

    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, "123 fake st");

    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, "city");

    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, "state");

    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput, "12345");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(fnameInput).toBeInTheDocument();
    expect(lnameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();

});
