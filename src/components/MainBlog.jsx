import React from "react";

const MainBlog = () => {
  return (
    <div className="d-flex flex-column  mt-4  justify-content-center align-items-center gap-4  ">
      <img
        src="image2.png"
        className="img-fluid mx-auto  "
        alt="Responsive image"
      />

      <p className="text-center h2 main-blog-title">
        A few words about this blog platform, Ghost, and how this site was made
      </p>

      <p className="text-center h5 border-bottom border-black pb-4  main-blog-subtext">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
    </div>
  );
};

export default MainBlog;
