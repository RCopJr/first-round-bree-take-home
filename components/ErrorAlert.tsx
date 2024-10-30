import React from "react";

const ErrorAlert = ({ text }: { text: string }) => {
  return <div className="bg-red-400 rounded-lg px-6 py-4">{text}</div>;
};

export default ErrorAlert;
