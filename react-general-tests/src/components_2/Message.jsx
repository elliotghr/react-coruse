import React from "react";

export const Message = ({ message, color }) => {
  let styles = {
    color: "white",
    textAlign: "center",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: color || "black",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <p style={styles}>{message}</p>
    </div>
  );
};
