

export const fetchEvents = () => {
    return fetch("data.json").then((response) => response.json());
}