import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Home from "../app/page";

describe("Home Component", () => {
  it("renders the header, balance amounts, buttons, and footer", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: "Total Completed Cash Advance Balance",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Available Cash Advance Balance" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Request" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Repay" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Transactions" }),
    ).toBeInTheDocument();
  });

  it("updates the available balance and transaction list on confirm for a cash advance", () => {
    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: "Request" }));

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "$50" } });

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    fireEvent.click(confirmButton);

    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(closeButton);

    const paragraphs = screen.getAllByRole("paragraph");
    const availableBalance = paragraphs[1].textContent;
    expect(availableBalance.includes(280.0));
  });

  it("updates the available balance and transaction list on confirm for a repayment", () => {
    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: "Repay" }));

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "$10" } });

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    fireEvent.click(confirmButton);

    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(closeButton);

    const paragraphs = screen.getAllByRole("paragraph");
    const availableBalance = paragraphs[1].textContent;
    expect(availableBalance.includes(340.0));
  });

  it("throws value error for invalid request amounts", () => {
    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: "Request" }));

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "$aiuhasd" } });

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    fireEvent.click(confirmButton);

    expect(screen.getByText("Please enter a valid dollar amount."));

    fireEvent.change(input, { target: { value: "$1000" } });

    fireEvent.click(confirmButton);

    expect(
      screen.getByText(
        "Please enter an amount that is less than your available balance.",
      ),
    );

    const closeButton = screen.getByRole("button", { name: "Back" });
    fireEvent.click(closeButton);
  });
  it("throws value error for invalid repay amounts", () => {
    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: "Repay" }));

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "$aiuhasd" } });

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    fireEvent.click(confirmButton);

    expect(screen.getByText("Please enter a valid dollar amount."));

    const closeButton = screen.getByRole("button", { name: "Back" });
    fireEvent.click(closeButton);
  });
});
