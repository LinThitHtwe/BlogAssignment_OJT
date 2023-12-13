import React from "react";

const SignUpForm = () => {
  return (
    <div className="p-5">
      <div className="border border-black p-5 d-flex flex-column align-items-center ">
        <h3 className="text-center">Sign up for the newsletter</h3>
        <p className="text-center px-5">
          If you want relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.{" "}
        </p>
        <div className="d-flex w-75">
          <input className="w-75 p-3" placeholder="Enter Your Email" />
          <button className="bg-black p-3 text-white">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
