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
  availableBalance: 340,
  transactions: [
    {
      id: 1,
      date: new Date(),
      type: TransactionType.advance,
      amount: 100,
      balance: 340,
      repaymentDate: new Date(),
      status: TransactionStatus.pending,
    },
    {
      id: 2,
      date: new Date(),
      type: TransactionType.repayment,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: TransactionStatus.pending,
    },
    {
      id: 3,
      date: new Date(),
      type: TransactionType.advance,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: TransactionStatus.completed,
    },
    {
      id: 4,
      date: new Date(),
      type: TransactionType.advance,
      amount: 10,
      balance: 340,
      repaymentDate: new Date(),
      status: TransactionStatus.completed,
    },
    {
      id: 5,
      date: new Date(),
      type: TransactionType.repayment,
      amount: 10,
      balance: 340,
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
    <div className="h-full">
      <Header />
      <main className="w-5/6 md:w-3/4 xl:w-2/3 2xl:w-1/2 flex flex-col items-center gap-10 my-20 mx-auto">
        <div className="w-full flex justify-center sm:justify-start sm:gap-14">
          <span className="hidden sm:inline-block">
            <BalanceAmount balanceType="Total Balance" balance={350} />
          </span>
          <BalanceAmount
            balanceType="Available Balance"
            balance={dashboardState.availableBalance}
          />
        </div>
        <div className="w-full flex justify-center sm:justify-start gap-5 sm:gap-10">
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
      <Footer />
    </div>
  );
}
