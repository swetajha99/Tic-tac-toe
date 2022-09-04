import React from "react";

const Square = ({ value, chooseValue }) => {
  return (
    <div onClick={chooseValue} className="square">
      {value}
    </div>
  );
};
export default Square;
