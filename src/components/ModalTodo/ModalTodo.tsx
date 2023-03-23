import { useState, useEffect } from "react";
import { ChecklistIcon } from "@/assets";
import { ArrowUpIcon } from "@/assets";
import Modal from "@/components/_common/Modal/Modal";
import Select from "@/components/_common/Select/Select";
import priorityOptions, { priorityLevels } from "@/constants/priorityOptions";
import ModalTodoHeader from "@/components/ModalTodo/ModalTodoHeader";
import ModalTodoFooter from "@/components/ModalTodo/ModalTodoFooter";
import {
    ModalTodoWrapper,
    ModalContent,
    FieldItem,
    FieldLabel,
    FieldInput,
    PrioritySelect,
    PriorityItem,
    PriorityColor,
    PrioritySelectTrigger,
    PriorityIcon,
} from "@/components/ModalTodo/ModalTodo.styles";
import useTodoModalStore from "@/stores/useTodoModalStore";
import useTodoStore from "@/stores/useTodoStore";

const { closeTodoModal } = useTodoModalStore.getState();
const { createTodo, editTodo } = useTodoStore.getState();

const ModalTodo = () => {
    const { open, type, title, priority, id } = useTodoModalStore(
        (state) => state.dialog
    );

    // Todo Title State
    const [todoTitle, setTodoTitle] = useState(title);
    const handleTodoTitleChange = (e) => {
        // Sanitize input value here

        setTodoTitle(e.target.value);
    };

    // Priority options state
    const [activePriority, setActivePriority] = useState(
        priorityLevels.indexOf(priority)
    );
    const handlePriorityChange = (index) => {
        setActivePriority(index);
    };

    const activeColor = priorityOptions[activePriority].color;
    const activeLabel = priorityOptions[activePriority].label;

    // Form state
    const submit = async () => {
        // If there is no difference don't submit
        if (
            title === todoTitle &&
            priorityLevels.indexOf(priority) === activePriority
        ) {
            closeTodoModal();

            return;
        }

        const newTodoItem = {
            priority: priorityLevels[activePriority],
            title: todoTitle,
        };

        if (type === "add") {
            await createTodo(newTodoItem);
        }

        if (type === "edit") {
            await editTodo({ ...newTodoItem, id });
        }

        closeTodoModal();
    };
    const isSubmitDisabled = !todoTitle;

    // Sync local state to parent
    useEffect(() => {
        if (open) {
            setTodoTitle(title);
            setActivePriority(priorityLevels.indexOf(priority));
        }
    }, [title, priority, open]);

    return (
        <Modal
            close={closeTodoModal}
            isModalOpen={open}
            contentLabel="modal-todo"
        >
            <ModalTodoWrapper data-cy="modal-add">
                <ModalTodoHeader type={type} closeTodoModal={closeTodoModal} />

                <ModalContent>
                    <FieldItem>
                        <FieldLabel
                            data-cy="modal-add-name-title"
                            htmlFor="todo-title"
                        >
                            Nama List Item
                        </FieldLabel>
                        <FieldInput
                            data-cy="modal-add-name-input"
                            name="todo-title"
                            onChange={handleTodoTitleChange}
                            value={todoTitle}
                            type="text"
                            placeholder="Tambahkan nama list item"
                            spellCheck={false}
                        />
                    </FieldItem>

                    <FieldItem>
                        <FieldLabel data-cy="modal-add-priority-title">
                            Priority
                        </FieldLabel>
                        <PrioritySelect data-cy="modal-add-priority-dropdown">
                            <Select
                                dataCy=""
                                onChange={handlePriorityChange}
                                activeOption={activePriority}
                                optionsList={priorityOptions}
                                childrenDataCy="modal-add-priority-item"
                                trigger={
                                    <PrioritySelectTrigger>
                                        <PriorityItem>
                                            <PriorityColor
                                                color={activeColor}
                                            />
                                            <span>{activeLabel}</span>
                                            <PriorityIcon>
                                                <ArrowUpIcon />
                                            </PriorityIcon>
                                        </PriorityItem>
                                    </PrioritySelectTrigger>
                                }
                                valueKey="value"
                                labels={priorityOptions.map(
                                    ({ label, value, color }, id) => {
                                        return (
                                            <PriorityItem key={value}>
                                                <PriorityColor color={color} />
                                                <span>{label}</span>
                                                <PriorityIcon>
                                                    {activePriority === id && (
                                                        <ChecklistIcon className="check" />
                                                    )}
                                                </PriorityIcon>
                                            </PriorityItem>
                                        );
                                    }
                                )}
                            />
                        </PrioritySelect>
                    </FieldItem>
                </ModalContent>

                <ModalTodoFooter
                    isSubmitDisabled={isSubmitDisabled}
                    submit={submit}
                />
            </ModalTodoWrapper>
        </Modal>
    );
};

export default ModalTodo;
