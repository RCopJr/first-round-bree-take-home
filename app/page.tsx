"use client";
import BalanceAmount from "@/components/BalanceAmount";
import Button from "@/components/Button";
import FilterButton from "@/components/FilterButton";

export default function Home() {
  const handleClickRepay = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickBorrow = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickPending = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickSuccess = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };
  const handleClickClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  return (
    <main className="flex flex-col items-center">
      <BalanceAmount balanceType="Total Balance" balance={350} />
      <BalanceAmount balanceType="Available Balance" balance={340} />
      <Button handleClick={handleClickRepay} text="Repay" />
      <Button handleClick={handleClickBorrow} text="Borrow" />
      <FilterButton
        handleClick={handleClickPending}
        text="Pending"
        color="amber"
      />
      <FilterButton
        handleClick={handleClickSuccess}
        text="Success"
        color="green"
      />
      <FilterButton handleClick={handleClickClear} text="Clear" color="slate" />
    </main>
  );
}
