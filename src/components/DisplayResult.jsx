"use client";
import { useAppContext } from "@/context/AppContext";

function DisplayResult() {
  const { result } = useAppContext();

  return (
    <div className="sm:text-3xl flex flex-wrap justify-end text-2xl">
      <p>{result}</p>
    </div>
  );
}

export default DisplayResult;
