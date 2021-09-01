import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const LogInPage = () => {
  const history = useHistory();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
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
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          {error ? (
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h4>Oops please enter the correct account information!</h4>
              </Col>
            </Row>
          ) : null}
          <Row className="justify-content-md-center">
            <Col md="auto">
              <button type="submit">Submit</button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default LogInPage;
