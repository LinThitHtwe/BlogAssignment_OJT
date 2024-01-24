import routes from "constants/routes";
import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const UnAuthorize = () => {
  const navigation = useNavigate();
  return (
    <div className="unauthorize-container d-flex flex-column justify-content-center gap-4">
      <h1 className="text-center">You aren't allow to access this</h1>
      <div className="d-flex justify-content-center gap-3">
        <Button variant="outline-dark" onClick={() => navigation(-1)}>
          Back
        </Button>
        <Button variant="dark">
          <Link to={routes.login} className="text-decoration-none text-white">
            Try Logging In Instead
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default UnAuthorize;
