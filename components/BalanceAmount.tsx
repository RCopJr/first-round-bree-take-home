import { formatToDollar } from "@/utils/formatters";
import React from "react";

const BalanceAmount = ({
  balanceType,
  balance,
}: {
  balanceType: string;
  balance: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:items-start">
      <h1 className="text-xs text-slate-500">{balanceType}</h1>
      <p className="text-5xl font-extrabold text-slate-950">
        ${formatToDollar(balance)}
      </p>
    </div>
  );
};

export default BalanceAmount;
