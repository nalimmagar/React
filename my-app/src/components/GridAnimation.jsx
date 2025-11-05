import React from 'react'
import { useState } from 'react'
import { useEffect } from "react";

export default function PurpleGrid() {
  const rows = 9;
  const cols = 26;
  const [positions, setPositions] = useState(Array(rows).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = positions.map((pos) => {
        let next = pos;
        while (next === pos) {
          next = Math.floor(Math.random() * cols);
        }
        return next;
      });
      setPositions(newPositions);
    }, 2000);

    return () => clearInterval(interval);
  }, [positions]);

  return (
    <div className="p-4">
      <h3 className="mb-4 font-semibold">9 x 26 Purple Grid</h3>

      <table className="border-collapse mx-auto">
        <tbody>
          {Array.from({ length: rows }).map((_, rIdx) => (
            <tr key={rIdx}>
              {Array.from({ length: cols }).map((_, cIdx) => (
                <td
                  key={cIdx}
                  className={`w-6 h-6 border border-gray-300 ${
                    positions[rIdx] === cIdx ? "bg-purple-600" : "bg-white"
                  }`}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}