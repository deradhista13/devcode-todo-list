import { InformationIcon } from "@/assets";
import Modal from "@/components/_common/Modal/Modal";
import {
    SuccessWrapper,
    SuccessMessage,
    Icon,
} from "@/components/ModalSuccess/ModalSuccess.styles";
import useSuccessStore from "@/stores/useSuccessStore";

const { closeSuccess } = useSuccessStore.getState();

const ModalSucess = () => {
    const { open, type } = useSuccessStore((state) => state.success);

    return (
        <Modal
            isModalOpen={open}
            close={closeSuccess}
            contentLabel="modal-success"
        >
            <SuccessWrapper data-cy="modal-information">
                <Icon data-cy="modal-information-icon">
                    <InformationIcon />
                </Icon>
                <SuccessMessage data-cy="modal-information-title">
                    {type === "activity"
                        ? "Activity berhasil dihapus"
                        : "List Item berhasil dihapus"}
                </SuccessMessage>
            </SuccessWrapper>
        </Modal>
    );
};

export default ModalSucess;
