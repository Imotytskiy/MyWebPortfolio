export const ROUTES = {
  root: "/",
  albums: (userId = "") =>
    albumsId ? `/users/${userId}/albums` : "users/:userId",
};
