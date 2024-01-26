import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllArticles = ({ blogs }) => {
  return (
    <Container className="all-article-container">
      <Row className="all-article-row">
        {blogs &&
          blogs.map((blog) => (
            <Col key={blog._id} md={6}>
              <Link
                to={`/blog/${blog._id}`}
                className="text-decoration-none text-black "
              >
                <div className="all-article-image-container">
                  <img
                    src={blogs.url_list[0]}
                    className="img-fluid mx-auto d-block all-article-image"
                    alt="Responsive image"
                  />

                  <p className="all-article-title opacity-75">{blog.title}</p>
                </div>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AllArticles;
