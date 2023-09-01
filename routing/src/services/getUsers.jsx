export const getUsers = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return { users: data };
  } catch (error) {
    console.error(error);
  }
};
