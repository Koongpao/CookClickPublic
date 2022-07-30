import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errPass, setErrPass] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errConfirm, setErrConfirm] = useState(false);
  const [errMail, setErrMail] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    if (!validateEmail(email)) {
      console.log('invalid email and password');
      setErrMail(true);
      setShowError(true);
    }
    if (password !== passwordConfirm) {
      console.log('reconfirm password');
      setErrConfirm(true);
      setShowError(true);
    }
    if (displayName.length < 6 || displayName.length > 20) {
      console.log('invalid display name');
      setErrName(true);
      setShowError(true);
    }
    if (password.length < 8 || password.length > 20) {
      console.log('password length must be between 8 and 20 characters');
      setErrPass(true);
      setShowError(true);
    }

    if (
      validateEmail(email)
      && password === passwordConfirm
      && displayName.length >= 6 && displayName.length <= 20
      && password.length >= 8 && password.length <= 20
    )
    {
      console.log('sign up success');
      const user = {
        email: email,
        displayName: displayName,
        password: password,
      }
      console.log(user);
    }
  }

  return (
    <>
      <h1 className="m-5 text-center">Sign Up</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col formbox p-4">
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formDisplayName">
            <Form.Label>Display Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Display Name"
              onChange={(e) => setDisplayName(e.target.value)} />
            <div className="text-sm text-end text-muted">display name must be between 6 and 20 characters.</div>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
            <div className="text-sm text-end text-muted">password must be between 8 and 20 characters.</div>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)} />
          </Form.Group>

          {
            showError ?
              (
                <div className="err-box px-4 py-2 my-1">
                  {errMail ? <div>Error: invaild email.</div> : null}
                  {errConfirm ? <div>Error: reconfirm password.</div> : null}
                  {errName ? <div>Error: invalid display name.</div> : null}
                  {errPass ? <div>Error: password length must be between 8 and 20 characters.</div> : null}
                </div>
              )
              : (null)
          }

          <Button href="/" className="my-2" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  )
}

export default SignUp