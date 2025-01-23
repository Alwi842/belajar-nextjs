import React from "react";

const StatisticMolecule = ({ number, text }) => {
  return (
    <>
      <div className="p-6">
        <h3 className="text-6xl font-bold text-yellow-400 mb-2">{number}</h3>
        <span className="text-lg text-black font-bold">{text}</span>
      </div>
    </>
  );
};

export default StatisticMolecule;
