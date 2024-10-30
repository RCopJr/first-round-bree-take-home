"use client";

import { TransactionEntry } from "@/types/commonTypes";
import { TransactionStatus } from "@/types/enumTypes";
import React, { useMemo, useState } from "react";
import Button from "./Button";
import FilterButton from "./FilterButton";
import Transaction from "./Transaction";

const TransactionList = ({
  transactions,
}: {
  transactions: TransactionEntry[];
}) => {
  const [filter, setFilter] = useState<TransactionStatus | "All">("All");
  const [numberOfViewableTransactions, setNumberOfViewableTransactions] =
    useState<number>(5);

  const visibleTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      if (filter !== "All") {
        return transaction.status === filter;
      } else {
        return true;
      }
    });
  }, [filter, transactions, numberOfViewableTransactions]);

  const handleClickSeeMore = () => {
    setNumberOfViewableTransactions(
      (prevNumberOfViewableTransactions) => prevNumberOfViewableTransactions + 5
    );
  };

  return (
    <div className="w-full border border-slate-500 rounded-lg">
      <div className="px-6 py-5 border-b flex flex-wrap justify-between items-center gap-5">
        <h1>Transactions</h1>
        <div className="flex gap-5">
          <FilterButton
            handleClick={() => setFilter(TransactionStatus.pending)}
            text={TransactionStatus.pending}
            color="amber"
            filter={filter}
          />
          <FilterButton
            handleClick={() => setFilter(TransactionStatus.completed)}
            text={TransactionStatus.completed}
            color="green"
            filter={filter}
          />
          <FilterButton
            handleClick={() => setFilter("All")}
            text="All"
            color="slate"
            filter={filter}
          />
        </div>
      </div>
      <ol className="flex flex-col">
        {visibleTransactions
          .slice(0, numberOfViewableTransactions)
          .map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ol>
      <div className="px-6 py-10 flex justify-end items-center h-16">
        {visibleTransactions.length > numberOfViewableTransactions && (
          <Button handleClick={handleClickSeeMore} text="See More" />
        )}
      </div>
    </div>
  );
};

export default TransactionList;
