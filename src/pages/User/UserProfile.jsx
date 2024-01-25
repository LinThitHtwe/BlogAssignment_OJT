import { getUserById } from "api/APIs";
import UserBlogList from "components/User/UserBlogList";
import routes from "constants/routes";
import useFetchData from "hooks/useFetchData";
import UnAuthorize from "pages/UnAuthorize";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const { data } = useFetchData(["user", id], () => getUserById(id));
  const user = useSelector((state) => state.user.user);

  if (!user || user?.user._id != id) {
    return <UnAuthorize />;
  }

  return (
    <div className="user-profile-container p-5 bg-light">
      <div className="bg-white rounded d-flex flex-column flex-md-row justify-content-around rounded align-items-center p-4">
        <div className="d-flex flex-column gap-3 align-items-center">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            className="profile-image"
          />
          <p className="fw-bold">Username : {data && data.data.username}</p>
        </div>
        <div className="d-flex flex-column justify-content-center justify-content-md-start px-5">
          <p className="py-2 fw-bold">Email : {data && data.data.email}</p>
          <p className="py-2 fw-bold">
            Description :
            <span className="text-success w-50">
              {data && data.data.description}
            </span>
          </p>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-center justify-content-md-end">
        <Button variant="warning" className="fw-bold text-white p-2 ">
          <Link
            className="text-decoration-none text-white"
            to={routes.userBlogCreate}
          >
            Create
          </Link>
        </Button>
      </div>
      {data && <UserBlogList userId={data.data._id} />}
    </div>
  );
};

export default UserProfile;
