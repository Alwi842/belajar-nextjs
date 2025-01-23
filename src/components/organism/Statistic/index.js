import React from "react";
import StatisticMolecule from "@/components/molecules/StatisticMolecule";
const Statistic = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center py-5 bg-gray-100">
          <div className="lg:flex text-center bg-white shadow-md rounded-md">
            <StatisticMolecule number="113" text="Lecturer" />
            <StatisticMolecule number="5" text="Study program" />
            <StatisticMolecule number="3413" text="Student" />
            <StatisticMolecule number="41" text="Staff" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistic;
