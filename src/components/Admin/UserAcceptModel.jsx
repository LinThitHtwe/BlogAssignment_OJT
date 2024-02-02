import React from "react";
import { Button, Modal } from "react-bootstrap";

const UserAcceptModel = ({
  shouldModelOpen,
  setShouldModelOpen,
  id,
  action,
}) => {
  const handleClick = (status) => {
    setShouldModelOpen(false);
    action(id, status);
  };
  return (
    <Modal
      show={shouldModelOpen}
      centered
      onHide={() => setShouldModelOpen(false)}
    >
      <Modal.Header closeButton>Change Status</Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center gap-3">
        <Button
          variant="success"
          className="w-50"
          onClick={() => {
            handleClick("active");
          }}
        >
          Active
        </Button>
        <Button
          variant="danger"
          className="w-50"
          onClick={() => {
            handleClick("suspended");
          }}
        >
          Inactive
        </Button>
        <Button
          variant="outline-secondary"
          className="w-50"
          onClick={() => setShouldModelOpen(false)}
        >
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default UserAcceptModel;
