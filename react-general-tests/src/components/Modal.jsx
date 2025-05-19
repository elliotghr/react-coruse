import React from "react";
import "./Modal.css";

export const Modal = (props) => {
  return (
    <div
      className={"modal-container" + (props.showModal ? " show" : "")}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={props.onClose}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};
