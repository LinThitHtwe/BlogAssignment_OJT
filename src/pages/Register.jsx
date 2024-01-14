import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { loginRegistervalidationSchema } from "validations/validator";

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
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginRegistervalidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  console.log(values);
                }}
              >
                <Form className="d-flex flex-column gap-4">
                  <div>
                    <Field
                      className="form-control login-signup-input"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div>
                    <Field
                      className="form-control login-signup-input"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="d-flex flex-column flex-lg-row w-100 mt-5 justify-content-around align-items-center md:gap-4">
                    <Button
                      type="submit"
                      className="login-signup-btn"
                      variant="dark"
                      size="lg"
                    >
                      Sign Up
                    </Button>
                    <p className="mt-2 or-text md:mt-3">or</p>
                    <Button
                      type="button"
                      className="login-signup-btn secondary-btn-login-signup"
                      variant="light"
                      size="lg"
                    >
                      Sign In
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
