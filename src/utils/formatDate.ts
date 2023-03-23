const dateTime = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
});

export const formatDate = (date) => {
    return dateTime.format(new Date(date));
};
