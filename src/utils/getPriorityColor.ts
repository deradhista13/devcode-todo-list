import priorityOptions from "@/constants/priorityOptions";

export const getPriorityColor = (value) => {
    return priorityOptions.filter((item) => {
        return item.value === value;
    })[0].color;
};
