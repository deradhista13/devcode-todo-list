import { useEffect, useState, useRef } from "react";
import { PencilIcon } from "@/assets";
import {
    TodoTitleWrapper,
    TitlePreview,
    TitleEdit,
    EditButton,
} from "@/components/TodoTitle/TodoTitle.styles";
import useActivityStore from "@/stores/useActivityStore";

const { updateActivity } = useActivityStore.getState();

const TodoTitle = ({ title, activityId }) => {
    const editRef: any = useRef();

    const [active, setActive] = useState(false);
    const [text, setText] = useState("");

    const toggle = () => setActive((prev) => !prev);

    const handleTextChange = (e) => setText(e.target.value);

    const updateTitle = () => {
        toggle();

        // Only update when title is different with text
        if (title !== text) {
            updateActivity(text, activityId);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            updateTitle();
        }
    };

    // Focus to edit
    useEffect(() => {
        if (active) {
            editRef?.current?.focus();
        }
    }, [active]);

    // Sync state to parent (activity
    useEffect(() => {
        setText(title);
    }, [title]);

    return (
        <TodoTitleWrapper>
            {active ? (
                <TitleEdit
                    as="input"
                    ref={editRef}
                    value={text}
                    onChange={handleTextChange}
                    onBlur={updateTitle}
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                />
            ) : (
                <TitlePreview data-cy="todo-title" onClick={updateTitle}>
                    {text}
                </TitlePreview>
            )}

            <EditButton data-cy="todo-title-edit-button" onClick={toggle}>
                <PencilIcon />
            </EditButton>
        </TodoTitleWrapper>
    );
};

export default TodoTitle;
