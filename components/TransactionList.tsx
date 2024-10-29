import React from "react";
import Button from "./Button";
import FilterButton from "./FilterButton";

const TransactionList = () => {
  const handleClickPending = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickSuccess = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };
  const handleClickClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickSeeMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  return (
    <div className="w-5/6 md:w-2/3 lg:w-1/2 border border-slate-500 rounded-lg">
      <div className="px-6 py-5 border-b flex flex-wrap justify-between items-center gap-5">
        <h1>Transactions</h1>
        <div className="flex gap-5">
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
          <FilterButton
            handleClick={handleClickClear}
            text="Clear"
            color="slate"
          />
        </div>
      </div>
      <div className="px-6 py-10 flex justify-end items-center h-16">
        <Button handleClick={handleClickSeeMore} text="See More" />
      </div>
    </div>
  );
};

export default TransactionList;
