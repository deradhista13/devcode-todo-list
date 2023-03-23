import { DangerIcon } from "@/assets";
import { Button } from "@/components/_common/Button";
import { Loader } from "@/components/_common/LoadingIndicator";
import Modal from "@/components/_common/Modal/Modal";
import useActivityStore from "@/stores/useActivityStore";
import useAlertStore from "@/stores/useAlertStore";
import useSuccessStore from "@/stores/useSuccessStore";
import useTodoStore from "@/stores/useTodoStore";
import {
    AlertWrapper,
    AlertMessage,
    AlertIcon,
    AlertButtons,
} from "@/components/ModalAlert/ModalAlert.styles";

const { deleteActivity } = useActivityStore.getState();
const { deleteTodo } = useTodoStore.getState();
const { closeAlert } = useAlertStore.getState();
const { openSuccess } = useSuccessStore.getState();

const ModalAlert = () => {
    const deletingActivity = useActivityStore(
        (state) => state.activity.deleting
    );
    const deletingTodo = useTodoStore((state) => state.todo.deleting);

    const deleting = deletingActivity || deletingTodo;

    const { open, type, title, id } = useAlertStore((state) => state.alert);

    const alertTypeText = type === "activity" ? "activity" : "item";

    const deleteItem = async () => {
        if (type === "activity") {
            await deleteActivity(id);
            closeAlert();
            openSuccess({
                type: "activity",
            });
        }

        if (type === "todo") {
            await deleteTodo(id);
            closeAlert();
            openSuccess({
                type: "todo",
            });
        }
    };

    return (
        <Modal close={closeAlert} isModalOpen={open} contentLabel="modal-alert">
            <AlertWrapper data-cy="modal-delete">
                <AlertIcon data-cy="modal-delete-icon">
                    <DangerIcon />
                </AlertIcon>
                <AlertMessage data-cy="modal-delete-title">
                    Apakah anda yakin menghapus {alertTypeText}{" "}
                    <strong>&ldquo;{title}&rdquo;</strong>?
                </AlertMessage>
                <AlertButtons>
                    <Button
                        data-cy="modal-delete-cancel-button"
                        onClick={closeAlert}
                        variant="ghost"
                    >
                        Batal
                    </Button>
                    <Button
                        data-cy="modal-delete-confirm-button"
                        onClick={deleteItem}
                        variant="danger"
                        disabled={deleting}
                    >
                        {deleting ? <Loader size="button" /> : "Hapus"}
                    </Button>
                </AlertButtons>
            </AlertWrapper>
        </Modal>
    );
};

export default ModalAlert;
