import React from "react";

interface IButtonProps {
  canClick: boolean;
  loading: boolean;
  actionText: string;
}

export const Button: React.FC<IButtonProps> = ({
  canClick,
  loading,
  actionText
}) => (
  <button 
    className={`py-3 px-5 text-white text-lg rounded-lg focus:outline-none
      ${canClick ? "bg-gray-800 hover:opacity-90" : "bg-gray-300 pointer-events-none"}`}
  >
    {loading ? "Loading..." : actionText}
  </button> 
);