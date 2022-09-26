import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { UserLogin } from "../script/controller"
import { useState } from "react"
import { useAuth } from "../script/useAuth"

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  })

  const { login } = useAuth()

  return (
    <>
      <h1 className="m-5 text-center">Login</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col formbox p-4" onSubmit={async (e) => {
          e.preventDefault()
          const tokenData = await UserLogin(userDetails)
          await login({
            token: tokenData,
          });
        }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            />
          </Form.Group>
          <Button
            className="mb-1" variant="primary" type="submit">
            Log In
          </Button>
          <hr />
          <div className="text-center text-muted mb-3" id="forget-password">
            or
          </div>
          <Button variant="primary" href="/sign-up">
            Create New Account
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Login
