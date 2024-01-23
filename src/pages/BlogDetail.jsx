import { getBlogById } from "api/APIs";
import BlogDetailAuthor from "components/BlogDetailAuthor";
import ReadNext from "components/ReadNext";
import SignUpForm from "components/SignUpForm";
import useFetchData from "hooks/useFetchData";
import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchData(["blogs", id], () =>
    getBlogById(id)
  );

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
      <div className="my-5 border-top border-black author-container p-4">
        {data && <BlogDetailAuthor author={data.data.creator} />}
        <p className="mt-3 p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur
          laborum nihil voluptatem a vero dolore commodi assumenda explicabo
          ipsum, ad magni aliquam ratione officiis hic architecto ipsam maiores
          laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur
          laborum nihil voluptatem a vero dolore commodi assumenda explicabo
          ipsum, ad magni aliquam ratione officiis hic architecto ipsam maiores
          laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe tenetur laborum nihil voluptatem a vero dolore commodi assumenda
          explicabo ipsum, ad magni aliquam ratione officiis hic architecto
          ipsam maiores laboriosam.
        </p>
        <h3 className="my-5 font-weight-bold">Next on the pipeline</h3>
        <p>
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
          dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
          quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.{" "}
        </p>
        <p>
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla.Morbi efficitur auctor metus, id
          mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
        </p>
        <div className="image-container text-black">
          <img src="blog_detail.jpeg" alt="Blog Detail Image" />
        </div>
        <p className="text-center  px-4">
          Image caption centered this way and I’ll make this a bit longer to
          indicate the amount of line-height.
        </p>
        <p className="mt-5 pt-3">
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Aliquam
          quis posuere ligula.Aenean pharetra quis lacus at viverra. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam quis posuere ligula.
        </p>
        <p className="mt-4 pt-4">
          In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo
          lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu.
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla. Nulla non volutpat leo.
        </p>

        <p>A list looks like this:</p>
        <ul className="d-flex  flex-column gap-3">
          <li>First Item in List</li>
          <li>
            Second Item in List Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi, quibusdam cupiditate! Aut laboriosam
            maiores, iste aliquid magnam quas te
          </li>
          <li>Thrid Item in List</li>
        </ul>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam quis posuere ligula.{" "}
        </p>
        <p className="mt-4 pt-4">Thanks for reading,</p>
        <span>Mika</span>
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
          Tag:
          <a className="tag-link" href="#">
            product design
          </a>
          ,
          <a className="tag-link" href="#">
            culture
          </a>
        </div>
        <div className="d-flex flex-column flex-md-row mt-5 gap-2">
          <img src="profile.png" className="profile-image" />
          <p className="p-0 text-uppercase font-weight-bold">
            <span className="name-bold">Mika Matikainen</span> is a Design
            Founder & Advisor, Berlin School of Creative Leadership Executive
            MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose
            stakeholder.{" "}
          </p>
        </div>
      </div>
      <div className="border-top border-black read-next-container">
        <img src="eyes.svg" alt="eyes" className="eyes-logo" />
        <h3 className="text-center mt-5">What to Read Next</h3>
        <ReadNext />
      </div>
      <SignUpForm />
    </div>
  );
};

export default BlogDetail;
