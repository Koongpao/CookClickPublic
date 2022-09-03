import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"

const SignUp = () => {

  const [userDetails, setUserDetails] = useState({name: '', email: '', password: '', confirmPassword: ''}); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  }

  return (
    <>
      <h1 className="m-5 text-center">Create Account</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col formbox p-4">
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={message}
              onChange={
                ((e) =>
                  setUserDetails({ ...userDetails, email: e.target.value }),
                checkEmail)
              }
            />
            {error && (
              <h6 style={{ color: "white", marginTop: "5px" }}>{error}</h6>
            )}
          </Form.Group>
          <Form.Group className="mb-5" controlId="formDisplayName">
            <Form.Label>Display Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Display Name"
              maxLength={20}
              value={messageN}
              onChange={
                ((e) =>
                  setUserDetails({ ...userDetails, name: e.target.value }),
                checkLengthN)
              }
            />
            {errorN && (
              <h6 style={{ color: "white", marginTop: "5px" }}>{errorN}</h6>
            )}
            <div className="text-sm text-end text-muted">
              display name must be between 6 and 20 characters.
            </div>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              maxLength={20}
              value={messageP}
              onChange={
                ((e) =>
                  setUserDetails({ ...userDetails, password: e.target.value }),
                checkLengthP)
              }
            />
            {errorP && (
              <h6 style={{ color: "white", marginTop: "5px" }}>{errorP}</h6>
            )}
            <div className="text-sm text-end text-muted">
              password must be between 8 and 20 characters.
            </div>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password"
              onChange={(e) => setUserDetails({...userDetails, confirmPassword: e.target.value})} />
          </Form.Group>

          <Button
            className="my-2"
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  )
}

export default SignUp
