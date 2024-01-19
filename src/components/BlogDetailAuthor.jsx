import React from "react";

const BlogDetailAuthor = ({ author }) => {
  console.log(author);
  return (
    <div className="d-flex flex-column justify-content-between flex-md-row">
      <div className="d-flex  gap-2">
        <img src="profile.png" className="profile-image-blog-detail" />
        <div>
          <p className="p-0 text-uppercase font-weight-bold">
            {/* {author.username} */}
          </p>
          <p className="p-0">Apr 15, 2020 · 4 min read</p>
        </div>
      </div>
      <div className="d-flex  h-100 i ">
        <span className="icon-container">
          <i className="fa-brands fa-facebook"></i>
        </span>
        <span className="icon-container">
          <i className="fa-brands fa-twitter"></i>
        </span>
      </div>
    </div>
  );
};

export default BlogDetailAuthor;
