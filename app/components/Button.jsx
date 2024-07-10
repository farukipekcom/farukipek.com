import React from "react";
import Arrow from "./icons/Arrow";
export default function Button({ children }) {
  return (
    <div className="button group">
      {children}
      <Arrow />
    </div>
  );
}
