import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import { ContactForm } from "./ContactForm";
import { SongSearch } from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpen3, openModal3, closeModal3] = useModal(false);
  const [isOpen4, openModal4, closeModal4] = useModal(false);
  const [isOpen5, openModal5, closeModal5] = useModal(false);

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
      <button onClick={openModal3}>Modal Contacto</button>
      <Modal isOpen={isOpen3} closeModal={closeModal3}>
        <ContactForm />
      </Modal>
      <button onClick={openModal4}>Modal Canciones</button>
      <Modal isOpen={isOpen4} closeModal={closeModal4}>
        <SongSearch />
      </Modal>
      <button onClick={openModal5}>Modal en Portal</button>
      <ModalPortal isOpen={isOpen5} closeModal={closeModal5}>
        <h3>Modal en Portal</h3>
        <p>
          Hola este es el contenido de mi modal que carga en ootro nodo del DOM
          diferente donde carga nuestra app de React, gracias a un React Portal
        </p>
        <img
          src="https://fpoimg.com/300x250?text=Modal-Image&bg_color=e6e6e6&text_color=8F8F8F"
          alt="image"
        />
      </ModalPortal>
    </div>
  );
};

export default Modals;
