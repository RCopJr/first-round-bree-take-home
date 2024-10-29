"use client";
import BalanceAmount from "@/components/BalanceAmount";
import Button from "@/components/Button";
import TransactionList from "@/components/TransactionList";
import { TransactionEntry } from "@/types/commonTypes";

const transactions: TransactionEntry[] = [
  {
    id: 1,
    date: new Date(),
    type: "Loan",
    amount: 100,
    balance: 340,
    repaymentDate: new Date(),
    status: "pending",
  },
  {
    id: 2,
    date: new Date(),
    type: "Repayment",
    amount: 10,
    balance: 340,
    repaymentDate: new Date(),
    status: "pending",
  },
];

export default function Home() {
  const handleClickRepay = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickBorrow = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  return (
    <main className="flex flex-col items-center gap-5">
      <BalanceAmount balanceType="Total Balance" balance={350} />
      <BalanceAmount balanceType="Available Balance" balance={340} />
      <Button handleClick={handleClickRepay} text="Repay" />
      <Button handleClick={handleClickBorrow} text="Borrow" />
      <TransactionList transactions={transactions} />
    </main>
  );
}
