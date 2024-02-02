import routes from "constants/routes";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "reduxapp/features/user/userSlice";

const SessionExpiredModel = ({ shouldModelOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeUser());
    navigate(routes.login);
  };

  return (
    <Modal backdrop="static" keyboard={false} show={shouldModelOpen} centered>
      <Modal.Header>Session Expired</Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center gap-3">
        <p>Sorry. Session Expired. Try Logging in Again</p>
        <Button onClick={handleClick} variant="primary" className="w-50">
          Login
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default SessionExpiredModel;
