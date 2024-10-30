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
      <div className="absolute inset-0 bg-blue-600 rounded-lg"></div>
      <button
        className="w-28 text-sm border bg-white border-blue-600 py-2 px-4 rounded-lg z-10 -translate-x-1 -translate-y-1 transition-transform transform hover:translate-x-0 hover:translate-y-0 motion-reduce:transition-none"
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
