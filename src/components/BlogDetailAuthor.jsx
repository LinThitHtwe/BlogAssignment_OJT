import React from "react";
import { formatDistanceToNow } from "date-fns";
const BlogDetailAuthor = ({ author, blogCreatedDate }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className="d-flex flex-column justify-content-between flex-md-row">
      <div className="d-flex  gap-2">
        <img
          src="profile.png"
          className="profile-image-blog-detail"
          alt={`${author.username}`}
        />
        <div>
          <p className="p-0 text-uppercase font-weight-bold">
            {/* {author.username} */}
          </p>
          <p className="p-0">
            {formatDate(blogCreatedDate)} ·{" "}
            {formatDistanceToNow(new Date(blogCreatedDate), {
              addSuffix: true,
            })}
          </p>
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
