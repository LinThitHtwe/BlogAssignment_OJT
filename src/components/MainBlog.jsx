import React from "react";
import { Link } from "react-router-dom";

const MainBlog = ({ data }) => {
  return (
    <div className="d-flex flex-column text-decoration-none text-dark mt-4  justify-content-center align-items-center gap-4  ">
      <Link to={`/blog/${data?._id}`} className="main-blog-image-container">
        <img
          src={data?.url_list[0]}
          className="w-100 h-100 object-fit-cover  "
          alt="Responsive image"
        />
      </Link>

      <p className="text-center h2 main-blog-title">{data?.title}</p>

      <p className="text-center h5 border-bottom border-black pb-4  main-blog-subtext">
        {data?.title}
      </p>
    </div>
  );
};

export default MainBlog;
