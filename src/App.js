import React, { useState } from "react";
import UserList from "./components/propsDrilling/UserList";
import { userData } from "./components/propsDrilling/data";
import UserContext from "./context/userContext";


function App() {
  const [users, setusers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setusers(newUsers);
  };

  return (
    <UserContext.Provider value = {{users, deleteUser}}>
    <div className="--flex-center ">
      <div className="--width-500px --my">
        <h2>Props Drilling</h2>
        <UserList />
      </div>
    </div></UserContext.Provider>
  );
}

export default App;
