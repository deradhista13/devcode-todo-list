import create from "zustand";
import produce from "immer";

const initialDialog: Object = {
    open: false,
    title: "",
    priority: "very-high",
    id: 0,
};

const useTodoModalStore: any = create((set, get: any) => {
    return {
        dialog: initialDialog,
        openTodoModal: (options) => {
            set(
                produce((draft: any) => {
                    if (options.type === "add") {
                        draft.dialog = {
                            open: true,
                            title: "",
                            priority: "very-high",
                            type: "add",
                        };
                    } else {
                        draft.dialog = {
                            open: true,
                            ...options,
                        };
                    }
                })
            );
        },
        closeTodoModal: () => {
            set(
                produce((draft: any) => {
                    draft.dialog.open = false;
                    draft.dialog.title = "";
                    draft.dialog.priority = "very-high";
                })
            );
        },
    };
});

export default useTodoModalStore;
