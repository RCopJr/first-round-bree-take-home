"use client";

import { TransactionEntry } from "@/types/commonTypes";
import { Status } from "@/types/enumTypes";
import React, { useState } from "react";
import Button from "./Button";
import FilterButton from "./FilterButton";
import Transaction from "./Transaction";

const TransactionList = ({
  transactions,
}: {
  transactions: TransactionEntry[];
}) => {
  const [filter, setFilter] = useState<Status | "All">("All");

  const handleClickPending = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilter(Status.pending);
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickCompleted = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilter(Status.completed);
    console.log("Button clicked in ParentComponent", event);
  };
  const handleClickClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilter("All");
    console.log("Button clicked in ParentComponent", event);
  };

  const handleClickSeeMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked in ParentComponent", event);
  };

  return (
    <div className="w-5/6 md:w-3/4 xl:w-2/3 2xl:w-1/2 border border-slate-500 rounded-lg">
      <div className="px-6 py-5 border-b flex flex-wrap justify-between items-center gap-5">
        <h1>Transactions</h1>
        <div className="flex gap-5">
          <FilterButton
            handleClick={handleClickPending}
            text={Status.pending}
            color="amber"
            filter={filter}
          />
          <FilterButton
            handleClick={handleClickCompleted}
            text={Status.completed}
            color="green"
            filter={filter}
          />
          <FilterButton
            handleClick={handleClickClear}
            text="All"
            color="slate"
            filter={filter}
          />
        </div>
      </div>
      <ol className="flex flex-col">
        {transactions
          .filter((transaction) => {
            if (filter !== "All") {
              return transaction.status === filter;
            } else {
              return true;
            }
          })
          .map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ol>
      <div className="px-6 py-10 flex justify-end items-center h-16">
        <Button handleClick={handleClickSeeMore} text="See More" />
      </div>
    </div>
  );
};

export default TransactionList;
