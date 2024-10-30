"use client";
import AdvanceModal from "@/components/AdvanceModal";
import BalanceAmount from "@/components/BalanceAmount";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TransactionList from "@/components/TransactionList";
import {
  DashBoardState,
  ModalState,
  TransactionEntry,
} from "@/types/commonTypes";
import { TransactionStatus, TransactionType } from "@/types/enumTypes";
import { useState } from "react";

const initialState: DashBoardState = {
  availableBalance: 330,
  transactions: [
    {
      id: 1,
      date: new Date(2024, 9, 20),
      type: TransactionType.advance,
      amount: 10,
      balance: 330,
      repaymentDate: new Date(),
      status: TransactionStatus.pending,
    },
    {
      id: 2,
      date: new Date(2024, 9, 10),
      type: TransactionType.advance,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: TransactionStatus.pending,
    },
    {
      id: 3,
      date: new Date(2024, 7, 10),
      type: TransactionType.repayment,
      amount: 10,
      balance: 350,
      repaymentDate: new Date(),
      status: TransactionStatus.completed,
    },
    {
      id: 4,
      date: new Date(2024, 3, 25),
      type: TransactionType.repayment,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: TransactionStatus.completed,
    },
    {
      id: 5,
      date: new Date(2023, 10, 10),
      type: TransactionType.advance,
      amount: 20,
      balance: 330,
      repaymentDate: new Date(),
      status: TransactionStatus.completed,
    },
  ],
};

export default function Home() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    modalType: TransactionType.advance,
  });
  const [dashboardState, setDashboardState] =
    useState<DashBoardState>(initialState);

  const closeAdvanceModal = () =>
    setModalState((prevModalState) => ({ ...prevModalState, isOpen: false }));

  const onConfirm = (amount: string, type: TransactionType) => {
    setDashboardState((prevDashboardState) => {
      const amountNumber = Number(amount);
      const newBalance =
        type === TransactionType.repayment
          ? prevDashboardState.availableBalance + amountNumber
          : prevDashboardState.availableBalance - amountNumber;
      const newTransaction: TransactionEntry = {
        id: prevDashboardState.transactions.length + 1,
        date: new Date(),
        type: type,
        amount: amountNumber,
        balance: newBalance,
        repaymentDate: new Date(),
        status: TransactionStatus.pending,
      };
      return {
        availableBalance: newBalance,
        transactions: [newTransaction, ...prevDashboardState.transactions],
      };
    });
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <Header />
        <main className="mx-auto my-20 flex w-5/6 flex-col items-center gap-10 md:w-3/4 xl:w-2/3 2xl:w-1/2">
          <div className="flex w-full justify-center sm:justify-start sm:gap-28">
            <span className="hidden sm:inline-block">
              <BalanceAmount
                balanceType="Total Completed Cash Advance Balance"
                balance={350}
              />
            </span>
            <BalanceAmount
              balanceType="Available Cash Advance Balance"
              balance={dashboardState.availableBalance}
            />
          </div>
          <div className="flex w-full justify-center gap-5 sm:justify-start sm:gap-10">
            <Button
              handleClick={() =>
                setModalState({
                  isOpen: true,
                  modalType: TransactionType.advance,
                })
              }
              text="Request"
            />
            <Button
              handleClick={() =>
                setModalState({
                  isOpen: true,
                  modalType: TransactionType.repayment,
                })
              }
              text="Repay"
            />
          </div>

          <TransactionList transactions={dashboardState.transactions} />

          <AdvanceModal
            isOpen={modalState.isOpen}
            onClose={closeAdvanceModal}
            availableBalance={dashboardState.availableBalance}
            onConfirm={onConfirm}
            modalType={modalState.modalType}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}
