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
  }, [filter, transactions]);

  const handleClickSeeMore = () => {
    setNumberOfViewableTransactions(
      (prevNumberOfViewableTransactions) =>
        prevNumberOfViewableTransactions + 5,
    );
  };

  return (
    <div className="w-full rounded-lg border border-slate-500">
      <div className="flex flex-wrap items-center justify-between gap-5 border-b px-6 py-5">
        <h1>Transactions</h1>
        <div className="flex gap-5">
          <FilterButton
            handleClick={() => setFilter(TransactionStatus.pending)}
            text={TransactionStatus.pending}
            filter={filter}
          />
          <FilterButton
            handleClick={() => setFilter(TransactionStatus.completed)}
            text={TransactionStatus.completed}
            filter={filter}
          />
          <FilterButton
            handleClick={() => setFilter("All")}
            text="All"
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
      <div className="flex h-16 items-center justify-end px-6 py-10">
        {visibleTransactions.length > numberOfViewableTransactions && (
          <Button handleClick={handleClickSeeMore} text="See More" />
        )}
      </div>
    </div>
  );
};

export default TransactionList;
