import { TransactionStatus } from "@/types/enumTypes";
import React from "react";

const FilterButton = ({
  text,
  handleClick,
  color,
  filter,
}: {
  text: TransactionStatus | "All";
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
  filter: string;
}) => {
  const bgColor =
    color === "amber"
      ? "bg-amber-300"
      : color === "green"
        ? "bg-green-500"
        : "bg-blue-600";
  const borderColor =
    color === "amber"
      ? "border-amber-300"
      : color === "green"
        ? "border-green-500"
        : "border-blue-600";

  return (
    <div className="relative flex items-center justify-center">
      <div className={`absolute inset-0 ${bgColor} rounded-lg`}></div>
      <button
        className={`text-sm border bg-white ${borderColor} py-2 px-4 rounded-lg z-10 ${filter === text ? "" : "-translate-x-1 -translate-y-1"} transition-transform transform hover:translate-x-0 hover:translate-y-0 motion-reduce:transition-none`}
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    </div>
  );
};

export default FilterButton;
