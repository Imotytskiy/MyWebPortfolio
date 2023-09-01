export const getAlbums = async (params) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.params.albumId}/albums`
    );
    const data = await res.json();
    return { albums: data };
  } catch (error) {
    console.error(error);
  }
};
