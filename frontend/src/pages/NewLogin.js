import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserLogin } from "../script/controller";
import { useState } from "react";
import { useAuth } from "../script/useAuth";
import Mypic from "../img/Fall-Ingredient-Cover-Photo.gif";

function NewLogin({ onchangelogin }) {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const { login } = useAuth();

  return (
    <div className="new-login-page">
      <div className="login-slideshow">
      </div>
      <div className="login-right-part">
        
        <div>
        
          <form
            className="new-login-form"
            onSubmit={async (e) => {
              e.preventDefault();
              const tokenData = await UserLogin(userDetails);
              localStorage.setItem("userId", JSON.stringify(tokenData.userID));
              if ((await tokenData.token) === "error") {
                setError(true);
              } else {
                await login({ token: tokenData.token });
              }
              onchangelogin(false);
            }}
          >
            <span className="new-login-header">Welcome to Cookclick</span>
            <span>Email</span>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <input
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                style={{ borderColor: error ? "#ff0033" : "" }}
              />
            </Form.Group>
            <span>Password</span>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                style={{ borderColor: error ? "#ff0033" : "" }}
              />
              {error && (
                <div
                  className="text-sm px-1"
                  style={{ color: "#ff0033", fontWeight: "400" }}
                >
                  ! Incorrect email or password
                </div>
              )}
            </Form.Group>
            <button className="new-login-button" variant="primary" type="submit">
              Sign In
            </button>
            <div className="or-text">
              or
            </div>
            <button className="new-login-button" href="/sign-up">
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLogin;
