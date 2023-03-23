import ReactModal from "react-modal";
import { ModalStyles } from "@/components/_common/Modal/Modal.styles";

ReactModal.setAppElement("#root");

const Modal = ({ contentLabel, isModalOpen, close, children }) => {
    return (
        <>
            <ModalStyles />
            <ReactModal
                isOpen={isModalOpen}
                contentLabel={contentLabel}
                onRequestClose={close}
                overlayClassName="overlay"
                className="content"
            >
                {children}
            </ReactModal>
        </>
    );
};

export default Modal;
