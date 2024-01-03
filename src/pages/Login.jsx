import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src="login_register.png" height={750} width={"100%"} />
        </Col>
        <Col className="w-100">
          <div className="p-5 h-auto">
            <h1 className="font-bold mb-5">SignUp</h1>
            <div className="d-flex justify-content-center flex-column align-items-center p-5">
              <button className="signin-with-google">
                <i className="fa-brands fa-google"></i> Contine With Google
              </button>
              <div className="w-100 d-flex justify-content-around mt-3">
                <div className="login-signup-line mt-3  mb-4"></div>
                <p className="or-text">or</p>
                <div className="login-signup-line mt-3   mb-4"></div>
              </div>
              <Form className="d-flex flex-column gap-4">
                <Form.Control
                  className="login-signup-input"
                  size="lg"
                  type="text"
                  placeholder="username"
                />

                <Form.Control
                  className="login-signup-input"
                  size="lg"
                  type="password"
                  placeholder="password"
                />
              </Form>
              <div className="d-flex w-100 mt-5 justify-content-around align-items-center gap-4">
                <Button className="w-50" variant="dark" size="lg">
                  Sign Up
                </Button>
                <p className="or-text mt-3">or</p>
                <Button
                  className="w-50 secondary-btn-login-signup"
                  variant="light"
                  size="lg"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
