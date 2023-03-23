const priorityOptions = [
    {
        label: "Very High",
        color: "#ED4C5C",
        value: "very-high",
        point: 5,
    },
    {
        label: "High",
        color: "#F8A541",
        value: "high",
        point: 4,
    },
    {
        label: "Medium",
        color: "#00A790",
        value: "normal",
        point: 3,
    },
    {
        label: "Low",
        color: "#428BC1",
        value: "low",
        point: 2,
    },
    {
        label: "Very Low",
        color: "#8942C1",
        value: "very-low",
        point: 1,
    },
];

export const priorityLevels = priorityOptions.map((index) => index.value);

export default priorityOptions;
