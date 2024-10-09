import React from "react";

const Button = ({ children, onClick, variant }) => {
  return (
    <button
      className={`rounded-md p-2 bg-${variant}-500 text-white hover:bg-${variant}-600 uppercase`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
