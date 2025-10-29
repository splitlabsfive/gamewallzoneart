"use client";
import { useState, useEffect } from "react";

export default function SwearTracker() {
  const [count, setCount] = useState(0);

  // load saved count
  useEffect(() => {
    const saved = localStorage.getItem("swearCount");
    if (saved) setCount(parseInt(saved, 10));
  }, []);

  // save count whenever it changes
  useEffect(() => {
    localStorage.setItem("swearCount", count.toString());
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  const reset = () => {
    if (window.confirm("Reset counter?")) setCount(0);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 bg-black text-white">
      <h1 className="text-3xl font-bold">🧘‍♂️ Unfook Counter</h1>
      <p className="text-xl">Times you slipped: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-red-500 rounded-lg text-lg font-semibold hover:bg-red-600"
        >
          I Swore 😬
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-700 rounded-lg text-lg hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </main>
  );
}
