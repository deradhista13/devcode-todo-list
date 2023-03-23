import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useTodoStore from "@/stores/useTodoStore";

const { getAllTodo } = useTodoStore.getState();

const useTodo = () => {
    const { activityId } = useParams();

    const loading = useTodoStore((state) => state.todo.loading);
    const todoList = useTodoStore((state) => state.todo.list);

    useEffect(() => {
        getAllTodo(activityId);
    }, []);

    return { loading, todoList };
};

export default useTodo;
