import React, { useState } from "react";
import { Modal } from "./Modal";
import { useModal } from "../hooks/useModal";

export const Modals = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  //   Using the custom hook useModal
  const [showModal2, OpenModal2, CloseModal2] = useModal();

  return (
    <>
      <h2>Modals</h2>
      <button onClick={handleOpenModal}>Modal 1</button>
      <Modal showModal={showModal} onClose={handleCloseModal}>
        <h3>Modal 1</h3>
        <p>This is a modal</p>
        <img
          src="https://fpoimg.com/200x150?text=Preview&bg_color=e6e6e6&text_color=8F8F8F"
          alt=""
        />
      </Modal>
      <button onClick={OpenModal2}>Modal 2</button>
      <Modal showModal={showModal2} onClose={CloseModal2}>
        <h3>Modal 2</h3>
        <p>This is a modal</p>
      </Modal>
    </>
  );
};
