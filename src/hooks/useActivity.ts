import { useEffect } from "react";
import useActivityStore from "@/stores/useActivityStore";

const { getAllActivity } = useActivityStore.getState();

const useActivity = () => {
    const loading = useActivityStore((state) => state.activity.loading);
    const activity = useActivityStore((state) => state.activity.list);

    useEffect(() => {
        getAllActivity();
    }, []);

    return { loading, activity };
};

export default useActivity;
