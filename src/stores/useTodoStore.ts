import create from "zustand";
import produce from "immer";

const apiUrl: String = import.meta.env.VITE_API_URL;

const initialTodo: Object = {
    loading: true,
    deleting: false,
    creating: false,
    activityId: "",
    activityTitle: "",
    list: [],
    sortedLatest: [],
    filter: "latest",
};

const useTodoStore: any = create((set, get: any) => {
    return {
        todo: initialTodo,
        resetTodo: async () => {
            set(
                produce((draft: any) => {
                    draft.todo.activityTitle = "";
                })
            );
        },
        createTodo: async (options) => {
            get().changeCreating(true);

            try {
                const res = await fetch(`${apiUrl}/todo-items`, {
                    headers: {
                        "content-type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        ...options,
                        activity_group_id: get().todo.activityId,
                    }),
                });

                const newTodo = await res.json();

                set(
                    produce((draft: any) => {
                        draft.todo.list.unshift(newTodo);
                        draft.todo.sortedLatest.unshift(newTodo);
                    })
                );

                get().filterTodo();
            } catch (error) {
                console.log(error);
            } finally {
                get().changeCreating(false);
            }
        },
        editTodo: async (options) => {
            get().changeCreating(true);

            try {
                const res = await fetch(`${apiUrl}/todo-items/${options.id}`, {
                    headers: {
                        "content-type": "application/json",
                    },
                    method: "PATCH",
                    body: JSON.stringify(options),
                });

                const updatedValues = await res.json();

                set(
                    produce((draft: any) => {
                        draft.todo.list = draft.todo.list.map((item) => {
                            if (item.id === updatedValues.id) {
                                return updatedValues;
                            }

                            return item;
                        });

                        draft.todo.sortedLatest = draft.todo.sortedLatest.map(
                            (item) => {
                                if (item.id === updatedValues.id) {
                                    return updatedValues;
                                }

                                return item;
                            }
                        );
                    })
                );

                get().filterTodo();
            } catch (error) {
                console.log(error);
            } finally {
                get().changeCreating(false);
            }
        },
        deleteTodo: async (id) => {
            get().changeDeleting(true);

            try {
                await fetch(`${apiUrl}/todo-items/${id}`, {
                    method: "DELETE",
                });

                set(
                    produce((draft: any) => {
                        const newList = draft.todo.list.filter(
                            (item) => item.id !== id
                        );
                        draft.todo.list = newList;

                        const newSortedLatest = draft.todo.sortedLatest.filter(
                            (item) => item.id !== id
                        );
                        draft.todo.sortedLatest = newSortedLatest;
                    })
                );
            } catch (error) {
                console.log(error);
            } finally {
                get().changeDeleting(false);
            }
        },
        getAllTodo: async (activityId) => {
            get().changeLoading(true);
            get().resetTodo();

            try {
                const res = await fetch(
                    `${apiUrl}/activity-groups/${activityId}`
                );

                const { id, title, todo_items } = await res.json();

                set(
                    produce((draft: any) => {
                        draft.todo.activityId = id;
                        draft.todo.activityTitle = title;
                        draft.todo.list = todo_items;
                        draft.todo.sortedLatest = todo_items;
                    })
                );
            } catch (error) {
                console.log(error);
            } finally {
                get().changeLoading(false);
            }
        },
        filterTodo: () => {
            const filter = get().todo.filter;

            set(
                produce((draft: any) => {
                    switch (filter) {
                        case "latest":
                            draft.todo.list = draft.todo.sortedLatest;
                            break;
                        case "oldest":
                            draft.todo.list = draft.todo.sortedLatest
                                .slice()
                                .reverse();
                            break;
                        case "a-z":
                            draft.todo.list = draft.todo.list.sort((a, b) => {
                                return a.title.localeCompare(b.title);
                            });
                            break;
                        case "z-a":
                            draft.todo.list = draft.todo.list.sort((a, b) => {
                                return b.title.localeCompare(a.title);
                            });
                            break;
                        case "unfinished":
                            draft.todo.list = draft.todo.list.sort(
                                (a, b) => b.is_active - a.is_active
                            );
                            break;
                        default:
                            break;
                    }
                })
            );
        },
        changeFilter: (newFilter) => {
            set(
                produce((draft: any) => {
                    draft.todo.filter = newFilter;
                })
            );
        },
        changeLoading: (val) => {
            set(
                produce((draft: any) => {
                    draft.todo.loading = val;
                })
            );
        },
        changeDeleting: (val) => {
            set(
                produce((draft: any) => {
                    draft.todo.deleting = val;
                })
            );
        },
        changeCreating: (val) => {
            set(
                produce((draft: any) => {
                    draft.todo.creating = val;
                })
            );
        },
    };
});

export default useTodoStore;
