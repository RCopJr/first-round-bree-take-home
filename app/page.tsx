"use client";
import BalanceAmount from "@/components/BalanceAmount";
import Button from "@/components/Button";
import TransactionList from "@/components/TransactionList";

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
      <TransactionList />
    </main>
  );
}
