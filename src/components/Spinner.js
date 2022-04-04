import React, { Component } from "react";
import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div
      className="text-center"
      style={{
        borderRadius: "2rem",
      }}
    >
      <img
        src={loading}
        alt={loading}
        style={{
          borderRadius: "2rem",
        }}
      />
    </div>
  );
};

export default Spinner;
