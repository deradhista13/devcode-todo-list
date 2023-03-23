import create from "zustand";
import produce from "immer";

const initialSuccess: Object = {
    open: false,
    type: "activity",
};

const useSuccessStore: any = create((set, get: any) => {
    return {
        success: initialSuccess,
        openSuccess: (options) => {
            set(
                produce((draft: any) => {
                    draft.success = {
                        open: true,
                        ...options,
                    };
                })
            );
        },
        closeSuccess: () => {
            set(
                produce((draft: any) => {
                    draft.success.open = false;
                })
            );
        },
    };
});

export default useSuccessStore;
