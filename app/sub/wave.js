"use client";
import { useState, useEffect } from "react";

export default function Waveform() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const randomBars = Array.from({ length: 23 }).map((_, i) => ({
      id: i,
      width: Math.floor(Math.random() * (20 - 6 + 1)) + 6,
      color: i % 2 === 0 ? "#9ca3af" : "#4b5563",
    }));
    setBars(randomBars);
  }, []);

  return (
    <>
      {bars.map((bar) => (
          <div
          key={bar.id}
          className="h-[4px] rounded-sm"
          style={{
              width: `${bar.width}px`,
              backgroundColor: bar.color,
            }}
            />
        ))}

    </>
  );
}
