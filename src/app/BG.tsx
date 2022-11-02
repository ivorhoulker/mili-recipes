import React from "react";

function BG() {
  return (
    <div
      className="absolute top-0 left-0 z-0 min-h-full min-w-full bg-repeat opacity-70"
      style={{
        backgroundImage: `url("/i-like-food.svg")`,
      }}
    />
  );
}

export default BG;
