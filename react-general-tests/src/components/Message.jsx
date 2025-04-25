import React from "react";

export const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    margin: "1rem auto",
    textAlign: "center",
    width: "90%",
    maxWidth: "600px",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};
