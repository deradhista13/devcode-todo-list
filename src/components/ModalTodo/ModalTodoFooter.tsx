import { Button } from "@/components/_common/Button";
import { Loader } from "@/components/_common/LoadingIndicator";
import { ModalFooter } from "@/components/ModalTodo/ModalTodo.styles";
import useTodoStore from "@/stores/useTodoStore";

const ModalTodoFooter = ({ isSubmitDisabled, submit }) => {
    const creating = useTodoStore((state) => state.todo.creating);

    return (
        <ModalFooter isSubmitDisabled={isSubmitDisabled}>
            <Button
                data-cy="modal-add-save-button"
                disabled={isSubmitDisabled || creating}
                onClick={submit}
            >
                {creating ? <Loader size="button" /> : "Simpan"}
            </Button>
        </ModalFooter>
    );
};

export default ModalTodoFooter;
