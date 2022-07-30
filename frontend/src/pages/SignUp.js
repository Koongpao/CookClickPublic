import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, displayName, password, passwordConfirm);
    const validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    if (validateEmail(email) && password === passwordConfirm) {
      console.log('valid email and password');
    }
    else {
      console.log('invalid email or password');
    }
  }

  
  return (
    <>
      <h1 className="m-5 text-center">Sign Up</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col formbox p-4">
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formDisplayName">
            <Form.Label>Display Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Display Name"
              onChange={(e) => setDisplayName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}/>
          </Form.Group>

          <Button href="/" className="mb-1" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  )
}

export default SignUp