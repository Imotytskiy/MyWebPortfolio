import { NavLink, useNavigation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Photos() {
  const { photos } = useLoaderData();
  const { state } = useNavigation();
  return (
    <>
      {state === "loading" ? (
        <p> LOADING </p>
      ) : (
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <td>
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </td>
              <td>{photo.title}</td>
              <td>{photo.id}</td>
              <td>
                <NavLink className="button-album" to="/">
                  ПОВЕРНУТИСЯ
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </>
  );
}
