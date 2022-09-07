import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import { AddUser } from "../script/controller"

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userDetails)
    AddUser(userDetails)
  }
  const [error, setError] = useState(null)
  const [errorN, setErrorN] = useState(null)
  const [errorP, setErrorP] = useState(null)
  const [errorpw, setErrorpw] = useState(null)
  const [message, setMessage] = useState("")
  const [messageN, setMessageN] = useState("")
  const [messageP, setMessageP] = useState("")
  const [cfMessage, setcfMessage] = useState("")

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }
  function isValidLengthN(name) {
    return name.length >= 6
  }
  function isValidLengthP(password) {
    return password.length >= 8
  }
  const checkEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid")
    } else {
      setError(null)
    }
    setMessage(event.target.value)
  }
  const checkLengthN = (event) => {
    if (!isValidLengthN(event.target.value)) {
      setErrorN("Display Name must be at least 6 characters long")
    } else {
      setErrorN(null)
    }
    setMessageN(event.target.value)
  }
  const checkLengthP = (event) => {
    if (!isValidLengthP(event.target.value)) {
      setErrorP("Password must be at least 8 characters long")
    } else {
      setErrorP(null)
    }
    setMessageP(event.target.value)
  }
  const checkPassword = (event) => {
    if (!(userDetails.password === userDetails.confirmPassword)) {
      setErrorpw("Confirm password is not matched")
    } else {
      setErrorpw(null)
    }
    setcfMessage(event.target.value)
  }

  const handleEmail = (event) => {
    setUserDetails({ ...userDetails, email: event.target.value })
    checkEmail(event)
  }

  const handleDisplayN = (event) => {
    setUserDetails({ ...userDetails, name: event.target.value })
    checkLengthN(event)
  }

  const handlePass = (event) => {
    setUserDetails({ ...userDetails, password: event.target.value })
    checkLengthP(event)
  }

  const handleConf = (event) => {
    setUserDetails({
      ...userDetails,
      confirmPassword: event.target.value,
    })
    checkPassword(event)
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
              onChange={(e) => handleEmail(e)}
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
              onChange={(e) => handleDisplayN(e)}
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
              onChange={(e) => handlePass(e)}
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
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              maxLength={20}
              value={cfMessage}
              onChange={(e) => handleConf(e)}
            />
            {errorpw && (
              <h6 style={{ color: "white", marginTop: "5px" }}>{errorpw}</h6>
            )}
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
