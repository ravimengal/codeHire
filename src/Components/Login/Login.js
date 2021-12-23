import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  return (
    <>
      <Card className="mt-5 ">
        
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100 mt-2" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </Card>

      
    </>
  );
};

export default Login;
