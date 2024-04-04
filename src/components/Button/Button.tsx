import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      style={{
        padding: "1em",
      }}
    >
      {children}
    </button>
  );
}
