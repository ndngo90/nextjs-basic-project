"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    if (count <= 0) {
      setCount(0);
      return;
    }
    setCount((count) => count - 1);
  };
  return (
    <div className="mx-auto space-y-4 text-center">
      <h1 className="text-2xl font-semibold">Counter</h1>
      <p>{count}</p>
      <div className="flex items-center justify-center space-x-8">
        <button className="btn btn-outline" onClick={decrease}>
          -
        </button>
        <button className="btn btn-outline" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
