import { TransactionEntry } from "@/types/commonTypes";
import { TransactionStatus, TransactionType } from "@/types/enumTypes";
import { formatDate, formatToDollar } from "@/utils/formatters";
import React from "react";

const Transaction = ({
  transaction: { id, date, type, amount, balance, repaymentDate, status },
}: {
  transaction: TransactionEntry;
}) => {
  return (
    <li className="group relative flex items-center justify-between gap-3 overflow-hidden border-b px-6 py-5 text-sm sm:gap-5">
      <div className="flex gap-5 md:gap-8">
        {status === TransactionStatus.pending && (
          <svg
            className="size-5 text-amber-300"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
          </svg>
        )}

        {status === TransactionStatus.completed && (
          <svg
            className="size-5 text-blue-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        )}

        <span>{formatDate(date)}</span>
        <span className="hidden sm:inline-block">{type}</span>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-5 md:gap-8 xl:gap-14">
        <span
          className={
            type === TransactionType.repayment
              ? "col-start-1 text-green-600"
              : "col-start-2"
          }
        >
          {type === TransactionType.repayment
            ? `+ $${formatToDollar(amount)}`
            : `- $${formatToDollar(amount)}`}
        </span>
        <span className="col-start-3 hidden sm:inline-block">
          ${formatToDollar(balance)}
        </span>
      </div>
      <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full items-center justify-start gap-5 rounded-lg border bg-white transition-all duration-300 ease-in-out group-hover:translate-x-0 sm:group-hover:translate-x-1/2">
        <span className="ml-6">ID: {id}</span>
        <span>Repayment Date: {formatDate(repaymentDate)}</span>
      </div>
    </li>
  );
};

export default Transaction;
