import React from "react";
import { Link } from "react-router-dom";

const MainBlog = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex flex-column text-decoration-none text-dark mt-4  justify-content-center align-items-center gap-4  ">
      <Link to={`/blog/${data._id}`}>
        <img
          src="image2.png"
          className="img-fluid mx-auto  "
          alt="Responsive image"
        />
      </Link>

      <p className="text-center h2 main-blog-title">{data.title}</p>

      <p className="text-center h5 border-bottom border-black pb-4  main-blog-subtext">
        {data.title}
      </p>
    </div>
  );
};

export default MainBlog;
