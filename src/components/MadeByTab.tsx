import { useState } from "react";

export const MadeByTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`made-by-tab ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
      title="Click to open"
    >
      <span>Made by OskLunDev</span>
    </div>
  );
};
