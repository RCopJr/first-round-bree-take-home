import React from "react";

const Button = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-lg bg-slate-400"></div>
      <button
        className="z-10 w-28 -translate-x-1 -translate-y-1 transform rounded-lg border border-slate-400 bg-white px-4 py-2 text-sm transition-transform hover:translate-x-0 hover:translate-y-0 motion-reduce:transition-none"
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
