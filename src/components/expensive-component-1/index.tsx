import React from "react";

const ExpensiveComponent1 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3>Just for the demo [[ 1 ]]</h3>
        <h2>Im a very expensive component ( Not really ) </h2>
      </div>
      <img src="/images/aboutus.webp" />
    </div>
  );
};

export default ExpensiveComponent1;
