import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import { ContactForm } from "./ContactForm";
import { SongSearch } from "./SongSearch";

const Modals = () => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpen3, openModal3, closeModal3] = useModal(false);
  const [isOpen4, openModal4, closeModal4] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal}>Modal 1</button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img
          src="https://fpoimg.com/300x250?text=Modal-Image&bg_color=e6e6e6&text_color=8F8F8F"
          alt="image"
        />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola este es el contenido de mi modal 2</p>
        <img
          src="https://fpoimg.com/300x250?text=Modal-Image&bg_color=e6e6e6&text_color=8F8F8F"
          alt="image"
        />
      </Modal>
      <button onClick={openModal3}>Modal 3</button>
      <Modal isOpen={isOpen3} closeModal={closeModal3}>
        <ContactForm />
      </Modal>
      <button onClick={openModal4}>Modal 4</button>
      <Modal isOpen={isOpen4} closeModal={closeModal4}>
        <SongSearch />
      </Modal>
    </div>
  );
};

export default Modals;
