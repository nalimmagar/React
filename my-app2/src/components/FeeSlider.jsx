import React from "react";

const FeeSlider = ({ value, onChange, onReset }) => {
  return (
    <div className="flex flex-col gap-2 w-[220px]">
      <label className="font-semibold">Fee Range</label>
      <input
        type="range"
        min={100}
        max={10000}
        step={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-sm">
        <span>Min ($) 100</span>
        <span>Max ($) 10000</span>
      </div>
      <div className="flex justify-between mt-1">
        <span>Selected: ${value}</span>
        <button
          type="button"
          onClick={onReset}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FeeSlider;
