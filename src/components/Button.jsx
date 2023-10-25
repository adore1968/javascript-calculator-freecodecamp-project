"use client";
import { useAppContext } from "@/context/AppContext";

function Button({ button }) {
  const { handleButtonClick } = useAppContext();

  return (
    <button
      className="bg-sky-700 text-slate-50 sm:text-xl hover:bg-sky-600 px-4 py-2 text-lg transition-colors ease-in rounded"
      onClick={() => handleButtonClick(button.value)}
    >
      {button.value}
    </button>
  );
}

export default Button;
