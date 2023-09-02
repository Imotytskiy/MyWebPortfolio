import React from "react";

export default function Button({ children, onClick }) {
  return (
    <p>
      <button className="Count-Button" onClick={onClick}>
        {children}
      </button>
    </p>
  );
}
