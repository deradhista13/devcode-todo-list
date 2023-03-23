import { Loader } from "@/components/_common/LoadingIndicator";
import EmptyList from "@/components/EmptyList/EmptyList";
import TodoCard from "@/components/TodoCard/TodoCard";
import TodoHeader from "@/components/TodoHeader/TodoHeader";
import useTodo from "@/hooks/useTodo";
import { TodoList } from "@/layouts/Todo/Todo.styles";

const Todo = () => {
    const { loading, todoList: cards } = useTodo();

    if (loading) {
        return (
            <>
                <TodoHeader />
                <Loader variant="primary" />
            </>
        );
    }

    if (!cards?.length) {
        return (
            <>
                <TodoHeader />
                <EmptyList type="todo" />
            </>
        );
    }

    return (
        <>
            <TodoHeader />
            <TodoList>
                {cards?.length > 0 &&
                    cards.map((item) => {
                        return <TodoCard item={item} key={item.id} />;
                    })}
            </TodoList>
        </>
    );
};

export default Todo;
