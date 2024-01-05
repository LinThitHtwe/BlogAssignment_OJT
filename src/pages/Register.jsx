import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

const Register = () => {
  return (
    <Container fluid className="overflow-hidden">
      <Row className="d-flex flex-column flex-md-row ">
        <Col className="custom-login-signup-column h-100 p-0">
          <Image
            className="img-fluid login-signup-image"
            alt="Login Register"
            src="login_register.png"
          />
        </Col>
        <Col className="custom-login-signup-column align-items-center">
          <div className="p-3 p-lg-5 h-auto">
            <div className="d-flex justify-content-center flex-column align-items-center p-3 p-lg-5">
              <h1 className="font-bold mb-5  text-center text-md-start  mb-md-0 w-100">
                Create New Account
              </h1>
              <button className="signin-with-google mt-5">
                <i className="fab fa-google"></i> Continue With Google
              </button>
              <div className="w-100 d-flex justify-content-around mt-3">
                <div className="login-signup-line mt-3 mb-4"></div>
                <p className="or-text">or</p>
                <div className="login-signup-line mt-3 mb-4"></div>
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
              <div className="d-flex flex-column flex-lg-row w-100 mt-5 justify-content-around align-items-center md:gap-4">
                <Button className="login-signup-btn" variant="dark" size="lg">
                  Sign Up
                </Button>
                <p className="mt-2 or-text md:mt-3">or</p>
                <Button
                  className="login-signup-btn secondary-btn-login-signup"
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

export default Register;
