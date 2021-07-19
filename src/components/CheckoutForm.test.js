import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {debug} = render(<CheckoutForm />);

    const header = screen.getByText("Checkout Form");

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const firstnameInput = screen.getByLableText(/firstname/i);
    const lastnameInput = screen.getByLableText(/lastname/i);
    const addressInput = screen.getByLableText(/address/i);
    const cityInput = screen.getByLableText(/city/i);
    const stateInput = screen.getByLableText(/state/i);
    const zipInput = screen.getByLableText(/zip/i);

    userEvent.type(firstnameInput, "Jane");
    userEvent.type(lastnameInput, "Doe");
    userEvent.type(addressInput, "123 addres lan rd st");
    userEvent.type(stateInput, "New York City");
    userEvent.type(zipInput, "12345");

    const button = screen.getByRole("button", {name: /Checkout/i})

    userEvent.click(button);

    const janeDoe = screen.getByText("Jane Doe");

    expect(janeDoe).toBeInTheDocument();


});
