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
  {
    id: 3,
    date: new Date(),
    type: "Loan",
    amount: 10,
    balance: 340,
    repaymentDate: new Date(),
    status: "success",
  },
  {
    id: 4,
    date: new Date(),
    type: "Loan",
    amount: 10,
    balance: 340,
    repaymentDate: new Date(),
    status: "success",
  },
  {
    id: 5,
    date: new Date(),
    type: "Repayment",
    amount: 10,
    balance: 340,
    repaymentDate: new Date(),
    status: "success",
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
    <main className="flex flex-col items-center gap-10 my-28">
      <div className="w-5/6 md:w-3/4 xl:w-2/3 2xl:w-1/2 flex justify-center sm:justify-start sm:gap-14">
        <span className="hidden sm:inline-block">
          <BalanceAmount balanceType="Total Balance" balance={350} />
        </span>
        <BalanceAmount balanceType="Available Balance" balance={340} />
      </div>
      <div className="w-5/6 md:w-3/4 xl:w-2/3 2xl:w-1/2 flex justify-center sm:justify-start gap-5 sm:gap-10">
        <Button handleClick={handleClickRepay} text="Repay" />
        <Button handleClick={handleClickBorrow} text="Borrow" />
      </div>

      <TransactionList transactions={transactions} />
    </main>
  );
}
