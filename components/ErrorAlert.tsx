import React from "react";

const ErrorAlert = ({ text }: { text: string }) => {
  return <div className="rounded-lg bg-red-400 px-6 py-4">{text}</div>;
};

export default ErrorAlert;
