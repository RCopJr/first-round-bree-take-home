"use client";
import BalanceAmount from "@/components/BalanceAmount";
import Button from "@/components/Button";
import RepaymentModal from "@/components/RepaymentModal";
import RequestAdvanceModal from "@/components/RequestAdvanceModal";
import TransactionList from "@/components/TransactionList";
import {
  DashBoardAction,
  DashBoardState,
  TransactionEntry,
} from "@/types/commonTypes";
import { Status, TransactionType } from "@/types/enumTypes";
import { useReducer, useState } from "react";

const initialState: DashBoardState = {
  availableBalance: 340, // Set initial balance
  transactions: [
    {
      id: 1,
      date: new Date(),
      type: TransactionType.advance,
      amount: 100,
      balance: 340,
      repaymentDate: new Date(),
      status: Status.pending,
    },
    {
      id: 2,
      date: new Date(),
      type: TransactionType.repayment,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: Status.pending,
    },
    {
      id: 3,
      date: new Date(),
      type: TransactionType.advance,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: Status.completed,
    },
    {
      id: 4,
      date: new Date(),
      type: TransactionType.advance,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: Status.completed,
    },
    {
      id: 5,
      date: new Date(),
      type: TransactionType.repayment,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: Status.completed,
    },
  ],
};

const reducer = (
  state: DashBoardState,
  action: DashBoardAction
): DashBoardState => {
  switch (action.type) {
    case "ADD_TRANSACTION_AND_UPDATE_BALANCE":
      const amountNumber = Number(action.payload.amount);
      const newBalance =
        action.payload.type === TransactionType.repayment
          ? state.availableBalance + amountNumber
          : state.availableBalance - amountNumber;
      const newTransaction: TransactionEntry = {
        id: state.transactions.length + 1,
        date: new Date(),
        type: action.payload.type,
        amount: amountNumber,
        balance: newBalance,
        repaymentDate: new Date(),
        status: Status.pending,
      };
      return {
        availableBalance: newBalance,
        transactions: [newTransaction, ...state.transactions],
      };
  }
};

export default function Home() {
  const [requestAdvanceModalIsOpen, setRequestAdvanceModalIsOpen] =
    useState<boolean>(false);
  const [repaymentModalIsOpen, setRepaymentModalIsOpen] =
    useState<boolean>(false);

  const [dashboardState, dispatch] = useReducer(reducer, initialState);

  const openRequestAdvanceModal = () => setRequestAdvanceModalIsOpen(true);
  const closeRequestAdvanceModal = () => setRequestAdvanceModalIsOpen(false);
  const openRepaymentModal = () => setRepaymentModalIsOpen(true);
  const closeRepaymentModal = () => setRepaymentModalIsOpen(false);
  const onConfirm = (
    event: React.MouseEvent<HTMLButtonElement>,
    amount: string,
    type: TransactionType
  ) => {
    dispatch({
      type: "ADD_TRANSACTION_AND_UPDATE_BALANCE",
      payload: { amount, type },
    });
  };

  return (
    <div className="h-full">
      <header className="flex justify-between px-6 py-6 text-lg font-extrabold border text-slate-950">
        Cash Advance Dashboard
        <svg
          className="size-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
        </svg>
      </header>
      <main className="flex flex-col items-center gap-10 my-20">
        <div className="w-5/6 md:w-3/4 xl:w-2/3 2xl:w-1/2 flex justify-center sm:justify-start sm:gap-14">
          <span className="hidden sm:inline-block">
            <BalanceAmount balanceType="Total Balance" balance={350} />
          </span>
          <BalanceAmount
            balanceType="Available Balance"
            balance={dashboardState.availableBalance}
          />
        </div>
        <div className="w-5/6 md:w-3/4 xl:w-2/3 2xl:w-1/2 flex justify-center sm:justify-start gap-5 sm:gap-10">
          <Button handleClick={openRequestAdvanceModal} text="Borrow" />
          <Button handleClick={openRepaymentModal} text="Repay" />
        </div>

        <TransactionList transactions={dashboardState.transactions} />

        <RequestAdvanceModal
          isOpen={requestAdvanceModalIsOpen}
          onClose={closeRequestAdvanceModal}
          availableBalance={dashboardState.availableBalance}
          onConfirm={onConfirm}
        />

        <RepaymentModal
          isOpen={repaymentModalIsOpen}
          onClose={closeRepaymentModal}
          availableBalance={dashboardState.availableBalance}
          onConfirm={onConfirm}
        />
      </main>
      <footer className="flex justify-between px-6 py-6 text-sm border text-slate-950">
        2024 Cash Advance Dashboard, Inc.
      </footer>
    </div>
  );
}
