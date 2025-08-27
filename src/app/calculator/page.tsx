"use client";
import CalculatorButton from "@/app/calculator/components/CalculatorButton";
import React, { useEffect, useState } from "react";

type TOperator = "+" | "-";

const Page = () => {
  const [digit1, setDigit1] = useState<number>();
  const [digit2, setDigit2] = useState<number>();
  const [result, setResult] = useState<number>();
  const [operator, setOperator] = useState<TOperator>();

  useEffect(() => {
    console.log(digit1, digit2);
  }, [digit1, digit2]);

  return (
    <main className="bg-white text-black w-full h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <CalculatorButton
            key={i + 1}
            onClick={() => {
              const currentDigit = i + 1;
              if (operator === undefined) return setDigit1(currentDigit);
              setDigit2(currentDigit);
            }}
            className="bg-slate-400"
          >
            {i + 1}
          </CalculatorButton>
        ))}

        <CalculatorButton
          onClick={() => {
            console.log("+ clicked");
            setOperator("+");
          }}
          className="bg-blue-300"
        >
          +
        </CalculatorButton>

        <CalculatorButton
          onClick={() => {
            setOperator("-");
          }}
          className="bg-red-300"
        >
          -
        </CalculatorButton>
        <CalculatorButton
          onClick={() => {
            setOperator("-");
          }}
          className="bg-green-400"
        >
          =
        </CalculatorButton>
      </div>
    </main>
  );
};

export default Page;
