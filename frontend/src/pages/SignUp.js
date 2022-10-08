import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import { AddUser, UserLogin } from "../script/controller"
import { AcceptedPopup, DeniedPopup } from "../components/SignInPopup"
import { useAuth } from "../script/useAuth"
import { useNavigate } from "react-router-dom"

const SignUp = ({ onchangelogin }) => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    displayname: "",
    email: "",
    password: "",
  })
  const [modalShowAccepted, setModalShowAccepted] = useState(false)
  const [modalShowDenied, setModalShowDenied] = useState(false)
  const [deniedMessage, setDeniedMessage] = useState("")
  const { login } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (error || errorN || errorpw || errorP) {
      setDeniedMessage("Please fill in all fields")
      setModalShowDenied(true)
      return
    }
    const reqMessage = await AddUser(userDetails)
    if (!reqMessage.success) {
      console.log(reqMessage.message)
      setDeniedMessage(reqMessage.message)
      setModalShowDenied(true)
    }
    else {
      setModalShowAccepted(true)
    }
  }
  const [error, setError] = useState(null)
  const [errorN, setErrorN] = useState(null)
  const [errorP, setErrorP] = useState(null)
  const [errorpw, setErrorpw] = useState(null)
  const [message, setMessage] = useState("")
  const [messageN, setMessageN] = useState("")
  const [messageP, setMessageP] = useState("")
  const [cfMessage, setcfMessage] = useState("")

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }
  const isValidName = (name) => {
    return /^[a-zA-Z0-9_]+$/.test(name)
  }

  const isValidLengthN = (name) => {
    return name.length >= 6 && name.length <= 20
  }
  const isValidLengthP = (password) => {
    return password.length >= 8 && password.length <= 20
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
      setErrorN("Display Name must be 6-20 characters long")
    }
    else if (!isValidName(event.target.value)) {
      setErrorN("Display Name must only contain letters, numbers and underscores")
    }
    else {
      setErrorN(null)
    }
    setMessageN(event.target.value)
  }
  const checkLengthP = (event) => {
    if (!isValidLengthP(event.target.value)) {
      setErrorP("Password must be 8-20 characters long")
    } else {
      setErrorP(null)
    }
    setMessageP(event.target.value)
  }
  const checkPassword = (CFPassword) => {
    if (!(userDetails.password === CFPassword)) {
      setErrorpw("Confirm password is not matched")
    } else {
      setErrorpw(null)
    }
    setcfMessage(CFPassword)
  }

  const handleEmail = (event) => {
    setUserDetails({ ...userDetails, email: event.target.value })
    checkEmail(event)
  }

  const handleDisplayN = (event) => {
    setUserDetails({ ...userDetails, displayname: event.target.value })
    checkLengthN(event)
  }

  const handlePass = (event) => {
    setUserDetails({ ...userDetails, password: event.target.value })
    checkLengthP(event)
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
              style={{ borderColor: error ? "#ff0033" : "" }}
            />
            {error && (
              <div className="text-sm px-1" style={{ color: "#ff0033", fontWeight: "400" }}>! {error}</div>
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
              style={{ borderColor: errorN ? "#ff0033" : "" }}
            />
            {errorN && (
              <div className="text-sm px-1" style={{ color: "#ff0033", fontWeight: "400" }}>! {errorN}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              maxLength={20}
              value={messageP}
              onChange={(e) => handlePass(e)}
              style={{ borderColor: errorP ? "#ff0033" : "" }}
            />
            {errorP && (
              <div className="text-sm px-1" style={{ color: "#ff0033", fontWeight: "400" }}>! {errorP}</div>
            )}
          </Form.Group>
          <Form.Group className="mb-2" controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              maxLength={20}
              value={cfMessage}
              onChange={(e) => checkPassword(e.target.value)}
              style={{ borderColor: errorpw ? "#ff0033" : "" }}
            />
            {errorpw && (
              <div className="text-sm px-1" style={{ color: "#ff0033", fontWeight: "400" }}>! {errorpw}</div>
            )}
          </Form.Group>

          <Button
            className="my-2"
            variant="primary"
            type="submit"
            onClick={ (e) => handleSubmit(e) }
          >
            Sign Up
          </Button>
        </Form>
      </div>
      <AcceptedPopup
        show={modalShowAccepted}
        onHide={() => {
          navigate("/login")
        }}
      />
      <DeniedPopup
        className="text-center"
        show={modalShowDenied}
        onHide={() => setModalShowDenied(false)}
        message={deniedMessage}
      />
    </>
  )
}

export default SignUp
