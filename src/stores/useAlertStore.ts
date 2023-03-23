import create from "zustand";
import produce from "immer";

const initialAlert: Object = {
    open: false,
    type: "activity",
    title: "New Activity",
    id: 0,
};

const useAlertStore: any = create((set, get: any) => {
    return {
        alert: initialAlert,
        openAlert: (options) => {
            set(
                produce((draft: any) => {
                    draft.alert = {
                        open: true,
                        ...options,
                    };
                })
            );
        },
        closeAlert: () => {
            set(
                produce((draft: any) => {
                    draft.alert.open = false;
                })
            );
        },
    };
});

export default useAlertStore;
