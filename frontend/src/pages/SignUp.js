import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const SignUp = () => {

  const [userDetails, setUserDetails] = useState({name: '', email: '', password: ''}); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  }
  const checkPwd = (pwd, confirmPwd) => {
    if (pwd === confirmPwd) {
      console.log('passwords match');
    } else {
      console.log('passwords do not match');
    }
  }

  return (
    <>
      <h1 className="m-5 text-center">Create Account</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col formbox p-4">
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"
              onChange={(e) => setUserDetails({...userDetails, email: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formDisplayName">
            <Form.Label>Display Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Display Name"
              onChange={(e) => setUserDetails({...userDetails, name: e.target.value})} />
            <div className="text-sm text-end text-muted">display name must be between 6 and 20 characters.</div>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={(e) => setUserDetails({...userDetails, password: e.target.value})} />
            <div className="text-sm text-end text-muted">password must be between 8 and 20 characters.</div>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password"
              onChange={(e) => checkPwd(userDetails.password, e.target.value)} />
          </Form.Group>

          <Button className="my-2" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  )
}

export default SignUp