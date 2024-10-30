"use client";
import { TransactionType } from "@/types/enumTypes";
import { formatToDollar } from "@/utils/formatters";
import React, { useState } from "react";
import Button from "./Button";
import ErrorAlert from "./ErrorAlert";

const RequestAdvanceModal = ({
  isOpen,
  onClose,
  availableBalance,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  availableBalance: number;
  onConfirm: (
    e: React.MouseEvent<HTMLButtonElement>,
    amount: string,
    type: TransactionType
  ) => void;
}) => {
  const [requestedAmount, setRequestedAmount] = useState<string>("");
  const [requestConfirmed, setRequestConfirmed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRequestAmountInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRequestedAmount(event.target.value.slice(1));
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-blue-600 bg-opacity-50 z-20 transition-opacity transform ease-in-out duration-300 motion-reduce:transition-none ${isOpen ? "scale-100 opacity-100" : `scale-0 opacity-0`}`}
    >
      <div
        className={`flex flex-col justify-between gap-12 bg-white p-6 rounded-lg shadow-lg max-w-lg w-5/6 sm:w-full transition-transform transform ease-in-out duration-300 motion-reduce:transition-none ${isOpen ? "scale-100" : "scale-0"}`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-sm text-slate-500">Request a Cash Advance</h1>
          <Button
            text="Cancel"
            handleClick={() => {
              setRequestConfirmed(false);
              setRequestedAmount("");
              return onClose();
            }}
          />
        </div>
        {requestConfirmed ? (
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-center text-5xl font-extrabold">
              You have requested ${formatToDollar(Number(requestedAmount))}
            </h2>
            <p className="pl-4 font-extrabold">It will be processed shortly.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <h2 className="font-extrabold">Current available balance:</h2>
            <p className="pl-4 text-5xl font-extrabold">
              ${formatToDollar(availableBalance)}
            </p>
            <h2 className="font-extrabold">
              How much would you like to request?
            </h2>
            <input
              type="text"
              placeholder="Enter Dollar Amount"
              value={"$" + requestedAmount}
              onChange={handleRequestAmountInputChange}
              className="w-5/6 sm:w-1/2 border border-gray-300 rounded-lg px-4 py-2 text-5xl font-extrabold"
            />
            {errorMessage && <ErrorAlert text={errorMessage} />}
          </div>
        )}

        <div className="flex justify-center w-full">
          {requestConfirmed ? (
            <Button
              text="Close"
              handleClick={() => {
                setRequestConfirmed(false);
                setRequestedAmount("");
                return onClose();
              }}
            />
          ) : (
            <Button
              text="Confirm"
              handleClick={(e) => {
                const amountNumber = Number(requestedAmount);
                if (
                  typeof amountNumber !== "number" ||
                  amountNumber <= 0 ||
                  !Number.isFinite(amountNumber)
                ) {
                  setErrorMessage("Please enter a valid dollar amount.");
                } else if (amountNumber > availableBalance) {
                  setErrorMessage(
                    "Please enter an amount that is less than your available balance."
                  );
                } else {
                  setErrorMessage("");
                  setRequestConfirmed(true);
                  return onConfirm(e, requestedAmount, TransactionType.advance);
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestAdvanceModal;
