"use client";
import { useState } from "react";

export default function MiniDisplay() {
  const [display, setDisplay] = useState("");

  const handleOperatorClick = (operator: string) => {
    const operators = ["+", "-", "*", "/"];
    const disableOperators = operators.filter((op) => op !== operator);
    if (disableOperators.some((op) => display.includes(op))) return;
    setDisplay(display + operator);
  };

  const backspace = () => setDisplay(display.slice(0, -1));

  const calculate = () => {
    if (display.includes("+")) return sum();
    if (display.includes("-")) return subtraction();
    if (display.includes("*")) return product();
    if (display.includes("/")) return division();
  };

  const sum = () => {
    const values = display.split("+").map(Number);
    setDisplay(String(values.reduce((a, b) => a + b, 0)));
  };

  const subtraction = () => {
    const values = display.split("-").map(Number);
    setDisplay(String(values.reduce((a, b) => a - b)));
  };

  const product = () => {
    const values = display.split("*").map(Number);
    setDisplay(String(values.reduce((a, b) => a * b)));
  };

  const division = () => {
    const values = display.split("/").map(Number);
    if (values[0] === 0) return setDisplay("0");
    if (values.includes(0)) return setDisplay("Divisão por 0");
    setDisplay(String(values.reduce((a, b) => a / b)));
  };

  const addNumber = (num: string) => setDisplay(display + num);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex justify-end items-center border border-gray-300 rounded-md bg-gray-50 shadow-sm px-3 w-48 h-14 text-xl font-medium text-gray-800 overflow-x-auto">
        {display || "0"}
      </div>

      <div className="grid grid-cols-3 gap-2 w-48 mt-5">
        {["7","8","9","4","5","6","1","2","3","0"].map((n) => (
          <button
            key={n}
            onClick={() => addNumber(n)}
            className="bg-gray-200 hover:bg-gray-300 transition p-2 rounded text-gray-800 font-semibold"
          >
            {n}
          </button>
        ))}

        <button onClick={() => setDisplay("")} className="bg-red-200 hover:bg-red-300 transition p-2 rounded font-semibold">
          C
        </button>

        <button onClick={() => handleOperatorClick("+")} className="bg-blue-200 hover:bg-blue-300 transition p-2 rounded font-semibold">
          +
        </button>

        <button onClick={() => handleOperatorClick("*")} className="bg-blue-200 hover:bg-blue-300 transition p-2 rounded font-semibold">
          *
        </button>

        <button onClick={calculate} className="bg-green-200 hover:bg-green-300 transition p-2 rounded font-semibold">
          =
        </button>

        <button onClick={() => handleOperatorClick("-")} className="bg-blue-200 hover:bg-blue-300 transition p-2 rounded font-semibold">
          -
        </button>

        <button onClick={() => handleOperatorClick("/")} className="bg-blue-200 hover:bg-blue-300 transition p-2 rounded font-semibold">
          /
        </button>

        <button onClick={backspace} className="bg-yellow-200 hover:bg-yellow-300 transition p-2 rounded font-semibold col-span-2">
          Backspace
        </button>
      </div>
    </div>
  );
}
