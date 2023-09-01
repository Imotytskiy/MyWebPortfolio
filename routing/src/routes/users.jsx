import { NavLink, useNavigation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Users() {
  const { users } = useLoaderData();
  const { state } = useNavigation();
  return (
    <>
      {state === "loading" ? (
        <p> LOADING </p>
      ) : (
        <nav>
          <h1>HW 34. React router</h1>
          <table>
            <thead>
              <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.id}</td>
                  <td>
                    <NavLink
                      key={user.id}
                      className="new-contact"
                      to={`/albums/${user.id}`}
                    >
                      Albums
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </nav>
      )}
    </>
  );
}
