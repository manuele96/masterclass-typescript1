import { useEffect, useState } from "react";
import User from "./components/Users";
import api from "./services/api";
interface IUser {
  name: string;
  email?: string;
}
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    api.get<IUser[]>("/users").then((Response) => {
      setUsers(Response.data);
    });
  }, []);
  return (
    <div className="App">
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
