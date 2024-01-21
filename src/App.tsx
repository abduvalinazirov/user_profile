import { useQuery } from "react-query";
import { IUser } from "./types/data.models";
import { Link } from "react-router-dom";
import { getUsers } from "./services/userApi";
import "./App.css";

function App() {
  const { data: users, isLoading } = useQuery<IUser[]>("users-list", getUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <h2 className="users__title">Users list</h2>
        <ul className="users__list">
          {users?.map((user) => (
            <li className="user__item" key={user.id}>
              <Link to={`/profile/${user.id}`}>
                <div className="user__wrapper">
                  <img src={user.image} alt="" className="user__image" />
                  <p className="user__name">{user.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
