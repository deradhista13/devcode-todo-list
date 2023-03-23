import create from "zustand";
import produce from "immer";

const apiUrl: String = import.meta.env.VITE_API_URL;

const defaultActivity: Object = {
    email: "web.arief.id@gmail.com",
    title: "New Activity",
};

const initialActivity: Object = {
    loading: true,
    deleting: false,
    creating: false,
    list: [],
};

const useActivityStore: any = create((set, get: any) => {
    return {
        activity: initialActivity,
        updateActivity: async (title: string, id: number) => {
            try {
                await fetch(`${apiUrl}/activity-groups/${id}`, {
                    headers: {
                        "content-type": "application/json",
                    },
                    method: "PATCH",
                    body: JSON.stringify({ title }),
                });
            } catch (error) {
                console.log(error);
            }
        },
        deleteActivity: async (id) => {
            get().changeDeleting(true);

            try {
                const res = await fetch(`${apiUrl}/activity-groups/${id}`, {
                    method: "DELETE",
                });

                set(
                    produce((draft: any) => {
                        const newList = draft.activity.list.filter(
                            (item) => item.id !== id
                        );
                        draft.activity.list = newList;
                    })
                );
            } catch (error) {
                console.log(error);
            } finally {
                get().changeDeleting(false);
            }
        },
        createActivity: async () => {
            get().changeCreating(true);

            try {
                await fetch(`${apiUrl}/activity-groups`, {
                    headers: {
                        "content-type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(defaultActivity),
                });

                get().getAllActivity({ noLoading: true });
            } catch (error) {
                console.log(error);
            } finally {
                get().changeCreating(false);
            }
        },
        getAllActivity: async (options) => {
            const { noLoading } = options || {};

            if (!noLoading) {
                get().changeLoading(true);
            }

            try {
                const res = await fetch(
                    `${apiUrl}/activity-groups?email=web.arief.id%40gmail.com`
                );

                const { data } = await res.json();
                set(
                    produce((draft: any) => {
                        draft.activity.list = data;
                    })
                );
            } catch (error) {
                console.log(error);
            } finally {
                get().changeLoading(false);
            }
        },
        changeLoading: (val) => {
            set(
                produce((draft: any) => {
                    draft.activity.loading = val;
                })
            );
        },
        changeDeleting: (val) => {
            set(
                produce((draft: any) => {
                    draft.activity.deleting = val;
                })
            );
        },
        changeCreating: (val) => {
            set(
                produce((draft: any) => {
                    draft.activity.creating = val;
                })
            );
        },
    };
});

export default useActivityStore;
