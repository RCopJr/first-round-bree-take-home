import { TransactionStatus } from "@/types/enumTypes";
import React from "react";

const FilterButton = ({
  text,
  handleClick,
  filter,
}: {
  text: TransactionStatus | "All";
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  filter: string;
}) => {
  const bgColor =
    text === TransactionStatus.pending
      ? "bg-amber-300"
      : text === TransactionStatus.completed
        ? "bg-blue-600"
        : "bg-slate-400";
  const borderColor =
    text === TransactionStatus.pending
      ? "border-amber-300"
      : text === TransactionStatus.completed
        ? "border-blue-600"
        : "border-slate-400";

  return (
    <div className="relative flex items-center justify-center">
      <div className={`absolute inset-0 ${bgColor} rounded-lg`}></div>
      <button
        className={`border bg-white text-sm ${borderColor} z-10 rounded-lg px-4 py-2 ${filter === text ? "" : "-translate-x-1 -translate-y-1"} transform transition-transform hover:translate-x-0 hover:translate-y-0 motion-reduce:transition-none`}
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    </div>
  );
};

export default FilterButton;
