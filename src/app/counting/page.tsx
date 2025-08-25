"use client";
import React, { useState } from "react";

// buka halaman di localhost:3000/counting

const CountingPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            console.log("Increase +1");
            setCount((prevCount) => prevCount + 1);
          }}
          className="bg-indigo-200 text-black p-2 rounded-lg"
        >
          +1
        </button>
        <button
          onClick={() => {
            console.log("Decrease -1");
            setCount((prevCount) => prevCount - 1);
          }}
          className="bg-amber-300 text-black p-2 rounded-lg"
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default CountingPage;
