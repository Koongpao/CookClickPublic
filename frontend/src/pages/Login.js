import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const Login = () => {
  return (
    <>
      <h1 className="m-5 text-center">Login</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col formbox p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="mb-1" variant="primary" type="submit">
            Log In
          </Button>
          <a
            href="/"
            className="text-sm text-end text-muted mb-3"
            id="forget-password"
          >
            forgotten password?
          </a>
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
