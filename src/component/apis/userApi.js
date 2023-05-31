export const fetchUsers = async () => {
    const response = await fetch('https://dummyjson.com/users/');
    const json = await response.json();
    return json;
};