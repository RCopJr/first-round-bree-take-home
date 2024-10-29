import React from "react";

const FilterButton = ({
  text,
  handleClick,
  color = "slate",
}: {
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`absolute inset-0 ${color === "amber" ? "bg-amber-300" : color === "green" ? "bg-green-500" : "bg-slate-950"} rounded-lg`}
      ></div>
      <button
        className={`w-24 text-sm border bg-white ${color === "amber" ? "border-amber-300" : color === "green" ? "border-green-500" : "border-slate-950"} py-2 px-4 rounded-lg z-10 -translate-x-1 -translate-y-1 transition-transform transform hover:translate-x-0 hover:translate-y-0`}
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    </div>
  );
};

export default FilterButton;
