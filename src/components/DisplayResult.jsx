"use client";
import { useAppContext } from "@/context/AppContext";

function DisplayResult() {
  const { result } = useAppContext();

  return (
    <div className="sm:text-2xl flex justify-end text-xl">
      <p>{result}</p>
    </div>
  );
}

export default DisplayResult;
