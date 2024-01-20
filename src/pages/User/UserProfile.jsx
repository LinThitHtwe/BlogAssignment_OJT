import UserBlogList from "components/User/UserBlogList";
import React from "react";
import { Button } from "react-bootstrap";

const UserProfile = () => {
  return (
    <div className="user-profile-container p-5 bg-light">
      <div className="bg-white rounded d-flex flex-column flex-md-row justify-content-around rounded align-items-center p-4">
        <div className="d-flex flex-column gap-3 align-items-center">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            className="profile-image"
          />
          <p className="fw-bold">Username : John Doe</p>
        </div>
        <div className="d-flex flex-column justify-content-center justify-content-md-start px-5">
          <p className="py-2 fw-bold">
            Status : <span className="text-success">Active</span>
          </p>
          <p className="py-2 fw-bold">Email : placeholder@gmail.com</p>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-center justify-content-md-end">
        <Button variant="warning" className="fw-bold text-white p-2 ">
          Create
        </Button>
      </div>

      <UserBlogList />
    </div>
  );
};

export default UserProfile;
