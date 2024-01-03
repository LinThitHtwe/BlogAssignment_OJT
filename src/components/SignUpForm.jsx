import { Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";

let userSchema = object({
  email: string().email(),
});

const SignUpForm = () => {
  const handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Format";
    }
    return errors;
  };
  return (
    <div className="p-5">
      <div className="border border-black p-5 d-flex flex-column align-items-center ">
        <h3 className="text-center">Sign up for the newsletter</h3>
        <p className="text-center px-5">
          If you want relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.
        </p>
        <div className="d-flex w-75">
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
            validate={handleValidate}
            validateOnBlur={true}
          >
            {({ values, errors, handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <input
                  className="w-75 p-3"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Enter Your Email"
                />
                {errors.email && <p>{errors.email}</p>}
                <button className="bg-black p-3 text-white">SIGN UP</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
