import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUpPage = () => {
  const history = useHistory();

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <section>
      <div onClick={() => history.goBack()}>&larr; Go Back</div>
      <Container>
        <Form onSubmit={handleFormSubmit}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form.Group className="mb-3" controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="username"
                  id="username"
                  placeholder="Username"
                  value={formState.username}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <button type="submit">Submit</button>
            </Col>
          </Row>
        </Form>
        {error && <div>Sign Up Failed!</div>}
      </Container>
    </section>
  );
};

export default SignUpPage;
