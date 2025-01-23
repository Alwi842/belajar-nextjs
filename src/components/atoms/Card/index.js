import React from "react";
const Card = ({ children }) => {
  return (
    <>
      <div className="relative rounded bg-white shadow overflow-hidden group">
        {children}
      </div>
    </>
  );
};

export default Card;
