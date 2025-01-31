import React from "react";

const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-96 max-w-full p-4 relative">
        <button className="absolute top-2 right-2 p-2 text-gray-500" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => <div className="p-4">{children}</div>;
export const DialogHeader = ({ children }) => <div className="text-xl font-bold">{children}</div>;
export const DialogTitle = ({ children }) => <h2 className="text-lg">{children}</h2>;

export { Dialog };
