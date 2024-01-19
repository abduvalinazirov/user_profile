import { useQuery } from "react-query";
import "./App.css";
import { IUser } from "./types/data.models";

const fetchUsers = async (): Promise<IUser[]> => {
  const response = await fetch("https://mswjs.io/");
  return response.json();
};

function App() {
  const { data: users, isLoading } = useQuery<IUser[]>("users-list", fetchUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(users);
  return <div>App</div>;
}

export default App;
