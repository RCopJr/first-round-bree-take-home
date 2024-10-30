"use client";
import { TransactionType } from "@/types/enumTypes";
import { formatToDollar } from "@/utils/formatters";
import React, { useState } from "react";
import Button from "./Button";

const RepaymentModal = ({
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
  const [repaymentAmount, setRepaymentAmount] = useState<string>("");
  const [repaymentConfirmed, setRepaymentConfirmed] = useState<boolean>(false);

  const handleRepaymentAmountInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepaymentAmount(event.target.value.slice(1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 bg-opacity-50 z-20">
      <div className="flex flex-col justify-between gap-12 bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-sm text-slate-500">Request a Cash Advance</h1>
          <Button
            text="Cancel"
            handleClick={() => {
              setRepaymentConfirmed(false);
              setRepaymentAmount("");
              return onClose();
            }}
          />
        </div>
        {repaymentConfirmed ? (
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-center text-5xl font-extrabold">
              You have repaid ${formatToDollar(Number(repaymentAmount))}
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
              How much would you like to repay?
            </h2>
            <input
              type="text"
              placeholder="Enter Dollar Amount"
              value={"$" + repaymentAmount}
              onChange={handleRepaymentAmountInputChange}
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 text-5xl font-extrabold"
            />
          </div>
        )}

        <div className="flex justify-center w-full">
          {repaymentConfirmed ? (
            <Button
              text="Close"
              handleClick={() => {
                setRepaymentConfirmed(false);
                setRepaymentAmount("");
                return onClose();
              }}
            />
          ) : (
            <Button
              text="Confirm"
              handleClick={(e) => {
                setRepaymentConfirmed(true);
                return onConfirm(e, repaymentAmount, TransactionType.repayment);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RepaymentModal;
