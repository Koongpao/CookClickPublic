import { useState } from "react";
import { Login } from "./controller";

const NewLogin = () => {
  const [user, setUser] = useState({
    "email" : "yaya@testera.tx",
    "password" : "yaya",
  });

  const handleClicked = (e) => {
    e.preventDefault();
    Login(user);
  }

  return (
    <div>
      <button onClick={handleClicked}>TEST Login</button>
    </div>
  );
}

export default NewLogin