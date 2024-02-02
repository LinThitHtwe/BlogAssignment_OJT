import { getBlogById } from "api/APIs";
import BlogDetailAuthor from "components/BlogDetailAuthor";
import ImageCarousel from "components/ImageCarousel";
import ReadNext from "components/ReadNext";
import SignUpForm from "components/SignUpForm";
import useFetchData from "hooks/useFetchData";
import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchData(["blogs", id], () =>
    getBlogById(id)
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="d-flex flex-column  mt-4  justify-content-center align-items-center gap-4  ">
      <p className="text-center h2 main-blog-title">
        {data && data.data.title}
      </p>

      <p className="text-center h5 border-bottom border-black pb-4  main-blog-subtext">
        {data && data.data.title}
      </p>
      <div className="w-75">
        {data && data.data.url_list.length > 0 && (
          <ImageCarousel images={data.data.url_list} />
        )}
      </div>
      <div className="my-5 border-top border-black author-container p-2 p-md-4">
        {data && (
          <BlogDetailAuthor
            author={data.data.creator}
            blogCreatedDate={data.data.createdAt}
          />
        )}
        <p className="mt-3 p-0 p-md-4 lh-lg">{data && data.data.content}</p>
        <p className="mt-4 pt-4">Thanks for reading,</p>
        <span>{data && data.data.creator.username}</span>
        <div className="mt-5 pt-3 d-flex flex-column flex-md-row gap-2  justify-content-center">
          <div className="share-link-container d-flex gap-3 p-2 align-items-center rounded">
            <i className="fa-brands fa-facebook"></i>
            <span>Share on Facebook</span>
          </div>
          <div className="share-link-container d-flex gap-3 p-2 align-items-center rounded">
            <i className="fa-brands fa-twitter"></i>
            <span>Share on Twitter</span>
          </div>
        </div>
        <div className="mt-4">
          Categories:
          {data &&
            data.data.categories.map((category, index) => (
              <React.Fragment key={category.id}>
                <a className="tag-link" href="#">
                  {category.name}
                </a>
                {index < data.data.categories.length - 1 && ", "}
              </React.Fragment>
            ))}
        </div>
        <div className="d-flex flex-column flex-md-row mt-5 gap-2">
          <img
            src="/profile.png"
            alt={`${data && data.data.creator.username}'s profile`}
            className="profile-image"
          />
          <p className="p-0 text-uppercase font-weight-bold">
            <span className="name-bold">
              {data && data.data.creator.username}
            </span>{" "}
            {data && data.data.creator.description}
          </p>
        </div>
      </div>
      <div className="border-top border-black read-next-container">
        <img src="../eyes.svg" alt="eyes" className="eyes-logo" />
        <h3 className="text-center mt-5">What to Read Next</h3>
        {data && <ReadNext currentReadingBlogId={data.data._id} />}
      </div>
      <SignUpForm />
    </div>
  );
};

export default BlogDetail;
