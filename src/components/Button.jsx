"use client";
import { useAppContext } from "@/context/AppContext";

function Button({ button }) {
  const { handleButtonClick } = useAppContext();

  const handleOperatorsColors = (value) => {
    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "="
    )
      return "bg-rose-700 hover:bg-rose-600";
  };

  return (
    <button
      className={`bg-sky-700 text-slate-50 sm:text-xl hover:bg-sky-600 last-of-type:col-span-2 px-4 py-2 text-lg transition-colors ease-in rounded ${handleOperatorsColors(
        button.value
      )}`}
      onClick={() => handleButtonClick(button.value)}
    >
      {button.value}
    </button>
  );
}

export default Button;
