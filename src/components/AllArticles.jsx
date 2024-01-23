import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AllArticles = ({ blogs }) => {
  return (
    <Container className="all-article-container">
      <Row className="all-article-row">
        {blogs.map((blog) => (
          <Col key={blog._id} md={6}>
            <div className="all-article-image-container">
              <img
                src="image2.png"
                className="img-fluid mx-auto d-block all-article-image"
                alt="Responsive image"
              />
              <p className="all-article-title">{blog.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllArticles;
