import { useState } from "react";
import { TrashIcon } from "@/assets";
import { PencilIcon } from "@/assets";
import Checkbox from "@/components/_common/Checkbox/Checkbox";
import { DeleteButton } from "@/components/_common/DeleteButton";
import {
    Card,
    CardInfo,
    PriorityIndicator,
    CardTitle,
    EditButton,
} from "@/components/TodoCard/TodoCard.styles";
import useAlertStore from "@/stores/useAlertStore";
import useTodoModalStore from "@/stores/useTodoModalStore";
import useTodoStore from "@/stores/useTodoStore";
import { getPriorityColor } from "@/utils/getPriorityColor";

const { openTodoModal } = useTodoModalStore.getState();
const { openAlert } = useAlertStore.getState();
const { editTodo } = useTodoStore.getState();

const TodoCard = ({ item }) => {
    const isFinished = Boolean(!item.is_active);
    const [checked, setChecked] = useState(isFinished);

    const handleChange = (val) => {
        editTodo({
            id: item.id,
            is_active: !val,
        });
        setChecked(val);
    };

    const showEditModal = () => {
        openTodoModal({
            type: "edit",
            title: item.title,
            priority: item.priority,
            id: item.id,
        });
    };

    const showDeleteModal = () => {
        openAlert({
            type: "todo",
            title: item.title,
            id: item.id,
        });
    };

    return (
        <Card data-cy="todo-item">
            <CardInfo>
                <Checkbox
                    dataCy="todo-item-checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                <PriorityIndicator
                    data-cy="todo-item-priority-indicator"
                    style={{
                        backgroundColor: getPriorityColor(item.priority),
                    }}
                />
                <CardTitle data-cy="todo-item-title" checked={checked}>
                    {item.title}
                </CardTitle>
                <EditButton
                    data-cy="todo-item-edit-button"
                    onClick={showEditModal}
                >
                    <PencilIcon />
                </EditButton>
            </CardInfo>
            <DeleteButton
                onClick={showDeleteModal}
                data-cy="todo-item-delete-button"
            >
                <TrashIcon />
            </DeleteButton>
        </Card>
    );
};

export default TodoCard;
