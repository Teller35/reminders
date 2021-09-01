import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";

const LogInPage = () => {
  const history = useHistory();
  return (
    <section>
      <div onClick={() => history.goBack()}>&larr; Go Back</div>
      <Container>
        <Form>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form.Group className="mb-3" controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default LogInPage;