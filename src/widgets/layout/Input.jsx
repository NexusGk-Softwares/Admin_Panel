// Input.js
import React from 'react';

const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 font-semibold">{label}</label>}
      <input
        type="text"
        {...props}
        className="border border-gray-300 p-2 rounded-md"
      />
    </div>
  );
};

export default Input;
