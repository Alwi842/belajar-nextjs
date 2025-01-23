import React from "react";

const ProgressBar = ({ progress, color = "bg-[#00ce1b]" }) => {
  return (
    <>
      <div className="w-full bg-gray-300 rounded-sm h-6 overflow-hidden mx-auto">
        <div
          className={`${color} h-full rounded-sm text-right text-white text-[10px]`}
          style={{ width: `${progress}%` }}
        >
          <p className="pr-2">{progress}%</p>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
