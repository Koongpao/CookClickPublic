import { useState } from "react";
import { AddUser } from "./controller";

const NewUser = () => {
  const [user, setUser] = useState({
    "email": "yaya@testtest.com",
    "displayname": "ayaya",
    "password" : "ayaya"
  });

  const handleClicked = (e) => {
    e.preventDefault();
    AddUser(user);
  }

  return (
    <div>
      <button onClick={handleClicked}>TEST signup</button>
    </div>
  );
}

export default NewUser





