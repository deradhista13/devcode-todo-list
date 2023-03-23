import { CrossIcon } from "@/assets";
import {
    ModalCloseButton,
    ModalHeader,
    ModalTitle,
} from "@/components/ModalTodo/ModalTodo.styles";

const ModalTodoHeader = ({ closeTodoModal, type }) => {
    const title = type === "add" ? "Tambah List Item" : "Edit Item";

    return (
        <ModalHeader>
            <ModalTitle data-cy="modal-add-title">{title}</ModalTitle>
            <ModalCloseButton
                data-cy="modal-close-button"
                onClick={closeTodoModal}
            >
                <CrossIcon />
            </ModalCloseButton>
        </ModalHeader>
    );
};

export default ModalTodoHeader;
