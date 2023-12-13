import React from "react";
import ReadNext from "../components/ReadNext";

const BlogDetail = () => {
  return (
    <div className="d-flex flex-column  mt-4  justify-content-center align-items-center gap-4  ">
      <p className="text-center h2 main-blog-title">
        A few words about this blog platform, Ghost, and how this site was made
      </p>

      <p className="text-center h5 border-bottom border-black pb-4  main-blog-subtext">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
      <img
        src="image2.png"
        className="img-fluid mx-auto  "
        alt="Responsive image"
      />
      <div className="border-top border-black read-next-container">
        <img src="eyes.svg" alt="eyes" className="eyes-logo" />
        <h3 className="text-center mt-5">What to Read Next</h3>
        <ReadNext />
      </div>
    </div>
  );
};

export default BlogDetail;
