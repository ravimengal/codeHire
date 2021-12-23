import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [cnpassword, setCnpassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const details={name,password,cnpassword}
    console.log(details)
    const json=JSON.stringify(details);
    localStorage.setItem('data',json)
  };



  return (
    <>
      <Card className="mt-5 ">
        <Card.Body>
          <h2 className="text-center mb-4"> Signup</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) => setCnpassword(e.target.value)}
                type="password"
                required
              />
            </Form.Group>
            {password == cnpassword ? (
              <Button
                className="w-100 mt-2"
                onClick={handleSubmit}
                type="submit"
              >
                Signup
              </Button>
            ) : (
              <Button className="w-100 mt-2" disabled>
                Password not Matching
              </Button>
            )}
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Already Have Account? <Link to="/login">Login</Link>
        </div>
      </Card>
    </>
  );
};

export default Signup;
