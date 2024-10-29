import { TransactionEntry } from "@/types/commonTypes";
import { formatDate, formatToDollar } from "@/utils/formatters";
import React from "react";

const Transaction = ({
  transaction: { id, date, type, amount, balance, repaymentDate },
}: {
  transaction: TransactionEntry;
}) => {
  return (
    <li className="relative group flex gap-3 sm:gap-5 border-b px-6 py-5 items-center justify-between text-sm overflow-hidden">
      <div className="flex gap-5 md:gap-8">
        <svg
          className="size-5 text-amber-300"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
        <span>{formatDate(date)}</span>
        <span className="hidden sm:inline-block">{type}</span>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-5 md:gap-8 xl:gap-14">
        <span className={type === "Repayment" ? "col-start-1" : "col-start-2"}>
          {type === "Repayment"
            ? `+ $${formatToDollar(amount)}`
            : `- $${formatToDollar(amount)}`}
        </span>
        <span className="col-start-3 hidden sm:inline-block">
          ${formatToDollar(balance)}
        </span>
        {/* <span>{formatDate(repaymentDate)}</span> */}
      </div>
      <div className="flex gap-5 justify-start items-center absolute top-0 right-0 w-0 h-full bg-white z-10 transition-width duration-300 ease-in-out rounded-lg border group-hover:w-full sm:group-hover:w-1/2">
        <span className="ml-6">ID: {id}</span>
        <span>Repayment Date: {formatDate(repaymentDate)}</span>
      </div>
    </li>
  );
};

export default Transaction;
