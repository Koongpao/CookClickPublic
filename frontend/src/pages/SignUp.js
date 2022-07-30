import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
  return (
    <>
      <h1 className="m-5 text-center">Sign Up</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col formbox p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Display Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Display Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button href="/" className="mb-1" variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  )
}

export default SignUp