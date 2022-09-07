import { useState } from "react";
import { UserLogin } from "./controller";

const NewLogin = () => {
  const [user, setUser] = useState({
    "email" : "yaya@testtest.com",
    "password" : "ayaya",
  });

  const handleClicked = (e) => {
    e.preventDefault();
    UserLogin(user);
  }

  return (
    <div>
      <button onClick={handleClicked}>TEST Login</button>
    </div>
  );
}

export default NewLogin