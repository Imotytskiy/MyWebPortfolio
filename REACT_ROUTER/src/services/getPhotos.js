export const getPhotos = async (params) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos`
    );
    const data = await res.json();
    return { photos: data };
  } catch (error) {
    console.error(error);
  }
};
// ${params.params.albumId}
