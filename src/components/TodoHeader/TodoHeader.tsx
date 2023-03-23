import { useNavigate } from "react-router-dom";
import { BackIcon } from "@/assets";
import AddButton from "@/components/_common/Button";
import TodoFilter from "@/components/TodoFilter/TodoFilter";
import {
    TodoHeaderWrapper,
    HeaderSection,
    BackButton,
} from "@/components/TodoHeader/TodoHeader.styles";
import TodoTitle from "@/components/TodoTitle/TodoTitle";
import useTodoModalStore from "@/stores/useTodoModalStore";
import useTodoStore from "@/stores/useTodoStore";

const { openTodoModal } = useTodoModalStore.getState();

const TodoHeader = () => {
    const navigate = useNavigate();
    const goToDashboard = () => navigate("/");
    const activityTitle = useTodoStore((state) => state.todo.activityTitle);
    const activityId = useTodoStore((state) => state.todo.activityId);

    const showTodoModal = () => {
        openTodoModal({ type: "add" });
    };

    return (
        <TodoHeaderWrapper>
            <HeaderSection>
                <BackButton data-cy="todo-back-button" onClick={goToDashboard}>
                    <BackIcon />
                </BackButton>
                <TodoTitle title={activityTitle} activityId={activityId} />
            </HeaderSection>

            <HeaderSection>
                <TodoFilter />
                <AddButton data-cy="todo-add-button" onClick={showTodoModal}>
                    Tambah
                </AddButton>
            </HeaderSection>
        </TodoHeaderWrapper>
    );
};

export default TodoHeader;
